import type { Differentiator } from '../../types';
import { DifferentiatorCard } from './DifferentiatorCard';

export interface DifferentiatorsGridProps {
  items: Differentiator[];
}

export function DifferentiatorsGrid({ items }: DifferentiatorsGridProps) {
  return (
    <div className="differentiators-grid" role="list" aria-label="Lista de diferenciadores">
      {items.map((item) => (
        <div key={item.id} role="listitem">
          <DifferentiatorCard differentiator={item} />
        </div>
      ))}
    </div>
  );
}
