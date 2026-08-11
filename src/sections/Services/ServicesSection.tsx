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
          subtitle="Ponemos nuestra experiencia al servicio de la correcta selección, configuración y aplicación de los equipos."
        />
        <ServicesGrid services={services} />
      </div>
    </Section>
  );
}
