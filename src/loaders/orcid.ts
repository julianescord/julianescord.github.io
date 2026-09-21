import type { Loader, LoaderContext } from 'astro/loaders';

// Trae las publicaciones desde ORCID en tiempo de construccion, para no tener
// que mantener a mano lo que ya esta registrado alli. El HTML resultante es
// estatico: ORCID no se consulta cuando alguien visita el sitio.
//
// La API publica de ORCID no pide autenticacion, pero pide cabecera Accept.
const BASE = 'https://pub.orcid.org/v3.0';

interface OpcionesOrcid {
	id: string;
	/** Trabajos a excluir por DOI, por ejemplo si ya tienen ficha propia. */
	excluirDoi?: string[];
}

/** Tipos de ORCID mapeados a los del esquema de la coleccion. */
const TIPOS: Record<string, string> = {
	'journal-article': 'articulo',
	'book-chapter': 'capitulo',
	'conference-paper': 'capitulo',
	dissertation: 'tesis',
	'dissertation-thesis': 'tesis',
	preprint: 'articulo',
	other: 'articulo',
};

const valor = (nodo: unknown): string | undefined => {
	if (nodo && typeof nodo === 'object' && 'value' in nodo) {
		const v = (nodo as { value: unknown }).value;
		return typeof v === 'string' ? v : v == null ? undefined : String(v);
	}
	return undefined;
};

/** Convierte un titulo de ORCID en un identificador usable como URL. */
const aRanura = (texto: string): string =>
	texto
		.normalize('NFD')
		.replace(/[̀-ͯ]/g, '')
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/^-+|-+$/g, '')
		.slice(0, 70);

/**
 * Describe la posicion en la autoria a partir del orden de la lista. ORCID no
 * rellena `contributor-sequence` en los registros importados de Crossref, asi
 * que se deduce del orden, que es el de la publicacion.
 */
const describirRol = (autores: string[], indice: number): string => {
	if (indice < 0) return 'Coautor';
	if (autores.length === 1) return 'Autor único';
	if (indice === 0) return `Primer autor, de ${autores.length}`;
	if (indice === autores.length - 1) return `Autor de correspondencia, de ${autores.length}`;
	return `Coautor (${indice + 1}.º de ${autores.length})`;
};

const pedir = async (url: string): Promise<any> => {
	const respuesta = await fetch(url, { headers: { Accept: 'application/json' } });
	if (!respuesta.ok) {
		throw new Error(`ORCID respondio ${respuesta.status} en ${url}`);
	}
	return respuesta.json();
};

export function orcidLoader({ id, excluirDoi = [] }: OpcionesOrcid): Loader {
	const excluidos = new Set(excluirDoi.map((d) => d.toLowerCase()));

	return {
		name: 'orcid',

		async load({ store, logger, parseData, meta }: LoaderContext) {
			try {
				const resumen = await pedir(`${BASE}/${id}/works`);
				const grupos: any[] = resumen.group ?? [];

				// Si ORCID no ha cambiado desde la ultima construccion, se
				// conserva lo que ya hay en el almacen y no se vuelve a pedir
				// el detalle de cada trabajo.
				const sello = String(resumen['last-modified-date']?.value ?? '');
				if (sello && meta.get('last-modified') === sello && store.keys().length > 0) {
					logger.info(`ORCID sin cambios: se conservan ${store.keys().length} trabajos.`);
					return;
				}

				store.clear();
				let guardados = 0;

				for (const grupo of grupos) {
					const s = grupo['work-summary']?.[0];
					if (!s) continue;

					const titulo = valor(s.title?.title);
					if (!titulo) continue;

					const doi = (grupo['external-ids']?.['external-id'] ?? []).find(
						(x: any) => x['external-id-type'] === 'doi',
					)?.['external-id-value'];

					if (doi && excluidos.has(String(doi).toLowerCase())) {
						logger.info(`Se omite ${doi}: tiene ficha propia.`);
						continue;
					}

					// El detalle trae los autores y la revista, que el resumen no
					// incluye. Si falla, se usa lo que ya se tiene.
					let autores: string[] = [];
					let revista: string | undefined;
					try {
						const detalle = await pedir(`${BASE}/${id}/work/${s['put-code']}`);
						revista = valor(detalle['journal-title']);
						autores = (detalle.contributors?.contributor ?? [])
							.filter((c: any) => (c['contributor-attributes']?.['contributor-role'] ?? 'author') === 'author')
							.map((c: any) => valor(c['credit-name']))
							.filter((n: unknown): n is string => typeof n === 'string' && n.length > 0);
					} catch (error) {
						logger.warn(`No se pudo leer el detalle de "${titulo}": ${error}`);
					}

					// Se busca al titular del ORCID por apellido, porque el nombre
					// aparece escrito de varias formas segun la publicacion.
					const indice = autores.findIndex((n) => /ordo[ñn]ez/i.test(n));

					const anio = Number(valor(s['publication-date']?.year) ?? 0);

					// `parseData` devuelve solo los datos validados, sin el id: hay
					// que conservarlo aparte para pasarlo luego a `store.set`.
					const identificador = doi
						? aRanura(doi.split('/').pop() ?? titulo)
						: aRanura(titulo);

					const datos = await parseData({
						id: identificador,
						data: {
							titulo,
							resumen: autores.length
								? `${autores.join(', ')}.`
								: 'Registro importado desde ORCID.',
							tipo: TIPOS[s.type] ?? 'articulo',
							rol: describirRol(autores, indice),
							...(revista ? { venue: revista } : {}),
							anio,
							...(doi ? { doi } : {}),
							...(valor(s.url) ? { url: valor(s.url) } : {}),
							estado: 'publicado',
							etiquetas: [],
							// Las fichas escritas a mano usan orden bajo y quedan
							// arriba; estas se ordenan entre si por año.
							orden: 50 + (2100 - anio),
							origen: 'orcid',
						},
					});

					store.set({ id: identificador, data: datos });
					guardados++;
				}

				if (sello) meta.set('last-modified', sello);
				logger.info(`ORCID: ${guardados} trabajo(s) importado(s).`);
			} catch (error) {
				// Un fallo de red no debe tumbar la construccion: si ya hay datos
				// de una construccion anterior se usan, y si no, el sitio se
				// publica solo con las fichas escritas a mano.
				logger.warn(`No se pudo consultar ORCID (${error}).`);
				if (store.keys().length > 0) {
					logger.warn(`Se usan los ${store.keys().length} trabajo(s) de la ultima construccion.`);
				}
			}
		},
	};
}
