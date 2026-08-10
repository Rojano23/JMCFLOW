import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'Pemex Exploración y Producción',
    title: 'Desarrollo de Ingeniería y Construcción para Pemex Exploración y Producción',
    sector: 'Energía',
    shortDescription: 'Ingeniería para la construcción del patín de medición de transferencia de custodia.',
    detailedDescription:
      'Desarrollo completo de ingeniería y construcción del patín de medición de transferencia de custodia para Pemex Exploración y Producción.',
    featured: true,
  },
  {
    id: 'Aeropuertario',
    title: 'Desarrollo de Ingeniería para Hangar Aeropuertario',
    sector: 'Aeroespacial',
    shortDescription: 'Desarrollo de ingeniería para la construcción de un hangar aeropuertario.',
    detailedDescription:
      'Desarrollo completo de ingeniería básica y de detalle para la construcción de un hangar aeropuertario.',
    featured: true,
  },
  {
    id: 'Pemex Refinación',
    title: 'Procura e instalación de sistema de telemedición para Pemex Refinación',
    sector: 'Energía',
    shortDescription: 'Procura e instalación de sistema de telemedición para Pemex Refinación.',
    detailedDescription:
      'Procura e instalación de sistema de telemedición para Pemex Refinación en la Terminal Marítima Dos Bocas.',
    featured: false,
  },
];
