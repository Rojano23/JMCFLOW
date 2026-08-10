import type { Company } from '../../types';

import { theme } from '../../data/theme';
import { designTokens } from '../../styles/tokens';
import { SectionTitle } from '../../components/ui';

export interface AboutContentProps {
  company: Company;
}

export function AboutContent({ company }: AboutContentProps) {
  return (
    <div style={{ display: 'grid', gap: designTokens.spacing.lg }}>
      <SectionTitle
        as="h2"
        eyebrow="Nosotros"
        title={company.aboutTitle}
        subtitle={company.aboutSubtitle}
      />

      <p
        style={{
          margin: 0,
          color: theme.textSecondaryColor,
          fontSize: 'clamp(1rem, 2.5vw, 1.125rem)',
          lineHeight: 1.7,
        }}
      >
        {company.aboutDescription}
      </p>

      <div
        className="about-mv-grid"
        style={{ display: 'grid', gap: designTokens.spacing.md }}
      >
        <article
          style={{
            border: `1px solid ${theme.borderColor}`,
            borderRadius: designTokens.radius.md,
            padding: designTokens.spacing.lg,
            backgroundColor: theme.secondaryColor,
            boxShadow: theme.shadow,
          }}
        >
          <h3
            style={{
              margin: `0 0 ${designTokens.spacing.sm}`,
              color: theme.primaryColor,
              fontSize: '1rem',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
            }}
          >
            Misión
          </h3>
          <p style={{ margin: 0, color: theme.textOnDarkColor, lineHeight: 1.6 }}>
            {company.mission}
          </p>
        </article>

        <article
          style={{
            border: `1px solid ${theme.borderColor}`,
            borderRadius: designTokens.radius.md,
            padding: designTokens.spacing.lg,
            backgroundColor: theme.secondaryColor,
            boxShadow: theme.shadow,
          }}
        >
          <h3
            style={{
              margin: `0 0 ${designTokens.spacing.sm}`,
              color: theme.accentColor,
              fontSize: '1rem',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
            }}
          >
            Visión
          </h3>
          <p style={{ margin: 0, color: theme.textOnDarkColor, lineHeight: 1.6 }}>
            {company.vision}
          </p>
        </article>
      </div>
    </div>
  );
}
