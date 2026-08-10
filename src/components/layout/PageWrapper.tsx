import type { CSSProperties, HTMLAttributes, ReactNode } from 'react';

import { theme } from '../../data/theme';
import { designTokens } from '../../styles/tokens';

export interface PageWrapperProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
}

export function PageWrapper({ children, style, ...rest }: PageWrapperProps) {
  const wrapperStyle: CSSProperties = {
    minHeight: '100dvh',
    backgroundColor: theme.backgroundColor,
    color: theme.textColor,
    fontFamily: designTokens.typography.body,
    ...style,
  };

  return (
    <main style={wrapperStyle} {...rest}>
      {children}
    </main>
  );
}