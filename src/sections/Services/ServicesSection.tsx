import { Section } from '../../components/layout';
import { SectionTitle } from '../../components/ui';
import { clientConfig } from '../../data';
import { designTokens } from '../../styles/tokens';
import { ServicesGrid } from './ServicesGrid';

export function ServicesSection() {
  const { featureFlags, services } = clientConfig;

  if (!featureFlags.services) {
    return null;
  }

  return (
    <Section ariaLabel="Servicios" id="servicios" spacing="lg">
      <div style={{ display: 'grid', gap: designTokens.spacing.lg }}>
        <SectionTitle
          as="h2"
          eyebrow="Lo que hacemos"
          title="Nuestros servicios"
          subtitle="Soluciones configurables para cada etapa de tu proyecto industrial."
        />
        <ServicesGrid services={services} />
      </div>
    </Section>
  );
}
