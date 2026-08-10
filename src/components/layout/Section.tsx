import type { CSSProperties, HTMLAttributes, ReactNode } from 'react';

import { theme } from '../../data/theme';
import { designTokens } from '../../styles/tokens';
import { Container } from './Container';

type SectionElement = 'section' | 'article' | 'div';

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  as?: SectionElement;
  children: ReactNode;
  withContainer?: boolean;
  spacing?: 'sm' | 'md' | 'lg';
  ariaLabel?: string;
}

const spacingMap = {
  sm: designTokens.spacing.lg,
  md: designTokens.spacing.xl,
  lg: designTokens.spacing.xxl,
};

export function Section({
  as = 'section',
  children,
  withContainer = true,
  spacing = 'md',
  ariaLabel,
  style,
  ...rest
}: SectionProps) {
  const Component = as;

  const sectionStyle: CSSProperties = {
    paddingBlock: spacingMap[spacing],
    scrollMarginTop: `calc(4.5rem + ${designTokens.spacing.sm})`,
    borderColor: theme.borderColor,
    ...style,
  };

  const content = withContainer ? <Container>{children}</Container> : children;

  return (
    <Component aria-label={ariaLabel} style={sectionStyle} {...rest}>
      {content}
    </Component>
  );
}