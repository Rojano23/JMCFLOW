export interface DesignTokens {
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    text: string;
    textSecondary: string;
    textOnDark: string;
    muted: string;
    border: string;
  };
  typography: {
    body: string;
    heading: string;
  };
  radius: {
    sm: string;
    md: string;
    lg: string;
  };
  shadow: string;
  spacing: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
  };
}

export const designTokens: DesignTokens = {
  colors: {
    primary: '#155A7A',
    secondary: '#0B2638',

    accent: '#F28C28',

    background: '#F4F6F7',

    text: '#17212B',
    textSecondary: '#64748B',

    textOnDark: '#FFFFFF',
    muted: '#475569',

    border: '#D8E0E5',
  },
  typography: {
    body: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    heading: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  },
  radius: {
    sm: '0.5rem',
    md: '0.75rem',
    lg: '1rem',
  },
  shadow: '0 10px 30px rgba(2, 6, 23, 0.25)',
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    xxl: '3rem',
  },
};
