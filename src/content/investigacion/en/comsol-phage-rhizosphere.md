---
titulo: FEM model of controlled bacteriophage release in the rhizosphere
resumen: COMSOL Multiphysics finite element model of anti-Ralstonia solanacearum bacteriophage release from an alginate matrix into the rhizosphere, including phage replication and inactivation.
tipo: modelo
rol: Author
venue: Phagen Tech
anio: 2026
estado: en curso
url: https://github.com/julianescord/comsol-phage-rhizosphere
etiquetas: [COMSOL, finite elements, bacteriophages, controlled release, rhizosphere, biocontrol]
orden: 3
---

Finite element model in COMSOL Multiphysics 6.4 of the controlled release of
anti-*Ralstonia solanacearum* bacteriophages from an alginate carrier into the
rhizosphere, for biocontrol of bacterial wilt.

The methodology adapts that of Dosmar et al. (2021), *Pharmaceutics* 13(11):1862,
replacing the layered ocular tissue with soil and rhizosphere layers. Unlike a
passive drug, the phage needs two terms the reference does not include: its
**inactivation** (a first-order sink) and its **replication** when it infects
*Ralstonia* in the rhizosphere. This turns the problem into reaction-diffusion
with growth.

The scripts run with Python and MPh, and the code is the source of truth: the
model files are regenerated from the scripts.
