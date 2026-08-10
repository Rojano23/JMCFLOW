import { useMemo, useState } from 'react';

import { clientConfig } from '../../data';
import { getEnabledNavigationItems, navigationItems } from '../../data/navigation';
import { theme } from '../../data/theme';
import { designTokens } from '../../styles/tokens';
import { Container } from '../layout';
import { Button } from '../ui';
import { MobileMenu } from './MobileMenu';
import { NavigationLink } from './NavigationLink';

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeHref, setActiveHref] = useState('#inicio');

  const enabledItems = useMemo(
    () => getEnabledNavigationItems(navigationItems, clientConfig.featureFlags),
    [],
  );

  function handleCloseMenu() {
    setIsMobileMenuOpen(false);
  }

  function handleLinkClick(href: string) {
    setActiveHref(href);
    setIsMobileMenuOpen(false);
  }

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 20,
        borderBottom: `1px solid ${theme.borderColor}`,
        backgroundColor: theme.secondaryColor,
      }}
    >
      <Container
        as="nav"
        aria-label="Navegación principal"
        style={{
          display: 'grid',
          gap: designTokens.spacing.sm,
          paddingBlock: designTokens.spacing.sm,
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: designTokens.spacing.md,
          }}
        >
          <a
            className="focus-ring"
            href="#inicio"
            aria-label={`Ir a inicio de ${clientConfig.company.companyName}`}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: designTokens.spacing.sm,
              color: theme.textOnDarkColor,
              textDecoration: 'none',
              fontFamily: theme.fontFamilyHeading,
              fontWeight: 700,
            }}
            onClick={() => handleLinkClick('#inicio')}
          >
            <span
              aria-hidden="true"
              style={{
                width: '0.75rem',
                height: '0.75rem',
                borderRadius: '999px',
                backgroundColor: theme.accentColor,
              }}
            />
            <span>{clientConfig.company.companyName}</span>
          </a>

          <div className="nav-desktop-list" style={{ display: 'none', gap: designTokens.spacing.xs }}>
            {enabledItems.map((item) => (
              <NavigationLink
                key={item.id}
                href={item.href}
                label={item.label}
                isActive={activeHref === item.href}
                onClick={() => handleLinkClick(item.href)}
                aria-label={`Ir a ${item.label}`}
              />
            ))}
          </div>

          <div className="nav-mobile-toggle" style={{ display: 'inline-flex' }}>
            <Button
              variant="ghost"
              size="sm"
              ariaLabel={isMobileMenuOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation-panel"
              onClick={() => setIsMobileMenuOpen((current) => !current)}
              className="focus-ring"
            >
              {isMobileMenuOpen ? 'Cerrar' : 'Menú'}
            </Button>
          </div>
        </div>

        <div id="mobile-navigation-panel">
          <MobileMenu
            isOpen={isMobileMenuOpen}
            items={enabledItems}
            activeHref={activeHref}
            onClose={handleCloseMenu}
          />
        </div>
      </Container>
    </header>
  );
}