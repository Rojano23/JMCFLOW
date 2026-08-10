import type { CSSProperties } from 'react';

import type { Industry } from '../../types';
import { theme } from '../../data/theme';
import { designTokens } from '../../styles/tokens';
import { BaseCard } from '../../components/cards';
import { Badge } from '../../components/ui';

export interface IndustryCardProps {
  industry: Industry;
}

export function IndustryCard({ industry }: IndustryCardProps) {
  const headerStyle: CSSProperties = {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: designTokens.spacing.sm,
    marginBottom: designTokens.spacing.sm,
  };

  const titleStyle: CSSProperties = {
    margin: 0,
    fontFamily: theme.fontFamilyHeading,
    fontWeight: 700,
    fontSize: 'clamp(1rem, 2.5vw, 1.125rem)',
    color: theme.textOnDarkColor,
  };

  const descriptionStyle: CSSProperties = {
    margin: 0,
    color: theme.textOnDarkColor,
    fontSize: '0.95rem',
    lineHeight: 1.65,
  };

  return (
    <BaseCard ariaLabel={industry.title}>
      <div style={headerStyle}>
        <h3 style={titleStyle}>{industry.title}</h3>
        {industry.featured && <Badge label="Destacado" tone="accent" />}
      </div>
      <p style={descriptionStyle}>{industry.shortDescription}</p>
    </BaseCard>
  );
}
