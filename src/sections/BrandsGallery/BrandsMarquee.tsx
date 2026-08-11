import type { CSSProperties } from 'react';

import type { BrandItem } from '../../types';
import { theme } from '../../data/theme';
import { designTokens } from '../../styles/tokens';

export interface BrandsMarqueeProps {
  title: string;
  brands: BrandItem[];
}

export function BrandsMarquee({ title, brands }: BrandsMarqueeProps) {
  if (brands.length === 0) {
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
    ['--marquee-duration' as string]: `${Math.max(brands.length * 5, 18)}s`,
    paddingBlock: designTokens.spacing.xs,
  };

  const groupStyle: CSSProperties = {
    gap: designTokens.spacing.md,
    paddingRight: designTokens.spacing.md,
  };

  const itemStyle: CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: '0 0 auto',
    minWidth: 'clamp(9rem, 18vw, 12rem)',
    minHeight: 'clamp(4.5rem, 10vw, 5.5rem)',
    padding: `${designTokens.spacing.md} ${designTokens.spacing.lg}`,
    border: `1px solid rgba(255, 255, 255, 0.12)`,
    borderRadius: designTokens.radius.md,
    backgroundColor: 'rgba(255, 255, 255, 0.04)',
    backdropFilter: 'blur(10px)',
  };

  const logoStyle: CSSProperties = {
    width: '100%',
    height: 'clamp(2.25rem, 6vw, 3rem)',
    objectFit: 'contain',
    filter: 'grayscale(100%) contrast(1.08)',
  };

  function renderItems(duplicated = false) {
    return brands.map((brand, index) => (
      <div key={`${brand.name}-${duplicated ? 'copy' : 'base'}-${index}`} style={itemStyle}>
        <img alt={brand.name} loading="lazy" src={brand.logo} style={logoStyle} />
      </div>
    ));
  }

  return (
    <div className="brands-gallery-marquee-block">
      <div className="brands-gallery-marquee-header">
        <h3 style={headingStyle}>{title}</h3>
      </div>

      <div className="brands-gallery-marquee-viewport" style={viewportStyle}>
        <div className="brands-gallery-marquee-track">
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