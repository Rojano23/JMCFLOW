import type { Company } from '../types';


export const company: Company = {
  companyName: 'JMC FLOW',
  tagline: 'Precisión que mueve la industria.',
  description:
    'JMCFlow suministra equipos e instrumentos especializados para medición y control de procesos, complementados con servicios de ingeniería, configuración y programación.',
  heroTitle: 'Instrumentación y soluciones de medición para la industria',
  heroDescription:
    'JMCFlow suministra equipos e instrumentos especializados para medición y control de procesos, complementados con servicios de ingeniería, configuración y programación.',
  primaryCTA: {
    label: 'Iniciar proyecto',
    href: '#contacto',
    ariaLabel: 'Ir a la sección de contacto para iniciar proyecto',
  },
  secondaryCTA: {
    label: 'Explorar servicios',
    href: '#servicios',
    ariaLabel: 'Ir a la sección de servicios',
  },
  heroImage: new URL('../assets/cliente/EPC2.jpg', import.meta.url).href,
  heroImageAlt: 'Ilustración corporativa temporal para representar el Hero principal.',
  heroBackgroundImage: '',
  heroVideoBackground: '',
  heroStatistics: [],
  heroBadges: [],
  heroTrustIndicators: [],
  aboutTitle: 'Quiénes somos',
  aboutSubtitle: 'Buscamos que cada solución responda correctamente a las necesidades de medición del proceso.',
  aboutDescription:
    'En JMCFlow nos especializamos en el suministro de equipos e instrumentos para la medición y control de procesos industriales, con especial experiencia en soluciones relacionadas con la medición de flujo. Nuestro conocimiento técnico nos permite comprender las necesidades de cada aplicación y ofrecer soluciones que van más allá del suministro de un equipo, acompañando a nuestros clientes en la selección, configuración y puesta en operación de sus instrumentos.',
  mission:
    'Proporcionar equipos, instrumentos y soluciones de medición confiables para la industria, respaldados por conocimiento técnico, atención personalizada y servicios de ingeniería que permitan a nuestros clientes operar sus procesos con mayor precisión, seguridad y eficiencia.',
  vision:
    'Ser una empresa reconocida en México por su experiencia y confiabilidad en soluciones de instrumentación y medición industrial, construyendo relaciones de largo plazo con nuestros clientes y consolidándonos como un aliado técnico para sus proyectos y operaciones.',
  differentiators: [
    {
      id: 'reusable',
      title: 'Arquitectura reutilizable',
      description: 'Cada componente está diseñado para adaptarse a distintos clientes sin reconstruir la base.',
    },
    {
      id: 'configurable',
      title: 'Totalmente configurable',
      description: 'Colores, textos, servicios e industrias provienen de configuración centralizada.',
    },
    {
      id: 'responsive',
      title: 'Responsive by design',
      description: 'Diseño mobile-first que se adapta a smartphone, tablet, laptop y desktop.',
    },
  ],
  aboutMetrics: [],
  aboutCertifications: [],
  phone: '+52 99 313 5873',
  email: 'contacto@jmcflow.com',
  whatsapp: '+52 99 313 5873',
  address: 'Av. Reforma 123, Ciudad de México, México',
  businessHours: 'Lunes a Viernes · 09:00 - 18:00',
  googleMapsUrl: 'https://www.google.com/maps',
  socialLinks: {
    linkedin: 'https://www.linkedin.com/company/jmcflow',
    instagram: 'https://www.instagram.com/jmcflow',
    facebook: 'https://www.facebook.com/jmcflow',
  },
};
