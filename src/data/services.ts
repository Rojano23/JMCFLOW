import type { Service } from '../types';

const strategyServiceImage = new URL('../assets/client/services/strategy.jpg', import.meta.url).href;
const specializedServiceImage = new URL(
  '../assets/client/services/specialized.jpg',
  import.meta.url,
).href;
const engineeringServiceImage = new URL(
  '../assets/client/services/engineering.jpg',
  import.meta.url,
).href;
const electricalServiceImage = new URL('../assets/client/services/electrical.jpg', import.meta.url).href;

export const services: Service[] = [
  {
    id: 'strategy',
    title: 'Sistemas de Medición',
    shortDescription: 'Servicios de configuración, puesta en marcha y mantenimiento.',
    detailedDescription:
      'Contamos con especialistas en programación y configuración de computadores de flujo de diferentes marcas, desarrollamos e implementamos HMIs. Además, ofrecemos ingeniería para patines de medición de transferencia de custodia y sistemas de gestión de la medición.',
    icon: '',
    featured: false,
    image: strategyServiceImage,
    imageAlt: 'Ingenieros revisando sistemas de medición e instrumentación en campo.',
  },
  {
    id: 'development',
    title: 'Servicios Especializados',
    shortDescription: 'Nuestros ingenieros son especialistas en instrumentación, control y automatización.',
    detailedDescription:
      'Somos especialistas en servicios de mantenimiento, ajustes y calibración de instrumentos de presión y temperatura. Configuración y programación de SDMC, SGYF y SPPE.',
    icon: '',
    featured: false,
    image: specializedServiceImage,
    imageAlt: 'Especialista técnico realizando ajuste de instrumentos de control.',
  },
  {
    id: 'deployment',
    title: 'Ingeniería',
    shortDescription: 'Desarrollo de proyectos de ingeniería.',
    detailedDescription:
      'Contamos con un grupo de especialistas de amplia experiencia en las disciplinas de procesos, tuberías, instrumentación, estructuras y eléctrico, enfocados en el desarrollo de ingeniería básica y de detalle para la industria energética.',
    icon: '',
    featured: false,
    image: engineeringServiceImage,
    imageAlt: 'Equipo de ingeniería desarrollando planos y soluciones técnicas industriales.',
  },
  {
    id: 'electrical',
    title: 'Servicios Sistemas Electricos',
    shortDescription: 'Servicios e instalación de sistemas eléctricos',
    detailedDescription:
      'Instalación de canalización eléctrica aérea y subterránea, instalación de cables de media tensión, de fuerza y control para sistemas eléctricos, instalación y mantenimiento de tableros de distribución, CCM´s, subestaciones y acometidas, sistemas de alumbrado, instalación de sistemas de tierra y pararrayos, instalación y mantenimiento de ups y banco de baterías.',
    icon: '',
    featured: false,
    image: electricalServiceImage,
    imageAlt: 'Trabajos de instalación y mantenimiento de sistemas eléctricos industriales.',
  },
];
