import type { Service } from '../../types';
import { ServiceCard } from './ServiceCard';

export interface ServicesGridProps {
  services: Service[];
}

export function ServicesGrid({ services }: ServicesGridProps) {
  return (
    <div className="services-grid" role="list" aria-label="Lista de servicios">
      {services.map((service) => (
        <div key={service.id} role="listitem">
          <ServiceCard service={service} />
        </div>
      ))}
    </div>
  );
}
