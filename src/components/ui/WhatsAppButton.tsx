import type { CSSProperties } from 'react';

import { company } from '../../data/company';
import { features } from '../../data/features';
import { theme } from '../../data/theme';
import { designTokens } from '../../styles/tokens';

function buildWhatsAppUrl(phone: string): string {
  const normalizedPhone = phone.replace(/\D+/g, '');
  return `https://wa.me/${normalizedPhone}`;
}

export function WhatsAppButton() {
  if (!features.whatsapp || !company.whatsapp) {
    return null;
  }

  const buttonStyle: CSSProperties = {
    position: 'fixed',
    right: `clamp(${designTokens.spacing.md}, 2.5vw, ${designTokens.spacing.xl})`,
    bottom: `clamp(${designTokens.spacing.md}, 2.5vw, ${designTokens.spacing.xl})`,
    zIndex: 30,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: '3rem',
    minHeight: '3rem',
    padding: `${designTokens.spacing.sm} ${designTokens.spacing.md}`,
    borderRadius: '999px',
    border: `1px solid ${theme.primaryColor}`,
    backgroundColor: theme.primaryColor,
    color: theme.textOnDarkColor,
    boxShadow: theme.shadow,
    fontFamily: theme.fontFamily,
    fontSize: '0.875rem',
    fontWeight: 700,
    lineHeight: 1,
    textDecoration: 'none',
  };

  return (
    <a
      className="focus-ring"
      href={buildWhatsAppUrl(company.whatsapp)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Contactar por WhatsApp al ${company.whatsapp}`}
      style={buttonStyle}
      title="WhatsApp"
    >
      WhatsApp
    </a>
  );
}