import { Section } from '../../components/layout';
import { SectionTitle } from '../../components/ui';
import { clientConfig } from '../../data';
import { designTokens } from '../../styles/tokens';
import { IndustriesGrid } from './IndustriesGrid';

export function IndustriesSection() {
  const { featureFlags, industries } = clientConfig;

  if (!featureFlags.industries) {
    return null;
  }

  return (
    <Section ariaLabel="Industrias" id="industrias" spacing="lg">
      <div style={{ display: 'grid', gap: designTokens.spacing.lg }}>
        <SectionTitle
          as="h2"
          eyebrow="Sectores que atendemos"
          title="Industrias"
          subtitle="Experiencia en los principales sectores productivos e industriales."
        />
        <IndustriesGrid industries={industries} />
      </div>
    </Section>
  );
}
