import { Section } from '../../components/layout';
import { SectionTitle } from '../../components/ui';
import { clientConfig } from '../../data';
import { designTokens } from '../../styles/tokens';
import { DifferentiatorsGrid } from './DifferentiatorsGrid';

export function DifferentiatorsSection() {
  const { featureFlags, company } = clientConfig;

  if (!featureFlags.differentiators || company.differentiators.length === 0) {
    return null;
  }

  return (
    <Section ariaLabel="Diferenciadores" id="diferenciadores" spacing="lg">
      <div style={{ display: 'grid', gap: designTokens.spacing.lg }}>
        <SectionTitle
          as="h2"
          eyebrow="Por qué elegirnos"
          title="Nuestros diferenciadores"
          subtitle="Principios estructurales que hacen escalable y sostenible esta plantilla."
        />
        <DifferentiatorsGrid items={company.differentiators} />
      </div>
    </Section>
  );
}
