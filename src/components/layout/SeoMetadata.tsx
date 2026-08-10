import { useEffect } from 'react';

import { clientConfig } from '../../data';

function setMetaByName(name: string, content: string): void {
  const selector = `meta[name="${name}"]`;
  let element = document.head.querySelector<HTMLMetaElement>(selector);

  if (!content) {
    element?.remove();
    return;
  }

  if (!element) {
    element = document.createElement('meta');
    element.setAttribute('name', name);
    document.head.appendChild(element);
  }

  element.setAttribute('content', content);
}

function setMetaByProperty(property: string, content: string): void {
  const selector = `meta[property="${property}"]`;
  let element = document.head.querySelector<HTMLMetaElement>(selector);

  if (!content) {
    element?.remove();
    return;
  }

  if (!element) {
    element = document.createElement('meta');
    element.setAttribute('property', property);
    document.head.appendChild(element);
  }

  element.setAttribute('content', content);
}

function setHeadLink(rel: string, href: string): void {
  const selector = `link[rel="${rel}"]`;
  let element = document.head.querySelector<HTMLLinkElement>(selector);

  if (!href) {
    element?.remove();
    return;
  }

  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', rel);
    document.head.appendChild(element);
  }

  element.setAttribute('href', href);
}

export function SeoMetadata() {
  useEffect(() => {
    const { seo } = clientConfig;

    document.title = seo.title;
    setMetaByName('description', seo.description);
    setMetaByName('keywords', seo.keywords.join(', '));

    setMetaByProperty('og:title', seo.ogTitle);
    setMetaByProperty('og:description', seo.ogDescription);
    setMetaByProperty('og:image', seo.ogImage);
    setMetaByProperty('og:type', seo.ogType);

    setHeadLink('canonical', seo.canonical);
    setHeadLink('icon', seo.favicon);
  }, []);

  return null;
}