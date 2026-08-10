import type { CSSProperties } from 'react';

import type { Service } from '../../types';
import { theme } from '../../data/theme';
import { designTokens } from '../../styles/tokens';
import { BaseCard } from '../../components/cards';
import { Badge } from '../../components/ui';

export interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const cardStyle: CSSProperties = {
    minHeight: '30rem',
    display: 'flex',
    flexDirection: 'column',
    gap: designTokens.spacing.md,
  };

  const imageStyle: CSSProperties = {
    width: '100%',
    height: 'clamp(11.25rem, 25vw, 13.75rem)',
    objectFit: 'cover',
    borderRadius: theme.radius,
  };

  const headerStyle: CSSProperties = {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: designTokens.spacing.sm,
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

  const detailedDescriptionStyle: CSSProperties = {
    margin: 0,
    color: theme.textOnDarkColor,
    fontSize: '0.9rem',
    lineHeight: 1.7,
  };

  return (
    <BaseCard ariaLabel={service.title} style={cardStyle}>
      {service.image && <img src={service.image} alt={service.imageAlt} style={imageStyle} loading="lazy" />}
      <div style={headerStyle}>
        <h3 style={titleStyle}>{service.title}</h3>
        {service.featured && <Badge label="Destacado" tone="accent" />}
      </div>
      <p style={descriptionStyle}>{service.shortDescription}</p>
      <p style={detailedDescriptionStyle}>{service.detailedDescription}</p>
    </BaseCard>
  );
}
