import { Section } from '../../components/layout';
import { clientConfig } from '../../data';
import { designTokens } from '../../styles/tokens';
import { HeroContent } from './HeroContent';
import { HeroVisual } from './HeroVisual';

export function HeroSection() {
  return (
    <Section ariaLabel="Hero" id="inicio" spacing="lg">
      <div
        className="hero-grid"
        style={{
          display: 'grid',
          gap: designTokens.spacing.lg,
          alignItems: 'center',
        }}
      >
        <HeroContent company={clientConfig.company} />
        <HeroVisual company={clientConfig.company} />
      </div>
    </Section>
  );
}