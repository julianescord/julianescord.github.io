import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
// Astro 7 depreco el reexport `z` de 'astro:content': zod se importa directo.
import { z } from 'zod';

// Dos colecciones con esquemas distintos, a proposito. Un articulo revisado
// por pares no tiene "stack" ni "demo", y un proyecto de software no tiene
// "venue" ni "DOI": forzar ambos dentro de un mismo esquema obligaria a dejar
// la mitad de los campos vacios en cada ficha.

const software = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/software' }),
	schema: z.object({
		titulo: z.string(),
		resumen: z.string(),
		// El repositorio es OPCIONAL: parte del trabajo es privado o esta bajo
		// acuerdo de confidencialidad, y aun asi merece estar en la vitrina.
		repo: z.string().url().optional(),
		demo: z.string().url().optional(),
		sitio: z.string().url().optional(),
		privado: z.boolean().default(false),
		stack: z.array(z.string()).min(1),
		estado: z.enum(['activo', 'estable', 'pausado', 'archivado']),
		anio: z.number().int(),
		destacado: z.boolean().default(false),
		orden: z.number().int().default(100),
	}),
});

const investigacion = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/investigacion' }),
	schema: z.object({
		titulo: z.string(),
		resumen: z.string(),
		tipo: z.enum(['articulo', 'capitulo', 'tesis', 'modelo', 'poster']),
		// Autoria explicita: importa la diferencia entre primer autor y
		// coautor, y omitirla en un portafolio academico se lee como inflar.
		rol: z.string(),
		venue: z.string().optional(),
		anio: z.number().int(),
		doi: z.string().optional(),
		url: z.string().url().optional(),
		estado: z.enum(['publicado', 'en revision', 'en curso']),
		etiquetas: z.array(z.string()).default([]),
		orden: z.number().int().default(100),
	}),
});

export const collections = { software, investigacion };
