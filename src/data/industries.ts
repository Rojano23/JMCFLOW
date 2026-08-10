import type { Industry } from '../types';

export const industries: Industry[] = [
  {
    id: 'automation',
    title: 'Automatización industrial',
    shortDescription: 'Soluciones orientadas a procesos industriales y control de planta.',
    detailedDescription:
      'Diseño e implementación de sistemas de automatización, control y monitoreo para entornos industriales exigentes.',
    featured: false,
  },
  {
    id: 'engineering',
    title: 'Ingeniería técnica',
    shortDescription: 'Proyectos técnicos y servicios de soporte especializado.',
    detailedDescription:
      'Desarrollo de proyectos de instrumentación, control, telecomunicaciones y soporte técnico para sectores productivos.',
    featured: true,
  },

  {
    id: 'energy',
    title: 'Energía y utilities',
    shortDescription: 'Gestión de sistemas energéticos y servicios de infraestructura.',
    detailedDescription:
      'Soluciones para la gestión eficiente de recursos energéticos, redes y servicios de infraestructura crítica.',
    featured: false,
  },

  {
    id: 'oil-gas',
    title: 'Oil \u0026 Gas',
    shortDescription: 'Sistemas para la industria de hidrocarburos y afines.',
    detailedDescription:
      'Implementación de soluciones tecnológicas para upstream, midstream y downstream en la industria de petróleo y gas.',
    featured: true,
  },
];
