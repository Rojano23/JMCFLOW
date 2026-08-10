import type { HTMLAttributes } from 'react';

import { designTokens } from '../../styles/tokens';
import { BaseCard } from './BaseCard';
import { Badge } from '../ui/Badge';

export interface InfoCardProps extends HTMLAttributes<HTMLElement> {
  title: string;
  description: string;
  badgeLabel?: string;
  onActivate?: () => void;
  ariaLabel?: string;
}

export function InfoCard({
  title,
  description,
  badgeLabel,
  onActivate,
  ariaLabel,
  style,
  ...rest
}: InfoCardProps) {
  return (
    <BaseCard
      interactive={Boolean(onActivate)}
      onActivate={onActivate}
      ariaLabel={ariaLabel ?? title}
      style={style}
      {...rest}
    >
      <div style={{ display: 'grid', gap: designTokens.spacing.sm }}>
        {badgeLabel ? <Badge label={badgeLabel} tone="primary" /> : null}
        <h3
          style={{
            margin: 0,
            fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
          }}
        >
          {title}
        </h3>
        <p style={{ margin: 0, opacity: 0.9 }}>{description}</p>
      </div>
    </BaseCard>
  );
}