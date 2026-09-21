// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// El sitio vive en la raiz del dominio (julianescord.github.io), no en un
// subdirectorio: por eso no hace falta `base`. Las demos de cada proyecto se
// despliegan aparte, desde el repo de cada proyecto, en /<nombre-del-repo>/.
export default defineConfig({
	site: 'https://julianescord.github.io',
	vite: {
		plugins: [tailwindcss()],
	},
});
