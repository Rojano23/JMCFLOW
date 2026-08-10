import type { CSSProperties } from 'react';

import { company } from '../../data/company';
import { features } from '../../data/features';
import { getEnabledNavigationItems, navigationItems } from '../../data/navigation';
import { theme } from '../../data/theme';
import { designTokens } from '../../styles/tokens';
import { Container } from './Container';

function getSocialEntries() {
  return [
    { label: 'LinkedIn', href: company.socialLinks.linkedin },
    { label: 'Instagram', href: company.socialLinks.instagram },
    { label: 'Facebook', href: company.socialLinks.facebook },
  ].filter((item) => item.href);
}

export function Footer() {
  const enabledItems = getEnabledNavigationItems(navigationItems, features);
  const socialEntries = getSocialEntries();

  const sectionTitleStyle: CSSProperties = {
    margin: 0,
    marginBottom: designTokens.spacing.sm,
    fontFamily: theme.fontFamilyHeading,
    fontSize: '0.95rem',
    color: theme.textOnDarkColor,
  };

  return (
    <footer
      aria-label="Pie de página"
      style={{
        borderTop: `1px solid ${theme.borderColor}`,
        backgroundColor: theme.secondaryColor,
      }}
    >
      <Container
        as="div"
        style={{
          paddingBlock: designTokens.spacing.xl,
          display: 'grid',
          gap: designTokens.spacing.xl,
        }}
      >
        <div className="footer-grid" style={{ display: 'grid', gap: designTokens.spacing.lg }}>
          <section aria-label="Identidad corporativa">
            <h2 style={{ margin: 0, fontSize: '1.125rem', color: theme.textOnDarkColor }}>{company.companyName}</h2>
            <p style={{ margin: `${designTokens.spacing.xs} 0 0`, color: theme.textOnDarkColor }}>
              {company.tagline}
            </p>
          </section>

          <nav aria-label="Navegación del pie de página">
            <h3 style={sectionTitleStyle}>Navegación</h3>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'grid',
                gap: designTokens.spacing.xs,
              }}
            >
              {enabledItems.map((item) => (
                <li key={item.id}>
                  <a className="focus-ring" href={item.href} style={{ color: theme.textOnDarkColor, textDecoration: 'none' }}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <section aria-label="Contacto en pie de página">
            <h3 style={sectionTitleStyle}>Contacto</h3>
            <p style={{ margin: `0 0 ${designTokens.spacing.xs}`, color: theme.textOnDarkColor }}>{company.email}</p>
            <p style={{ margin: `0 0 ${designTokens.spacing.xs}`, color: theme.textOnDarkColor }}>{company.phone}</p>
            <p style={{ margin: 0, color: theme.textOnDarkColor }}>{company.address}</p>
          </section>

          {features.socialLinks && socialEntries.length > 0 ? (
            <section aria-label="Redes sociales">
              <h3 style={sectionTitleStyle}>Redes sociales</h3>
              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  display: 'flex',
                  gap: designTokens.spacing.sm,
                  flexWrap: 'wrap',
                }}
              >
                {socialEntries.map((entry) => (
                  <li key={entry.label}>
                    <a
                      className="focus-ring"
                      href={entry.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: theme.textOnDarkColor, textDecoration: 'none' }}
                      aria-label={`Abrir ${entry.label} en nueva pestaña`}
                    >
                      {entry.label}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}
        </div>

        <p style={{ margin: 0, color: theme.textSecondaryColor, fontSize: '0.875rem' }}>
          {new Date().getFullYear()} {company.companyName}. Todos los derechos reservados.
        </p>
      </Container>
    </footer>
  );
}