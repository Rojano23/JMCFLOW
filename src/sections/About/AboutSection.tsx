import { Section } from '../../components/layout';
import { clientConfig } from '../../data';
import { designTokens } from '../../styles/tokens';
import { AboutContent } from './AboutContent';

export function AboutSection() {
  const { featureFlags, company } = clientConfig;

  if (!featureFlags.about) {
    return null;
  }

  return (
    <Section ariaLabel="Nosotros" id="nosotros" spacing="lg">
      <div style={{ display: 'grid', gap: designTokens.spacing.xl }}>
        <AboutContent company={company} />
      </div>
    </Section>
  );
}
