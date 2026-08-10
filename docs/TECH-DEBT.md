# TECH-DEBT

Deuda tecnica vigente consolidada desde hallazgos de Sprint 16.

## Alta prioridad

### 1) Estrategia canonical por entorno y cliente
- Descripcion:
  canonical depende de configuracion manual y puede omitirse antes de publicar.
- Impacto:
  Riesgo SEO en produccion por indexacion inconsistente o ausencia de URL canonica final.
- Recomendacion futura:
  Definir convencion obligatoria de canonical por entorno (dev/staging/prod) y checklist bloqueante de release.

## Media prioridad

### 2) Asset Open Graph dedicado por cliente
- Descripcion:
  og:image usa favicon como valor por defecto.
- Impacto:
  Compartidos sociales con baja calidad visual o preview poco representativo.
- Recomendacion futura:
  Definir especificacion minima de OG image y ruta por cliente.

### 3) Validacion automatica de metadatos en build
- Descripcion:
  La validacion de metadatos es manual.
- Impacto:
  Mayor probabilidad de regresiones silenciosas en SEO basico.
- Recomendacion futura:
  Agregar script interno sin dependencias nuevas para inspeccionar dist/index.html.

## Baja prioridad

### 4) Limpieza de superficie de exports publicos
- Descripcion:
  Existen barrels con exports no usados por la app actual.
- Impacto:
  Mantenimiento ligeramente mas complejo y API interna mas amplia de lo necesario.
- Recomendacion futura:
  Inventariar exports y depurar incrementalmente sin romper extensibilidad de plantilla.

## Estado
- Documento vivo.
- Debe revisarse en cada sprint tecnico o previo a release mayor.
