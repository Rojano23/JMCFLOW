# NEW-CLIENT-CHECKLIST

Checklist operativo para crear un nuevo sitio cliente con la plantilla RX23.

## 1. Duplicar plantilla
- Clonar o copiar el repositorio base.
- Crear rama inicial del cliente.

## 2. Configurar branding
- Ajustar src/styles/tokens.ts si se requiere nueva base visual.
- Ajustar src/data/theme.ts para el cliente.

## 3. Configurar datos de empresa
- Actualizar src/data/company.ts:
  - companyName
  - tagline
  - hero
  - about
  - contacto
  - redes

## 4. Configurar servicios
- Actualizar src/data/services.ts.
- Verificar ids unicos y descripciones coherentes.

## 5. Configurar industrias
- Actualizar src/data/industries.ts.
- Verificar consistencia entre titulo, descripcion y feature flags.

## 6. Configurar proyectos
- Actualizar src/data/projects.ts.
- Publicar solo informacion autorizada.

## 7. Configurar SEO
- Actualizar src/data/seo.ts:
  - title
  - description
  - keywords
  - canonical
  - Open Graph
  - favicon

## 8. Configurar contacto
- Verificar phone, email, whatsapp, address y googleMapsUrl en src/data/company.ts.

## 9. Validar feature flags
- Revisar src/data/features.ts.
- Activar solo bloques con contenido disponible.

## 10. Build
- Ejecutar npm run build.
- Confirmar salida en dist/ sin errores.

## 11. QA
- Ejecutar npm run lint.
- Revisar responsive (mobile, tablet, desktop).
- Revisar anclas, enlaces externos y SEO basico.

## 12. Deploy
- Seguir docs/DEPLOYMENT.md segun plataforma objetivo.
- Confirmar dominio/canonical antes de publicacion.
