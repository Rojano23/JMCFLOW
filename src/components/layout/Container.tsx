import type { CSSProperties, HTMLAttributes, ReactNode } from 'react';

import { theme } from '../../data/theme';
import { designTokens } from '../../styles/tokens';

type ContainerElement = 'div' | 'section' | 'article' | 'main' | 'nav';
type ContainerSize = 'narrow' | 'content' | 'wide';

const sizeMap: Record<ContainerSize, string> = {
  narrow: '48rem',
  content: '72rem',
  wide: '90rem',
};

export interface ContainerProps extends HTMLAttributes<HTMLElement> {
  as?: ContainerElement;
  size?: ContainerSize;
  children: ReactNode;
}

export function Container({
  as = 'div',
  size = 'content',
  children,
  style,
  ...rest
}: ContainerProps) {
  const Component = as;

  const containerStyle: CSSProperties = {
    width: '100%',
    maxWidth: sizeMap[size],
    marginInline: 'auto',
    paddingInline: `clamp(${designTokens.spacing.md}, 4vw, ${designTokens.spacing.xl})`,
    color: theme.textColor,
    ...style,
  };

  return (
    <Component style={containerStyle} {...rest}>
      {children}
    </Component>
  );
}