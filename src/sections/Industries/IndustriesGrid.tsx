import type { Industry } from '../../types';
import { IndustryCard } from './IndustryCard';

export interface IndustriesGridProps {
  industries: Industry[];
}

export function IndustriesGrid({ industries }: IndustriesGridProps) {
  return (
    <div className="industries-grid" role="list" aria-label="Lista de industrias">
      {industries.map((industry) => (
        <div key={industry.id} role="listitem">
          <IndustryCard industry={industry} />
        </div>
      ))}
    </div>
  );
}
