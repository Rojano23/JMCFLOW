import type { CSSProperties } from 'react';

import { theme } from '../../data/theme';
import { designTokens } from '../../styles/tokens';
import { Badge } from '../../components/ui';
import type { Company } from '../../types';

export interface ContactMethodsProps {
  company: Company;
  showSocialLinks: boolean;
}

export function ContactMethods({ company, showSocialLinks }: ContactMethodsProps) {
  const socialEntries = [
    { label: 'LinkedIn', href: company.socialLinks.linkedin },
    { label: 'Instagram', href: company.socialLinks.instagram },
    { label: 'Facebook', href: company.socialLinks.facebook },
  ].filter((entry) => entry.href);

  const listStyle: CSSProperties = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: designTokens.spacing.sm,
    padding: 0,
    margin: 0,
    listStyle: 'none',
  };

  return (
    <section aria-label="Métodos de contacto" style={{ display: 'grid', gap: designTokens.spacing.md }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: designTokens.spacing.sm }}>
        <Badge label={`WhatsApp: ${company.whatsapp}`} tone="border" />
        <Badge label={`Email: ${company.email}`} tone="accent" />
      </div>

      {showSocialLinks && socialEntries.length > 0 && (
        <div>
          <h4 style={{ margin: 0, marginBottom: designTokens.spacing.sm, color: theme.textColor }}>Redes sociales</h4>
          <ul style={listStyle}>
            {socialEntries.map((entry) => (
              <li key={entry.label}>
                <a
                  className="focus-ring"
                  href={entry.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: theme.primaryColor }}
                  aria-label={`Abrir ${entry.label} en nueva pestaña`}
                >
                  {entry.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
