import type { CSSProperties } from 'react';

import { theme } from '../../data/theme';
import { designTokens } from '../../styles/tokens';
import type { Company } from '../../types';

export interface ContactMapProps {
  company: Company;
  showMap: boolean;
}

export function ContactMap({ company, showMap }: ContactMapProps) {
  if (!showMap || !company.googleMapsUrl) {
    return null;
  }

  const iframeStyle: CSSProperties = {
    width: '100%',
    minHeight: '18rem',
    border: `1px solid ${theme.borderColor}`,
    borderRadius: designTokens.radius.md,
  };

  return (
    <section aria-label="Mapa de ubicación">
      <iframe
        title={`Mapa de ${company.companyName}`}
        src={company.googleMapsUrl}
        style={iframeStyle}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </section>
  );
}
