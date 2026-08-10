import type { CSSProperties, HTMLAttributes, KeyboardEvent, ReactNode } from 'react';

import { theme } from '../../data/theme';
import { designTokens } from '../../styles/tokens';

type CardElement = 'article' | 'div' | 'section' | 'figure';

export interface BaseCardProps extends HTMLAttributes<HTMLElement> {
  as?: CardElement;
  children: ReactNode;
  interactive?: boolean;
  onActivate?: () => void;
  ariaLabel?: string;
}

export function BaseCard({
  as = 'article',
  children,
  interactive = false,
  onActivate,
  ariaLabel,
  style,
  onClick,
  onKeyDown,
  role,
  tabIndex,
  ...rest
}: BaseCardProps) {
  const Component = as;
  const isInteractive = interactive || Boolean(onActivate);

  const cardStyle: CSSProperties = {
    border: `1px solid ${theme.borderColor}`,
    borderRadius: theme.radius,
    backgroundColor: theme.secondaryColor,
    color: theme.textOnDarkColor,
    boxShadow: designTokens.shadow,
    padding: `clamp(${designTokens.spacing.md}, 2vw, ${designTokens.spacing.xl})`,
    width: '100%',
    ...style,
  };

  function handleKeyDown(event: KeyboardEvent<HTMLElement>) {
    onKeyDown?.(event);

    if (!isInteractive || !onActivate || event.defaultPrevented) {
      return;
    }

    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onActivate();
    }
  }

  return (
    <Component
      aria-label={ariaLabel}
      role={isInteractive ? 'button' : role}
      tabIndex={isInteractive ? 0 : tabIndex}
      style={cardStyle}
      onClick={(event) => {
        onClick?.(event);

        if (isInteractive) {
          onActivate?.();
        }
      }}
      onKeyDown={handleKeyDown}
      {...rest}
    >
      {children}
    </Component>
  );
}