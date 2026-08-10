import { Section } from '../../components/layout';
import { SectionTitle } from '../../components/ui';
import { clientConfig } from '../../data';
import { designTokens } from '../../styles/tokens';
import { ProjectsGrid } from './ProjectsGrid';

export function ProjectsSection() {
  const { featureFlags, projects } = clientConfig;

  if (!featureFlags.projects) {
    return null;
  }

  return (
    <Section ariaLabel="Proyectos" id="proyectos" spacing="lg">
      <div style={{ display: 'grid', gap: designTokens.spacing.lg }}>
        <SectionTitle
          as="h2"
          eyebrow="Nuestro portafolio"
          title="Proyectos"
          subtitle="Experiencia real en implementación de soluciones en la industria energética."
        />
        <ProjectsGrid projects={projects} />
      </div>
    </Section>
  );
}
