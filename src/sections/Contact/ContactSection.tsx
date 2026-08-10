import { Section } from '../../components/layout';
import { SectionTitle } from '../../components/ui';
import { clientConfig } from '../../data';
import { designTokens } from '../../styles/tokens';
import { ContactDetails } from './ContactDetails';
import { ContactFormPlaceholder } from './ContactFormPlaceholder';
import { ContactMap } from './ContactMap';
import { ContactMethods } from './ContactMethods';

export function ContactSection() {
  const { company, featureFlags } = clientConfig;

  return (
    <Section ariaLabel="Contacto" id="contacto" spacing="lg">
      <div style={{ display: 'grid', gap: designTokens.spacing.xl }}>
        <SectionTitle
          as="h2"
          eyebrow="Estamos listos para conversar"
          title="Contacto"
          subtitle="Nuestro equipo está listo para conectar con tu equipo y futuras integraciones comerciales."
        />

        <div className="contact-grid" style={{ display: 'grid', gap: designTokens.spacing.lg }}>
          <div>
            <ContactDetails company={company} />
          </div>
          <div>
            <ContactMethods company={company} showSocialLinks={featureFlags.socialLinks} />
          </div>
          {featureFlags.maps && (
            <div className="contact-full">
              <ContactMap company={company} showMap={featureFlags.maps} />
            </div>
          )}
          {featureFlags.contactForm && (
            <div className="contact-full">
              <ContactFormPlaceholder />
            </div>
          )}
        </div>
      </div>
    </Section>
  );
}
