import type { Theme } from '../types';
import { designTokens } from '../styles/tokens';

export const theme: Theme = {
  primaryColor: designTokens.colors.primary,
  secondaryColor: designTokens.colors.secondary,
  accentColor: designTokens.colors.accent,
  backgroundColor: designTokens.colors.background,
  textColor: designTokens.colors.text,
  textSecondaryColor: designTokens.colors.muted,
  textOnDarkColor: designTokens.colors.textOnDark,
  borderColor: designTokens.colors.border,
  radius: designTokens.radius.lg,
  shadow: designTokens.shadow,
  fontFamily: designTokens.typography.body,
  fontFamilyHeading: designTokens.typography.heading,
};
