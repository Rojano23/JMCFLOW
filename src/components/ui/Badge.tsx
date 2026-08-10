import type { CSSProperties, HTMLAttributes } from 'react';

import { theme } from '../../data/theme';
import { designTokens } from '../../styles/tokens';

type BadgeTone = 'primary' | 'accent' | 'neutral' | 'border';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  label: string;
  tone?: BadgeTone;
  ariaLabel?: string;
}

function getToneStyle(tone: BadgeTone): CSSProperties {
  if (tone === 'primary') {
    return {
      color: theme.secondaryColor,
      backgroundColor: theme.primaryColor,
      border: `1px solid ${theme.primaryColor}`,
    };
  }

  if (tone === 'accent') {
    return {
      color: theme.secondaryColor,
      backgroundColor: theme.accentColor,
      border: `1px solid ${theme.accentColor}`,
    };
  }
  if (tone === 'border') {
    return {
      color: theme.textColor,
      backgroundColor: theme.borderColor,
      border: `1px solid ${theme.primaryColor}`,
    };
  }
  return {
    color: theme.textColor,
    backgroundColor: theme.secondaryColor,
    border: `1px solid ${theme.borderColor}`,
  };
}

export function Badge({ label, tone = 'neutral', ariaLabel, style, ...rest }: BadgeProps) {
  const badgeStyle: CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: `${designTokens.spacing.xs} ${designTokens.spacing.sm}`,
    borderRadius: designTokens.radius.sm,
    fontSize: '0.75rem',
    fontWeight: 600,
    fontFamily: theme.fontFamily,
    ...getToneStyle(tone),
    ...style,
  };

  return (
    <span aria-label={ariaLabel ?? label} style={badgeStyle} {...rest}>
      {label}
    </span>
  );
}