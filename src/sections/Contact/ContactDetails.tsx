import type { CSSProperties } from 'react';

import { theme } from '../../data/theme';
import { designTokens } from '../../styles/tokens';
import { InfoCard } from '../../components/cards';
import { SectionTitle } from '../../components/ui';
import type { Company } from '../../types';

export interface ContactDetailsProps {
  company: Company;
}

export function ContactDetails({ company }: ContactDetailsProps) {
  const gridStyle: CSSProperties = {
    display: 'grid',
    gap: designTokens.spacing.md,
    gridTemplateColumns: '1fr',
  };

  const items = [
    { title: 'Teléfono', description: company.phone },
    { title: 'Correo', description: company.email },
    { title: 'Dirección', description: company.address },
    { title: 'Horario', description: company.businessHours },
  ];

  return (
    <section aria-label="Datos de contacto" style={{ display: 'grid', gap: designTokens.spacing.md }}>
      <SectionTitle as="h3" eyebrow="Dónde encontrarnos" title="Información de contacto" />
      <div style={gridStyle} className="contact-details-grid">
        {items.map((item) => (
          <InfoCard key={item.title} title={item.title} description={item.description} ariaLabel={item.title} />
        ))}
      </div>
      <p style={{ margin: 0, color: theme.textSecondaryColor, lineHeight: 1.6 }}>
        Contáctanos para una cotización a nuestro correo de ventas.
      </p>
    </section>
  );
}
