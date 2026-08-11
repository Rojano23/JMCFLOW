import type { CSSProperties } from 'react';

import { Container, Section } from '../../components/layout';
import { SectionTitle } from '../../components/ui';
import { clientConfig } from '../../data';
import { theme } from '../../data/theme';
import { designTokens } from '../../styles/tokens';
import { BrandsMarquee } from './BrandsMarquee';
import { ProductsMarquee } from './ProductsMarquee';

export function BrandsGallerySection() {
  const { featureFlags, gallery } = clientConfig;
  const hasBrands = gallery.brands.length > 0;
  const hasProducts = gallery.products.length > 0;

  if (!featureFlags.gallery || (!hasBrands && !hasProducts)) {
    return null;
  }

  const contentStyle: CSSProperties = {
    display: 'grid',
    gap: designTokens.spacing.xl,
  };

  const panelStyle: CSSProperties = {
    display: 'grid',
    gap: designTokens.spacing.lg,
    padding: `clamp(${designTokens.spacing.md}, 3vw, ${designTokens.spacing.xl})`,
    border: `1px solid ${theme.borderColor}`,
    borderRadius: theme.radius,
    background: `linear-gradient(180deg, ${theme.secondaryColor} 0%, rgba(11, 38, 56, 0.92) 100%)`,
    boxShadow: theme.shadow,
  };

  return (
    <Section
      ariaLabel={gallery.sectionTitle}
      id="galeria"
      spacing="lg"
      style={{
        background: `linear-gradient(180deg, ${theme.backgroundColor} 0%, rgba(21, 90, 122, 0.08) 100%)`,
      }}
    >
      <Container size="wide">
        <div className="brands-gallery-stack" style={contentStyle}>
          <SectionTitle
            as="h2"
            eyebrow={gallery.sectionEyebrow}
            title={gallery.sectionTitle}
            subtitle={gallery.sectionSubtitle}
          />

          <div className="brands-gallery-stack" style={panelStyle}>
            {hasBrands ? <BrandsMarquee title={gallery.brandsTitle} brands={gallery.brands} /> : null}
            {hasProducts ? (
              <ProductsMarquee title={gallery.productsTitle} products={gallery.products} />
            ) : null}
          </div>
        </div>
      </Container>
    </Section>
  );
}