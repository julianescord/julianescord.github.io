---
titulo: Modelo FEM de liberación controlada de bacteriófagos en la rizosfera
resumen: Modelo de elementos finitos en COMSOL Multiphysics de la liberación de bacteriófagos anti-Ralstonia solanacearum desde una matriz de alginato hacia la rizosfera, con replicación e inactivación del fago.
tipo: modelo
rol: Autor
venue: Phagen Tech
anio: 2026
estado: en curso
url: https://github.com/julianescord/comsol-phage-rhizosphere
etiquetas: [COMSOL, elementos finitos, bacteriófagos, liberación controlada, rizosfera, biocontrol]
orden: 3
---

Modelo de elementos finitos en COMSOL Multiphysics 6.4 de la liberación
controlada de bacteriófagos anti-*Ralstonia solanacearum* desde un vehículo de
alginato hacia la rizosfera, para el biocontrol de la marchitez bacteriana.

La metodología adapta la de Dosmar et al. (2021), *Pharmaceutics* 13(11):1862,
cambiando el tejido ocular por capas de suelo y rizosfera. A diferencia de un
fármaco pasivo, el fago requiere dos términos que la referencia no contempla:
su **inactivación** (un sumidero de primer orden) y su **replicación** al
infectar *Ralstonia* en la rizosfera. Con eso, el problema pasa a ser de
reacción-difusión con crecimiento.

Los scripts se ejecutan con Python y MPh, y el código es la fuente de verdad:
los archivos del modelo se regeneran desde los scripts.
