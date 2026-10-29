---
titulo: Yakuponía, biosensores bacterianos para cultivos hidropónicos
resumen: Diseño in silico de biosensores bacterianos que detectan ftalatos y metales pesados en el agua de cultivos hidropónicos, con un sistema de contención biológica. Anotación y validación reproducibles con Biopython.
repo: https://github.com/julianescord/yakuponia-biosensors
privado: false
stack: [Python, Biopython, Biología sintética, Modelado cinético]
estado: activo
anio: 2026
destacado: true
orden: 3
---

Proyecto desarrollado por el equipo The Operons (U2) en el SynBio 6.0 Bootcamp.

Los cultivos hidropónicos recirculan el agua. Si esa agua arrastra ftalatos
(lixiviados de tuberías y films plásticos) o metales pesados (de fertilizantes
y fuentes de agua), el contaminante se concentra en el circuito y llega al
producto. Detectarlo hoy requiere HPLC o espectrometría de absorción atómica,
con equipo de laboratorio y días de espera.

El diseño propone un reportero transcripcional acoplado a un regulador nativo
de respuesta al contaminante, para una lectura visual en campo sin
instrumentación. Son tres constructos sobre dos chasis de *Bacillus subtilis*:
uno para ftalatos, uno para metales pesados y un sistema de contención
(kill switch) basado en MazEF.

## Estado

**Diseño computacional.** Ninguna construcción se ha ensamblado ni validado
experimentalmente. El diseño va por su tercera versión: cada una corrigió
defectos que el modelo cinético reveló, y las tres se conservan en el
repositorio.

## Qué hice en el proyecto

El repositorio contiene la anotación de las secuencias, el modelo cinético y
un script de validación de ensamblaje (`scripts/validate_assembly.py`) que
detecta automáticamente las limitaciones conocidas. Todo el análisis corre con
Python y Biopython.

<!-- Mi rol concreto en el equipo debe confirmarse antes de publicar. -->
