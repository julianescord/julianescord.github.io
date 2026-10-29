---
titulo: Cheminator
resumen: C++ library for inorganic chemical nomenclature in Spanish that explains its reasoning step by step and runs in the browser via WebAssembly.
repo: https://github.com/julianescord/cheminator
demo: https://julianescord.github.io/cheminator/
stack: [C++20, CMake, WebAssembly, Emscripten]
estado: activo
anio: 2026
destacado: true
orden: 1
---

Cheminator names inorganic chemical compounds from their formula, in the Stock
and traditional systems. It covers seven categories: oxides, peroxides,
anhydrides, hydracids, oxoacids, bases and oxysalts.

## What sets it apart

Most tools return an answer. Cheminator returns **the reasoning**: it detects
which category a compound belongs to and explains, step by step, how it reached
the name.

```
Fe2O3 → oxide

  1. The metal (Fe, subscript 2) and the oxygen (subscript 3) are identified.
  2. Iron (Fe) has 2 known valences for oxides.
  3. The 2:3 ratio corresponds to valence 3.
  4. Iron has more than one valence → it is indicated with a Roman numeral (III).

  iron (III) oxide
```

That makes it useful for teaching, not only for lookup.

## Why C++

The project started in 2017 as a console program and was rewritten as an
embeddable library. The choice of language rests on four concrete capabilities:

- **WebAssembly**: the same core runs in the browser without a server, so all
  analysis happens on the user's machine.
- **`extern "C"` boundary**: it can be called from Python, C#, Java, Rust or Go
  through FFI.
- **Compile-time computation**: the element tables are `constexpr` and checked
  with `static_assert`. A table with a duplicated symbol or disordered valences
  does not compile.
- **Strong types**: `Valencia`, `Subíndice` and `Carga` are distinct types.
  Mixing them up was an error I made three times during development; now it is
  a compile-time error.

## Gap it fills

A survey of the ecosystem found no Spanish-language library for inorganic
nomenclature. OPSIN, the de facto standard, is written in Java, only goes from
name to structure, and does not cover advanced inorganic chemistry. RDKit,
Open Babel and Indigo have C++ cores but do not generate names.

## Status

The engine is complete for the seven categories, with automated tests and
continuous integration on three fronts: native build, library-only build with a
C consumer, and WebAssembly build.

On the roadmap: inverse formulation (name to formula) and coordination
compounds, where a graph model is justified and where OPSIN states it does not
reach.
