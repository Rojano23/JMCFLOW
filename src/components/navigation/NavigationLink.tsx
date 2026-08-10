import type { AnchorHTMLAttributes, CSSProperties } from 'react';

import { theme } from '../../data/theme';
import { designTokens } from '../../styles/tokens';

export interface NavigationLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  label: string;
  isActive?: boolean;
}

export function NavigationLink({ label, isActive = false, style, ...rest }: NavigationLinkProps) {
  const linkStyle: CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: designTokens.radius.sm,
    padding: `${designTokens.spacing.xs} ${designTokens.spacing.sm}`,
    fontFamily: theme.fontFamily,
    fontWeight: 600,
    textDecoration: 'none',
    color: isActive ? theme.secondaryColor : theme.textOnDarkColor,
    backgroundColor: isActive ? theme.primaryColor : 'transparent',
    border: `1px solid ${isActive ? theme.primaryColor : 'transparent'}`,
    minHeight: '2.25rem',
    transition: 'background-color 0.2s ease, color 0.2s ease',
    ...style,
  };

  return (
    <a className="focus-ring" style={linkStyle} {...rest}>
      {label}
    </a>
  );
} 