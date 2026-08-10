import type { CSSProperties, HTMLAttributes } from 'react';

import { theme } from '../../data/theme';
import { designTokens } from '../../styles/tokens';

type HeadingElement = 'h1' | 'h2' | 'h3';

export interface SectionTitleProps extends HTMLAttributes<HTMLElement> {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  as?: HeadingElement;
}

export function SectionTitle({
  title,
  subtitle,
  eyebrow,
  as = 'h2',
  style,
  ...rest
}: SectionTitleProps) {
  const Heading = as;

  const titleStyle: CSSProperties = {
    margin: 0,
    fontFamily: theme.fontFamilyHeading,
    fontWeight: 700,
    fontSize: 'clamp(1.5rem, 4vw, 2.25rem)',
    color: theme.textColor,
  };

  const subtitleStyle: CSSProperties = {
    marginTop: designTokens.spacing.sm,
    marginBottom: 0,
    color: theme.textColor,
    fontSize: 'clamp(0.95rem, 2.5vw, 1.125rem)',
  };

  const eyebrowStyle: CSSProperties = {
    margin: 0,
    marginBottom: designTokens.spacing.xs,
    color: theme.accentColor,
    fontSize: '0.75rem',
    textTransform: 'uppercase',
    letterSpacing: '0.18em',
    fontWeight: 600,
  };

  return (
    <header style={style} {...rest}>
      {eyebrow ? <p style={eyebrowStyle}>{eyebrow}</p> : null}
      <Heading style={titleStyle}>{title}</Heading>
      {subtitle ? <p style={subtitleStyle}>{subtitle}</p> : null}
    </header>
  );
}