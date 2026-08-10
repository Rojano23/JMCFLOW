import type { CSSProperties } from 'react';

import type { Differentiator } from '../../types';
import { InfoCard } from '../../components/cards';

export interface DifferentiatorCardProps {
  differentiator: Differentiator;
}

export function DifferentiatorCard({ differentiator }: DifferentiatorCardProps) {
  const cardStyle: CSSProperties = {
    width: '100%',
  };

  return (
    <InfoCard
      title={differentiator.title}
      description={differentiator.description}
      ariaLabel={differentiator.title}
      style={cardStyle}
    />
  );
}
