---
titulo: PAM50 classification and a prognostic Luminal A subgroup by TDA
resumen: Breast cancer subtype classification with an SVM (85.0% accuracy and 0.94 AUC on the test set) and discovery of a prognostic Luminal A subgroup with Mapper, validated in METABRIC. Reproducible pipeline in R.
repo: https://github.com/julianescord/breast-cancer-tda-pam50
privado: false
stack: [R, tidymodels, SVM, Mapper (TDA), Cox regression]
estado: activo
anio: 2026
destacado: true
orden: 4
---

Analysis of gene expression data from the GSE96058 dataset (SCAN-B cohort), with
external validation in METABRIC.

## What it contains

- **PAM50 classification with an SVM**, with cross-validation in tidymodels and
  no data leakage: 85.0% accuracy and 0.94 AUC on the test set.
- **Subgroup discovery with Mapper (topological data analysis)**, followed by
  survival analysis with Cox regression.
- **External validation in METABRIC** and a sensitivity analysis.

The pipeline runs in numerical order from RStudio, with paths resolved through
`here`.

## Status

The analysis is complete; the final report (DOME / TRIPOD+AI) is still pending.
