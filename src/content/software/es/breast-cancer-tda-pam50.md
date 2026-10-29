---
titulo: Clasificación PAM50 y subgrupo pronóstico de Luminal A por TDA
resumen: Clasificación de subtipos de cáncer de mama con SVM (85.0 % de precisión y AUC 0.94 en el conjunto de prueba) y descubrimiento de un subgrupo pronóstico de Luminal A con Mapper, validado en METABRIC. Pipeline reproducible en R.
repo: https://github.com/julianescord/breast-cancer-tda-pam50
privado: false
stack: [R, tidymodels, SVM, Mapper (TDA), Regresión de Cox]
estado: activo
anio: 2026
destacado: true
orden: 4
---

Análisis de datos de expresión génica del conjunto GSE96058 (cohorte SCAN-B),
con validación externa en METABRIC.

## Qué contiene

- **Clasificación PAM50 con SVM**, con validación cruzada en tidymodels y sin
  fuga de datos: 85.0 % de precisión y AUC 0.94 en el conjunto de prueba.
- **Descubrimiento de subgrupos con Mapper (análisis topológico de datos)**,
  seguido de análisis de supervivencia con regresión de Cox.
- **Validación externa en METABRIC** y análisis de sensibilidad.

El pipeline se ejecuta en orden numérico desde RStudio, con rutas resueltas
mediante `here`.

## Estado

El análisis está completo; el reporte final (DOME / TRIPOD+AI) sigue pendiente.
