import { Button, SectionTitle } from '../../components/ui';
import { theme } from '../../data/theme';
import { designTokens } from '../../styles/tokens';

export function ContactFormPlaceholder() {
  return (
    <section aria-label="Formulario de contacto temporal" style={{ display: 'grid', gap: designTokens.spacing.md }}>
      <SectionTitle as="h3" eyebrow="Próximamente" title="Formulario configurable" subtitle="Este bloque se integrará con servicios estáticos como Formspree o Netlify Forms en una siguiente iteración." />
      <div
        style={{
          border: `1px dashed ${theme.borderColor}`,
          borderRadius: designTokens.radius.md,
          padding: designTokens.spacing.lg,
          color: theme.textSecondaryColor,
          backgroundColor: theme.secondaryColor,
        }}
      >
        <p style={{ margin: 0, lineHeight: 1.6 }}>
          El formulario no envía datos por ahora. Su propósito es preparar el componente para integración posterior sin backend propio.
        </p>
        <Button variant="ghost" size="sm" style={{ marginTop: designTokens.spacing.md }} ariaLabel="Formulario de contacto temporal">
          Contacto futuro
        </Button>
      </div>
    </section>
  );
}
