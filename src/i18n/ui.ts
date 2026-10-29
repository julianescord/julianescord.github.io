export const idiomas = ['es', 'en'] as const;
export type Idioma = (typeof idiomas)[number];
export const idiomaPorDefecto: Idioma = 'es';

export const esIdioma = (valor: string): valor is Idioma =>
	(idiomas as readonly string[]).includes(valor);

const textos = {
	es: {
		nombre: 'Julián E. Ordoñez',
		nav: {
			inicio: 'Inicio',
			proyectos: 'Proyectos',
			habilidades: 'Habilidades',
			software: 'Software',
			investigacion: 'Investigación',
			sobreMi: 'Sobre mí',
			contacto: 'Contacto',
		},
		idiomaCambio: 'English',
		idiomaAlterno: 'en',
		saltar: 'Saltar al contenido',
		temaCambio: 'Cambiar entre tema claro y oscuro',
		hero: {
			estado: 'Quito, Ecuador · Ingeniero biomédico',
			foto: 'Foto',
			ubicacion: 'Quito, Ecuador',
			universidad: 'Yachay Tech · Ingeniería Biomédica',
			empresa: 'Phagen Tech · Co-fundador y director de Nanotecnología',
			enfoqueA: 'Ingeniero biomédico',
			enfoqueB: 'Inteligencia artificial y aprendizaje automático',
			enfoqueC: 'Nanobiotecnología y ciencia de materiales',
			titular: 'Nanobiotecnología, modelado computacional y software científico.',
			descripcion:
				'Diseño sistemas que conectan el laboratorio con el cálculo: modelos de elementos finitos, herramientas de software para química computacional y análisis de datos biológicos. Cada proyecto de esta página respalda una de las habilidades de mi CV.',
			contacto: 'Escríbeme',
			rutas: 'Según quién me lea',
			rutaUniversidades: {
				titulo: 'Para universidades',
				texto: 'Investigación, publicaciones y formación técnica de laboratorio.',
				enlace: 'Ver investigación',
			},
			rutaIndustria: {
				titulo: 'Para la industria',
				texto: 'Software, modelado y análisis de datos aplicados a biotecnología.',
				enlace: 'Ver proyectos',
			},
		},
		credenciales: {
			publicaciones: 'publicaciones indexadas en ORCID',
			hult: 'Primer lugar en campus y segundo a nivel nacional',
			falling: 'Participante seleccionado',
			ingenieria: 'Ingeniería Biomédica · Yachay Tech',
		},
		habilidades: {
			titulo: 'Habilidades, con su evidencia',
			texto: 'Cada habilidad enlaza al proyecto donde la uso.',
			grupos: {
				lenguajes: 'Lenguajes y cálculo',
				simulacion: 'Simulación',
				datos: 'Datos y aprendizaje automático',
				laboratorio: 'Laboratorio',
			},
		},
		proyectos: {
			titulo: 'Proyectos destacados',
			ver: 'Ver todos',
			titulo_pagina: 'Software',
			descripcion:
				'Herramientas de software científico y análisis de datos. Cada ficha indica el lenguaje y el estado del proyecto.',
			privado: 'Código privado',
			repo: 'Código',
			demo: 'Probar demo',
			sitio: 'Ver sitio',
			vacio: 'Todavía no hay proyectos publicados.',
		},
		investigacion: {
			publicacion: 'Ver publicación',
			titulo: 'Investigación',
			ver: 'Ver toda',
			titulo_pagina: 'Investigación',
			descripcion:
				'Publicaciones, tesis y modelos computacionales. Las publicaciones se importan desde ORCID.',
			vacio: 'Todavía no hay trabajos publicados.',
		},
		sobreMi: {
			titulo: 'Sobre mí',
			intro:
				'Ingeniero biomédico por la Universidad de Investigación de Tecnología Experimental Yachay. Trabajo entre el laboratorio y el cálculo, y acompaño a estudiantes e investigadores en ambos.',
			experiencia: 'Experiencia',
			formacion: 'Formación',
			reconocimientos: 'Reconocimientos',
		},
		contacto: {
			titulo: 'Contacto',
			intro:
				'Si trabajas en una universidad o en la industria biotecnológica y quieres conversar sobre investigación, laboratorio o software científico, escríbeme.',
			universidades: 'Universidades: investigación, docencia de laboratorio, colaboración académica.',
			industria: 'Industria: modelado, análisis de datos y desarrollo de herramientas científicas.',
			correo: 'Correo',
			whatsapp: 'WhatsApp',
			redes: 'Redes',
		},
		pie: {
			enfoque: 'Nanobiotecnología, modelado computacional y software científico.',
			derechos: 'Todos los derechos reservados.',
		},
		tipos: {
			articulo: 'Artículo',
			capitulo: 'Capítulo de libro',
			tesis: 'Tesis',
			modelo: 'Modelo computacional',
			poster: 'Póster',
		},
		estados: {
			activo: 'Activo',
			estable: 'Estable',
			pausado: 'Pausado',
			archivado: 'Archivado',
			publicado: 'Publicado',
			'en revision': 'En revisión',
			'en curso': 'En curso',
			completado: 'Completado',
		},
		etiquetas: {
			estado: 'Estado',
			anio: 'Año',
			tecnologias: 'Tecnologías',
			rol: 'Rol',
			volver: 'Volver',
		},
	},
	en: {
		nombre: 'Julián E. Ordoñez',
		nav: {
			inicio: 'Home',
			proyectos: 'Projects',
			habilidades: 'Skills',
			software: 'Software',
			investigacion: 'Research',
			sobreMi: 'About',
			contacto: 'Contact',
		},
		idiomaCambio: 'Español',
		idiomaAlterno: 'es',
		saltar: 'Skip to content',
		temaCambio: 'Switch between light and dark theme',
		hero: {
			estado: 'Quito, Ecuador · Biomedical engineer',
			foto: 'Photo',
			ubicacion: 'Quito, Ecuador',
			universidad: 'Yachay Tech · Biomedical Engineering',
			empresa: 'Phagen Tech · Co-founder and Director of Nanotechnology',
			enfoqueA: 'Biomedical engineer',
			enfoqueB: 'Artificial intelligence and machine learning',
			enfoqueC: 'Nanobiotechnology and materials science',
			titular: 'Nanobiotechnology, computational modeling and scientific software.',
			descripcion:
				'I design systems that connect the laboratory with computation: finite element models, scientific software for computational chemistry, and biological data analysis. Each project on this page backs a skill from my CV.',
			contacto: 'Get in touch',
			rutas: 'Depending on who you are',
			rutaUniversidades: {
				titulo: 'For universities',
				texto: 'Research, publications and technical laboratory training.',
				enlace: 'See research',
			},
			rutaIndustria: {
				titulo: 'For industry',
				texto: 'Software, modeling and data analysis applied to biotechnology.',
				enlace: 'See projects',
			},
		},
		credenciales: {
			publicaciones: 'publications indexed in ORCID',
			hult: '1st on campus and 2nd nationally',
			falling: 'Selected participant',
			ingenieria: 'Biomedical Engineering · Yachay Tech',
		},
		habilidades: {
			titulo: 'Skills, with their evidence',
			texto: 'Each skill links to the project where I use it.',
			grupos: {
				lenguajes: 'Languages and computation',
				simulacion: 'Simulation',
				datos: 'Data and machine learning',
				laboratorio: 'Laboratory',
			},
		},
		proyectos: {
			titulo: 'Featured projects',
			ver: 'View all',
			titulo_pagina: 'Software',
			descripcion:
				'Scientific software and data analysis tools. Each entry shows the language and the project status.',
			privado: 'Private code',
			repo: 'Code',
			demo: 'Try the demo',
			sitio: 'View site',
			vacio: 'No projects published yet.',
		},
		investigacion: {
			publicacion: 'View publication',
			titulo: 'Research',
			ver: 'View all',
			titulo_pagina: 'Research',
			descripcion:
				'Publications, theses and computational models. Publications are imported from ORCID.',
			vacio: 'No works published yet.',
		},
		sobreMi: {
			titulo: 'About',
			intro:
				'Biomedical engineer from the Universidad de Investigación de Tecnología Experimental Yachay. I work between the laboratory and computation, and I support students and researchers in both.',
			experiencia: 'Experience',
			formacion: 'Education',
			reconocimientos: 'Recognition',
		},
		contacto: {
			titulo: 'Contact',
			intro:
				'If you work at a university or in the biotechnology industry and want to talk about research, laboratory work or scientific software, write to me.',
			universidades: 'Universities: research, laboratory teaching, academic collaboration.',
			industria: 'Industry: modeling, data analysis and development of scientific tools.',
			correo: 'Email',
			whatsapp: 'WhatsApp',
			redes: 'Social',
		},
		pie: {
			enfoque: 'Nanobiotechnology, computational modeling and scientific software.',
			derechos: 'All rights reserved.',
		},
		tipos: {
			articulo: 'Article',
			capitulo: 'Book chapter',
			tesis: 'Thesis',
			modelo: 'Computational model',
			poster: 'Poster',
		},
		estados: {
			activo: 'Active',
			estable: 'Stable',
			pausado: 'Paused',
			archivado: 'Archived',
			publicado: 'Published',
			'en revision': 'Under review',
			'en curso': 'In progress',
			completado: 'Completed',
		},
		etiquetas: {
			estado: 'Status',
			anio: 'Year',
			tecnologias: 'Technologies',
			rol: 'Role',
			volver: 'Back',
		},
	},
} as const;

export const t = (idioma: Idioma) => textos[idioma];
export type Textos = ReturnType<typeof t>;

export const rutaLocalizada = (idioma: Idioma, ruta: string) =>
	`/${idioma}${ruta === '/' ? '/' : ruta}`;

export const redes = [
	{ nombre: 'GitHub', url: 'https://github.com/julianescord' },
	{ nombre: 'LinkedIn', url: 'https://www.linkedin.com/in/julianescord/' },
	{ nombre: 'ORCID', url: 'https://orcid.org/0009-0004-2313-8173' },
	{ nombre: 'YouTube', url: 'https://www.youtube.com/@julianescord' },
	{ nombre: 'Instagram', url: 'https://www.instagram.com/julianescord/' },
	{ nombre: 'Facebook', url: 'https://www.facebook.com/julianescord' },
] as const;

export const correo = 'nailujzenodro@hotmail.com';
export const whatsapp = 'https://wa.me/593963437994';
