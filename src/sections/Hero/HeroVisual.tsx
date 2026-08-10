import type { Company } from '../../types';

import { theme } from '../../data/theme';
import { designTokens } from '../../styles/tokens';
import { BaseCard } from '../../components/cards';

export interface HeroVisualProps {
  company: Company;
}

export function HeroVisual({ company }: HeroVisualProps) {
  if (company.heroImage) {
    return (
      <figure style={{ margin: 0 }}>
        <img
          src={company.heroImage}
          alt={company.heroImageAlt}
          style={{
            width: '100%',
            minHeight: '16rem',
            objectFit: 'cover',
            borderRadius: designTokens.radius.lg,
            border: `1px solid ${theme.borderColor}`,
            boxShadow: theme.shadow,
          }}
        />
      </figure>
    );
  }

  return (
    <BaseCard
      as="figure"
      ariaLabel={company.heroImageAlt}
      style={{
        margin: 0,
        minHeight: '18rem',
        display: 'grid',
        placeItems: 'center',
        background:
          `linear-gradient(135deg, ${theme.secondaryColor} 0%, ${theme.backgroundColor} 55%, ${theme.accentColor}22 100%)`,
      }}
    >
      <div
        role="img"
        aria-label={company.heroImageAlt}
        style={{
          width: '100%',
          minHeight: '12rem',
          borderRadius: designTokens.radius.md,
          border: `1px dashed ${theme.borderColor}`,
          display: 'grid',
          placeItems: 'center',
          color: theme.textSecondaryColor,
          padding: designTokens.spacing.md,
          textAlign: 'center',
        }}
      >
        Placeholder visual reutilizable para Hero
      </div>
    </BaseCard>
  );
}