import type { FeatureFlags, NavigationItem } from '../types';

export const navigationItems: NavigationItem[] = [
  {
    id: 'home',
    label: 'Inicio',
    href: '#inicio',
  },
  {
    id: 'about',
    label: 'Nosotros',
    href: '#nosotros',
    featureKey: 'about',
  },
  {
    id: 'services',
    label: 'Servicios',
    href: '#servicios',
    featureKey: 'services',
  },
  {
    id: 'industries',
    label: 'Industrias',
    href: '#industrias',
    featureKey: 'industries',
  },
  {
    id: 'projects',
    label: 'Proyectos',
    href: '#proyectos',
    featureKey: 'projects',
  },
  {
    id: 'gallery',
    label: 'Galería',
    href: '#galeria',
    featureKey: 'gallery',
  },
  {
    id: 'contact',
    label: 'Contacto',
    href: '#contacto',
  },
];

export function getEnabledNavigationItems(
  items: NavigationItem[],
  featureFlags: FeatureFlags,
): NavigationItem[] {
  return items.filter((item) => {
    if (!item.featureKey) {
      return true;
    }

    return featureFlags[item.featureKey];
  });
}