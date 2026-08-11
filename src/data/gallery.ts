import type { GalleryContent } from '../types';

const abbBrandLogo = new URL('../assets/client/gallery/brands/ABB.jpg', import.meta.url).href;
const emersonBrandLogo = new URL('../assets/client/gallery/brands/Emerson.jpg', import.meta.url).href;
const endressHauserBrandLogo = new URL('../assets/client/gallery/brands/E+H.jpg', import.meta.url)
  .href;
const honeywellBrandLogo = new URL('../assets/client/gallery/brands/Honeywell.jpg', import.meta.url)
  .href;
const krohneBrandLogo = new URL('../assets/client/gallery/brands/Krohne.jpg', import.meta.url).href;
const rosemountBrandLogo = new URL('../assets/client/gallery/brands/RA.jpg', import.meta.url).href;
const schneiderBrandLogo = new URL('../assets/client/gallery/brands/Schneider.jpg', import.meta.url)
  .href;
const siemensBrandLogo = new URL('../assets/client/gallery/brands/siemens.jpg', import.meta.url).href;
const yokogawaBrandLogo = new URL('../assets/client/gallery/brands/Yoko.jpg', import.meta.url).href;

const cfabbProductImage = new URL('../assets/client/gallery/products/cfabb.jpg.png', import.meta.url)
  .href;
const cf3ProductImage = new URL('../assets/client/gallery/products/CF3.jpg', import.meta.url).href;
const caudalProductImage = new URL('../assets/client/gallery/products/caudal.jpg', import.meta.url).href;
const caudal2ProductImage = new URL('../assets/client/gallery/products/caudal2.jpg', import.meta.url).href;
const imagen1ProductImage = new URL('../assets/client/gallery/products/Imagen 1.jpg', import.meta.url)
  .href;
const masicosProductImage = new URL('../assets/client/gallery/products/Masicos.png', import.meta.url)
  .href;
const radarProductImage = new URL('../assets/client/gallery/products/Radar.png', import.meta.url).href;
const spiritProductImage = new URL('../assets/client/gallery/products/spirit.jpg', import.meta.url).href;
const tpProductImage = new URL('../assets/client/gallery/products/TP.png', import.meta.url).href;
const tp2ProductImage = new URL('../assets/client/gallery/products/TP2.jpg', import.meta.url).href;
const tp3ProductImage = new URL('../assets/client/gallery/products/TP3.jpg', import.meta.url).href;
const tp4ProductImage = new URL('../assets/client/gallery/products/TP4.jpg', import.meta.url).href;
export const gallery: GalleryContent = {
  sectionEyebrow: 'Galería de marca',
  sectionTitle: 'Brands Gallery',
  sectionSubtitle:
    'Sección opcional para exhibir marcas representadas y equipos mediante carruseles continuos configurados desde datos.',
  brandsTitle: 'Marcas representadas',
  productsTitle: 'Equipos e instrumentación',
  brands: [
    { name: 'ABB', logo: abbBrandLogo },
    { name: 'Emerson', logo: emersonBrandLogo },
    { name: 'Endress+Hauser', logo: endressHauserBrandLogo },
    { name: 'Honeywell', logo: honeywellBrandLogo },
    { name: 'Krohne', logo: krohneBrandLogo },
    { name: 'Rosemount', logo: rosemountBrandLogo },
    { name: 'Schneider Electric', logo: schneiderBrandLogo },
    { name: 'Siemens', logo: siemensBrandLogo },
    { name: 'Yokogawa', logo: yokogawaBrandLogo },
  ],
  products: [
    { title: 'Transmisor de presión TP', image: tpProductImage },
    { title: 'Medidor de caudal', image: caudalProductImage },
    { title: 'Medidor de radar', image: radarProductImage },
    { title: 'Caudalímetro ABB', image: cfabbProductImage },
    { title: 'Analizador Spirit', image: spiritProductImage },
    { title: 'Medidor de caudal secundario', image: caudal2ProductImage },
    { title: 'Medidor másico', image: masicosProductImage },
    { title: 'Transmisor de presión TP2', image: tp2ProductImage },
    { title: 'Caudalímetro CF3', image: cf3ProductImage },
    { title: 'Transmisor de presión TP3', image: tp3ProductImage },
    { title: 'Transmisor de presión TP4', image: tp4ProductImage },
    { title: 'Equipo de instrumentación', image: imagen1ProductImage },
  ],
};