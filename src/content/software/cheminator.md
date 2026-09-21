---
titulo: Cheminator
resumen: Librería C++ de nomenclatura química inorgánica en español, que explica su razonamiento paso a paso y corre en el navegador vía WebAssembly.
repo: https://github.com/julianescord/cheminator
stack: [C++20, CMake, WebAssembly, Emscripten]
estado: activo
anio: 2026
destacado: true
orden: 1
---

Cheminator nombra compuestos químicos inorgánicos a partir de su fórmula, en
los sistemas Stock y tradicional. Cubre las siete categorías: óxidos,
peróxidos, anhídridos, ácidos hidrácidos, ácidos oxácidos, bases y sales
oxisal.

## Qué lo diferencia

La mayoría de herramientas devuelven una respuesta. Cheminator devuelve
**el razonamiento**: detecta automáticamente a qué categoría pertenece el
compuesto y explica cómo llegó al nombre, paso por paso.

```
Fe2O3 → óxido

  1. Se identifica el metal (Fe, subíndice 2) y el oxígeno (subíndice 3).
  2. Hierro (Fe) tiene 2 valencias conocidas para óxidos.
  3. La proporción 2:3 corresponde a la valencia 3.
  4. Hierro tiene más de una valencia → se indica con número romano (III).

  óxido de Hierro (III)
```

Eso lo vuelve útil para enseñar, no solo para consultar.

## Por qué C++

El proyecto nació en 2017 como un programa de consola y se reescribió como
librería embebible. La elección del lenguaje está justificada por cuatro
capacidades concretas, no por preferencia:

- **WebAssembly** — el mismo núcleo corre en el navegador sin servidor: todo
  el análisis ocurre en la máquina de quien lo usa.
- **Frontera `extern "C"`** — permite consumirlo desde Python, C#, Java, Rust
  o Go mediante FFI.
- **Cómputo en tiempo de compilación** — las tablas de elementos son
  `constexpr` y se validan con `static_assert`: una tabla con un símbolo
  duplicado o con valencias desordenadas no compila.
- **Tipos fuertes** — `Valencia`, `Subíndice` y `Carga` son tipos distintos.
  Confundir uno con otro era un error que cometí tres veces durante el
  desarrollo; ahora es un error de compilación.

## Hueco que llena

Una revisión del ecosistema encontró que no existe ninguna librería de
nomenclatura inorgánica en español. OPSIN, el estándar de facto, es Java,
solo va de nombre a estructura y no cubre química inorgánica avanzada.
RDKit, Open Babel e Indigo tienen núcleo C++ pero no generan nombres.

## Estado

Motor completo para las siete categorías, con pruebas automatizadas e
integración continua en tres frentes: compilación nativa, compilación solo de
la librería con un consumidor en C, y compilación a WebAssembly.

En el roadmap: formulación inversa (nombre → fórmula) y compuestos de
coordinación, donde un modelo de grafo sí se justifica y donde OPSIN declara
no llegar.
