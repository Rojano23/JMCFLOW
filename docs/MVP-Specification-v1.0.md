MVP — Programa de Desarrollo de Páginas Web Corporativas
Nombre: DEV-WEBPAGES-RX23
1. Propósito
Desarrollar una solución reutilizable para crear páginas web corporativas modernas, profesionales y responsivas, inicialmente orientadas a empresas industriales, de automatización, control, instrumentación, ingeniería y servicios técnicos.
El objetivo del MVP es construir una plantilla web reutilizable que permita desarrollar posteriormente sitios para diferentes clientes modificando principalmente contenido, identidad visual, imágenes y configuración, sin reconstruir la aplicación desde cero.
La primera implementación de la plantilla será utilizada para desarrollar el sitio web de una empresa conocida por el desarrollador.
 
2. Objetivos del MVP
El MVP debe permitir:
11.	Crear rápidamente una página web corporativa.
12.	Utilizar una arquitectura de componentes reutilizables.
13.	Separar contenido empresarial de la lógica de presentación.
14.	Adaptar colores, logotipo, imágenes y textos para cada cliente.
15.	Crear sitios completamente responsivos.
16.	Publicar los sitios en Internet.
17.	Mantener cada proyecto bajo control de versiones mediante Git y GitHub.
18.	Utilizar GitHub Copilot Agent como asistente de desarrollo.
19.	Permitir posteriormente agregar nuevas funcionalidades sin reconstruir la aplicación.
20.	Convertir la plantilla en una base reutilizable para futuros clientes.
 
3. Alcance del MVP
El MVP estará limitado inicialmente a sitios web corporativos estáticos.
Incluido
•	Página de inicio.
•	Información de la empresa.
•	Servicios.
•	Sectores industriales.
•	Proyectos o experiencia.
•	Información de contacto.
•	Integración con WhatsApp.
•	Enlaces a redes sociales.
•	Diseño responsive.
•	SEO básico.
•	Optimización básica de imágenes.
•	Navegación móvil.
•	Animaciones visuales discretas.
•	Favicon y metadatos.
•	Publicación en hosting compatible con sitios estáticos.
Fuera del alcance inicial
No se implementará en el MVP:
•	Backend propio.
•	Base de datos.
•	Sistema de usuarios.
•	Portal de clientes.
•	CMS.
•	E-commerce.
•	Sistema de pagos.
•	Dashboard.
•	Autenticación.
•	Integraciones industriales.
•	APIs propias.
•	Sistema avanzado de analítica.
•	Automatización de marketing.
Estas funcionalidades podrán incorporarse posteriormente como proyectos o módulos adicionales.
 
4. Stack tecnológico
El MVP utilizará:
•	React
•	Vite
•	TypeScript
•	Tailwind CSS
•	Git
•	GitHub
•	GitHub Copilot
•	GitHub Copilot Agent
•	VS Code
El sistema deberá mantenerse ligero y evitar dependencias innecesarias.
 
5. Arquitectura general
La solución deberá diseñarse pensando en reutilización.
Arquitectura inicial:
Industrial Web Template
│
├── src/
│   ├── components/
│   ├── sections/
│   ├── pages/
│   ├── data/
│   ├── assets/
│   ├── styles/
│   ├── App.tsx
│   └── main.tsx
│
├── public/
│
├── package.json
├── vite.config.ts
├── tsconfig.json
└── README.md
 
6. Componentización
Los elementos reutilizables deberán desarrollarse como componentes independientes.
Componentes iniciales:
Navbar
MobileMenu
Hero
SectionTitle
ServiceCard
IndustryCard
ProjectCard
AboutSection
ServicesSection
IndustriesSection
ProjectsSection
ContactSection
WhatsAppButton
Footer
Los componentes deberán evitar contener información específica de un cliente.
Por ejemplo, ServiceCard debe recibir información mediante propiedades o datos externos y no contener nombres de servicios específicos.
 
7. Separación de contenido
La información específica de cada cliente deberá mantenerse separada de los componentes visuales.
Ejemplo:
src/
└── data/
    └── company.ts
El archivo deberá contener información como:
Nombre de empresa
Descripción
Tagline
Servicios
Industrias
Proyectos
Teléfono
Correo
WhatsApp
Dirección
Redes sociales
El objetivo es poder cambiar de cliente sin modificar la estructura principal de los componentes.
 
8. Identidad visual
La plantilla deberá permitir modificar fácilmente:
•	Color principal.
•	Color secundario.
•	Color de fondo.
•	Tipografía.
•	Logotipo.
•	Favicon.
•	Imágenes principales.
•	Estilo de botones.
•	Estilo de tarjetas.
La identidad visual no deberá estar distribuida arbitrariamente por todo el código.
Debe existir una configuración centralizada siempre que sea técnicamente conveniente.
 
9. Estructura de la página
La primera versión deberá contemplar la siguiente estructura:
Navbar
│
├── Inicio
├── Nosotros
├── Servicios
├── Industrias
├── Proyectos
└── Contacto

Hero
│
├── Mensaje principal
├── Descripción
└── Call to Action

Nosotros

Servicios

Industrias / Sectores

Proyectos / Experiencia

Diferenciadores

Contacto

Footer
La estructura podrá modificarse dependiendo de las necesidades del cliente, pero los componentes deberán permanecer reutilizables.
 
10. Hero
El Hero deberá presentar inmediatamente:
•	Nombre de la empresa.
•	Propuesta de valor.
•	Descripción breve.
•	Imagen o elemento visual relacionado con la industria.
•	Botón principal de contacto.
•	Botón secundario opcional.
Debe ser visualmente atractivo sin sobrecargar la pantalla.
 
11. Servicios
Los servicios deberán mostrarse mediante tarjetas o componentes reutilizables.
Cada servicio podrá contener:
•	Icono.
•	Nombre.
•	Descripción corta.
•	Información adicional opcional.
Los datos deberán provenir de la configuración del cliente.
 
12. Industrias
La sección deberá permitir mostrar los sectores donde trabaja la empresa.
Ejemplos:
•	Oil & Gas.
•	Agua.
•	Energía.
•	Manufactura.
•	Alimentos.
•	Infraestructura.
La información deberá ser configurable por cliente.
 
13. Proyectos / experiencia
La plantilla deberá permitir mostrar:
•	Nombre del proyecto.
•	Cliente, cuando sea publicable.
•	Sector.
•	Descripción.
•	Imagen.
•	Tecnologías o servicios utilizados.
Debe existir la posibilidad de ocultar esta sección cuando un cliente no tenga proyectos que quiera publicar.
 
14. Contacto
La sección de contacto deberá contemplar:
•	Teléfono.
•	Correo.
•	WhatsApp.
•	Dirección.
•	Horarios, si aplica.
•	Redes sociales.
•	Google Maps, cuando sea necesario.
El formulario de contacto podrá inicialmente utilizar un servicio externo o mecanismo compatible con hosting estático.
No se desarrollará un backend propio durante el MVP.
 
15. WhatsApp
La plantilla deberá permitir configurar un botón de WhatsApp.
El número deberá provenir de la configuración del cliente.
No deberá estar escrito directamente dentro del componente.
 
16. Responsive Design
La aplicación deberá funcionar correctamente en:
•	Desktop.
•	Laptop.
•	Tablet.
•	Smartphone.
Se deberá prestar especial atención a:
•	Menú móvil.
•	Tamaños de texto.
•	Imágenes.
•	Botones.
•	Espaciado.
•	Tarjetas.
•	Formularios.
La experiencia móvil deberá considerarse parte fundamental del MVP y no una adaptación posterior.
 
17. SEO básico
Cada sitio deberá incluir:
•	title.
•	Meta description.
•	Favicon.
•	Open Graph básico.
•	Estructura semántica HTML.
•	Encabezados correctamente jerarquizados.
•	Texto alternativo para imágenes.
•	URLs amigables cuando existan múltiples páginas.
El SEO avanzado queda fuera del MVP.
 
18. Rendimiento
El sitio deberá mantenerse ligero.
Se deberá:
•	Optimizar imágenes.
•	Evitar librerías innecesarias.
•	Utilizar componentes eficientes.
•	Evitar animaciones excesivas.
•	Revisar el tamaño final del build.
El objetivo es obtener tiempos de carga rápidos, especialmente en dispositivos móviles.
 
19. Git y GitHub
Cada proyecto deberá mantenerse bajo control de versiones.
Flujo esperado:
VS Code
   ↓
Git
   ↓
GitHub
   ↓
Copilot Agent
   ↓
Revisión
   ↓
Commit
   ↓
Deploy
El repositorio deberá contener:
•	Código fuente.
•	Documentación.
•	Configuración del proyecto.
•	Historial de cambios.
No deberán almacenarse contraseñas, tokens, API keys ni credenciales en el repositorio.
 
20. Uso de GitHub Copilot Agent
GitHub Copilot Agent deberá utilizarse como asistente de desarrollo y no como sustituto de la revisión técnica.
El desarrollo deberá realizarse por etapas.
Ejemplo:
1. Crear estructura del proyecto.

2. Implementar sistema visual.

3. Implementar Navbar.

4. Implementar Hero.

5. Implementar Servicios.

6. Implementar Industrias.

7. Implementar Proyectos.

8. Implementar Contacto.

9. Implementar Footer.

10. Responsive.

11. SEO.

12. Pruebas.

13. Optimización.

14. Deploy.
Después de cada etapa se deberá revisar el código generado antes de continuar.
Copilot no deberá introducir funcionalidades que no estén definidas en la especificación sin aprobación.
 
21. Fuente de información del cliente
Para el primer proyecto se utilizarán como fuente inicial:
•	Presentación PowerPoint del cliente.
•	Información empresarial conocida.
•	Fotografías disponibles.
•	Logotipo disponible.
•	Información de servicios.
•	Información de proyectos.
•	Información de sectores.
La información que no esté confirmada deberá marcarse como pendiente de validación.
No se deberán inventar:
•	Clientes.
•	Proyectos.
•	Certificaciones.
•	Capacidades.
•	Cifras.
•	Testimonios.
•	Resultados comerciales.
 
22. Estrategia de reutilización
La plantilla deberá desarrollarse para que un nuevo cliente pueda configurarse principalmente modificando:
company.ts
y los recursos:
assets/
La estructura visual y los componentes deberán permanecer reutilizables.
Ejemplo:
Industrial Web Template
        │
        ├── Cliente A
        ├── Cliente B
        ├── Cliente C
        └── Cliente D
Cada cliente deberá mantener su propio repositorio o proyecto derivado de la plantilla.
 
23. Publicación
La primera versión deberá poder publicarse utilizando un servicio de hosting para sitios estáticos.
La arquitectura deberá permitir posteriormente utilizar:
•	GitHub Pages.
•	Cloudflare Pages.
•	Vercel.
•	Otros servicios compatibles.
La elección definitiva del hosting podrá realizarse después de validar la plantilla.
 
24. Dominio
El dominio será propiedad del cliente.
El proyecto deberá permitir conectar posteriormente un dominio personalizado.
La configuración del dominio no deberá ser un requisito para desarrollar y validar la primera versión.
Primero se deberá validar el sitio mediante una URL temporal.
Después de la aprobación del cliente se configurará el dominio definitivo.
 
25. Documentación
El repositorio deberá incluir un README.md con:
•	Descripción del proyecto.
•	Requisitos.
•	Instalación.
•	Ejecución local.
•	Build.
•	Deploy.
•	Estructura del proyecto.
•	Configuración del cliente.
•	Procedimiento para crear un nuevo proyecto.
La documentación deberá permitir que el desarrollador pueda reutilizar la plantilla posteriormente sin depender de memoria personal.
 
26. Criterios de aceptación del MVP
El MVP se considerará terminado cuando:
•	La aplicación compile correctamente.
•	La aplicación pueda ejecutarse localmente.
•	La navegación funcione.
•	Todas las secciones principales estén implementadas.
•	El diseño sea responsive.
•	No existan errores críticos en consola.
•	Las imágenes estén optimizadas.
•	Los textos principales provengan de datos configurables.
•	El sitio pueda generar un build de producción.
•	El sitio pueda publicarse.
•	El código esté almacenado en GitHub.
•	Exista documentación básica.
•	La plantilla pueda reutilizarse para otro cliente.
 
27. Primera implementación
La primera implementación utilizará como cliente piloto a una empresa conocida por el desarrollador.
Objetivo:
Industrial Web Template v1
          ↓
Primer cliente
          ↓
Validación
          ↓
Correcciones
          ↓
Plantilla v1.1
          ↓
Segundo cliente
El primer cliente será utilizado como caso de prueba real para validar:
•	arquitectura;
•	diseño;
•	componentes;
•	proceso de desarrollo;
•	publicación;
•	mantenimiento;
•	reutilización.
 
28. Resultado esperado
Al finalizar el MVP deberá existir:
Una plantilla web corporativa funcional, documentada y reutilizable, capaz de convertirse rápidamente en sitios web profesionales para diferentes empresas mediante la sustitución de contenido, identidad visual y recursos gráficos.
La arquitectura deberá permitir que futuras versiones evolucionen desde páginas corporativas sencillas hacia soluciones digitales más completas, sin introducir estas funcionalidades dentro del MVP actual.
