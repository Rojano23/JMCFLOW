import type { CSSProperties } from 'react';

import type { ProductItem } from '../../types';
import { theme } from '../../data/theme';
import { designTokens } from '../../styles/tokens';

export interface ProductsMarqueeProps {
  title: string;
  products: ProductItem[];
}

export function ProductsMarquee({ title, products }: ProductsMarqueeProps) {
  if (products.length === 0) {
    return null;
  }

  const headingStyle: CSSProperties = {
    margin: 0,
    color: theme.textOnDarkColor,
    fontFamily: theme.fontFamilyHeading,
    fontSize: 'clamp(1.1rem, 2vw, 1.35rem)',
    fontWeight: 700,
  };

  const viewportStyle: CSSProperties = {
    ['--gallery-surface' as string]: theme.secondaryColor,
    ['--marquee-duration' as string]: `${Math.max(products.length * 6, 22)}s`,
    paddingBlock: designTokens.spacing.xs,
  };

  const groupStyle: CSSProperties = {
    gap: designTokens.spacing.md,
    paddingRight: designTokens.spacing.md,
  };

  const figureStyle: CSSProperties = {
    flex: '0 0 auto',
    width: 'clamp(12rem, 28vw, 18rem)',
    margin: 0,
    padding: designTokens.spacing.sm,
    border: `1px solid rgba(255, 255, 255, 0.12)`,
    borderRadius: designTokens.radius.md,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
  };

  const imageStyle: CSSProperties = {
    display: 'block',
    width: '100%',
    aspectRatio: '4 / 3',
    borderRadius: `calc(${designTokens.radius.md} - 0.125rem)`,
    objectFit: 'cover',
  };

  const captionStyle: CSSProperties = {
    marginTop: designTokens.spacing.sm,
    color: theme.textOnDarkColor,
    fontSize: '0.9rem',
    fontWeight: 600,
  };

  function renderItems(duplicated = false) {
    return products.map((product, index) => (
      <figure key={`${product.title}-${duplicated ? 'copy' : 'base'}-${index}`} style={figureStyle}>
        <img alt={product.title} loading="lazy" src={product.image} style={imageStyle} />
        <figcaption style={captionStyle}>{product.title}</figcaption>
      </figure>
    ));
  }

  return (
    <div className="brands-gallery-marquee-block">
      <div className="brands-gallery-marquee-header">
        <h3 style={headingStyle}>{title}</h3>
      </div>

      <div className="brands-gallery-marquee-viewport" style={viewportStyle}>
        <div className="brands-gallery-marquee-track" data-direction="reverse">
          <div className="brands-gallery-marquee-group" style={groupStyle}>
            {renderItems()}
          </div>
          <div aria-hidden="true" className="brands-gallery-marquee-group" style={groupStyle}>
            {renderItems(true)}
          </div>
        </div>
      </div>
    </div>
  );
}