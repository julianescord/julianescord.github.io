---
titulo: Yakuponía, bacterial biosensors for hydroponic crops
resumen: In silico design of bacterial biosensors that detect phthalates and heavy metals in hydroponic crop water, with a biological containment system. Reproducible annotation and validation with Biopython.
repo: https://github.com/julianescord/yakuponia-biosensors
privado: false
stack: [Python, Biopython, Synthetic biology, Kinetic modeling]
estado: activo
anio: 2026
destacado: true
orden: 3
---

Project developed by the team The Operons (U2) at the SynBio 6.0 Bootcamp.

Hydroponic crops recirculate their water. If that water carries phthalates
(leached from plastic pipes and films) or heavy metals (from fertilizers and
water sources), the contaminant concentrates in the circuit and reaches the
product. Detecting it today requires HPLC or atomic absorption spectrometry,
with laboratory equipment and days of waiting.

The design proposes a transcriptional reporter coupled to a native regulator
that responds to the contaminant, for a visual reading in the field without
instrumentation. It consists of three constructs on two *Bacillus subtilis*
chassis: one for phthalates, one for heavy metals, and a containment system
(kill switch) based on MazEF.

## Status

**Computational design.** No construct has been assembled or validated
experimentally. The design is on its third version: each one corrected defects
revealed by the kinetic model, and all three are kept in the repository.

## What the project contains

The repository holds the sequence annotation, the kinetic model, and an
assembly validation script (`scripts/validate_assembly.py`) that automatically
flags the known limitations. All analysis runs in Python with Biopython.

<!-- My concrete role in the team must be confirmed before publishing. -->
