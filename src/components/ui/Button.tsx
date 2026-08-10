import type { ButtonHTMLAttributes, CSSProperties, ReactNode } from 'react';

import { theme } from '../../data/theme';
import { designTokens } from '../../styles/tokens';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

const sizeMap: Record<ButtonSize, CSSProperties> = {
  sm: {
    fontSize: '0.875rem',
    padding: `${designTokens.spacing.sm} ${designTokens.spacing.md}`,
  },
  md: {
    fontSize: '1rem',
    padding: `${designTokens.spacing.sm} ${designTokens.spacing.lg}`,
  },
  lg: {
    fontSize: '1.125rem',
    padding: `${designTokens.spacing.md} ${designTokens.spacing.xl}`,
  },
};

function getVariantStyle(variant: ButtonVariant): CSSProperties {
  if (variant === 'primary') {
    return {
      backgroundColor: theme.primaryColor,
      color: theme.textOnDarkColor,
      border: `1px solid ${theme.primaryColor}`,
      boxShadow: theme.shadow,
    };
  }

  if (variant === 'secondary') {
    return {
      backgroundColor: theme.secondaryColor,
      color: theme.textOnDarkColor,
      border: `1px solid ${theme.borderColor}`,
      boxShadow: theme.shadow,
    };
  }

  return {
    backgroundColor: 'transparent',
    color: theme.textOnDarkColor,
    border: `1px solid ${theme.borderColor}`,
  };
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  ariaLabel?: string;
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  ariaLabel,
  style,
  type = 'button',
  ...rest
}: ButtonProps) {
  const buttonStyle: CSSProperties = {
    borderRadius: theme.radius,
    fontFamily: theme.fontFamily,
    fontWeight: 600,
    cursor: rest.disabled ? 'not-allowed' : 'pointer',
    opacity: rest.disabled ? 0.6 : 1,
    transition: 'transform 0.2s ease, opacity 0.2s ease',
    ...sizeMap[size],
    ...getVariantStyle(variant),
    ...style,
  };

  return (
    <button aria-label={ariaLabel} style={buttonStyle} type={type} {...rest}>
      {children}
    </button>
  );
}