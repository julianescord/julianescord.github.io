# julianescord.github.io

Portafolio personal: el índice central de mis proyectos de software e
investigación. Construido con Astro y desplegado en GitHub Pages.

## Arquitectura

Este repositorio es **el hub**, no las demos. Cada proyecto que tenga una demo
interactiva la despliega desde su propio repositorio, como *project site*, y
este sitio enlaza a ella:

```
julianescord.github.io/              este repositorio (el portafolio)
julianescord.github.io/cheminator/   desde el repositorio cheminator
```

Así, tocar un proyecto no obliga a reconstruir el portafolio, y los binarios
de cada demo viven en el repositorio que los genera.

> No confundir con [`julianescord/julianescord`](https://github.com/julianescord/julianescord),
> que es el README que aparece en mi perfil de GitHub. Son dos cosas distintas.

## Añadir contenido

Todo el contenido son archivos Markdown en `src/content/`, validados por
esquema en tiempo de compilación. Si a una ficha le falta un campo obligatorio
o tiene un valor fuera del enum, **el sitio no compila**: el error sale en el
build, no en producción.

### Un proyecto de software

Crear `src/content/software/<nombre>.md`:

```yaml
---
titulo: Nombre del proyecto
resumen: Una o dos frases.
repo: https://github.com/julianescord/...   # opcional
demo: https://julianescord.github.io/...    # opcional
sitio: https://...                          # opcional
privado: false                              # true si el código es cerrado
stack: [C++20, CMake]
estado: activo                              # activo|estable|pausado|archivado
anio: 2026
destacado: false                            # true lo muestra en la portada
orden: 10                                   # menor = aparece antes
---

El cuerpo, en Markdown.
```

El campo `repo` es opcional a propósito: un proyecto privado se describe igual,
y con `privado: true` la ficha lo declara en vez de dejar un hueco sin explicar.

### Un trabajo de investigación

Crear `src/content/investigacion/<nombre>.md`:

```yaml
---
titulo: Título del trabajo
resumen: Una o dos frases.
tipo: articulo          # articulo|capitulo|tesis|modelo|poster
rol: Primer autor       # o "Coautor", etc.
venue: Nombre de la revista o institución
anio: 2026
doi: 10.3390/xxxxx      # sin el prefijo https://doi.org/
estado: publicado       # publicado|en revision|en curso
etiquetas: [tema, otro]
orden: 1
---
```

Son dos colecciones con esquemas distintos a propósito: un artículo revisado
por pares no tiene «stack» ni «demo», y un proyecto de software no tiene
«venue» ni DOI.

## Desarrollo

```bash
npm install
npm run dev     # servidor local en http://localhost:4321
npm run check   # valida tipos y esquemas de contenido
npm run build   # genera dist/
```

Requiere Node 22.12 o superior.

## Despliegue

Automático: cada push a `main` dispara
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), que valida,
construye y publica en GitHub Pages.

## Pendiente

Varias fichas tienen marcadores `TODO` con datos que hay que completar a mano
(títulos exactos, DOI, capturas). Están marcados dentro de cada archivo.
