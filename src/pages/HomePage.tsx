import { Footer, PageWrapper } from '../components/layout';
import { Navbar } from '../components/navigation';
import { clientConfig } from '../data';
import { HeroSection } from '../sections/Hero';
import { AboutSection } from '../sections/About';
import { ServicesSection } from '../sections/Services';
import { IndustriesSection } from '../sections/Industries';
import { ProjectsSection } from '../sections/Projects';
import { BrandsGallerySection } from '../sections/BrandsGallery';
import { DifferentiatorsSection } from '../sections/Differentiators';
import { ContactSection } from '../sections/Contact';
import { WhatsAppButton } from '../components/ui';

// Composición mínima de la página de inicio para preparar la evolución hacia secciones del MVP.
export function HomePage() {
  return (
    <PageWrapper>
      <Navbar />

      <HeroSection />

      <AboutSection />

      <ServicesSection />

      <IndustriesSection />

      <ProjectsSection />

      {clientConfig.featureFlags.gallery ? <BrandsGallerySection /> : null}

      <DifferentiatorsSection />

      <ContactSection />

      <Footer />

      <WhatsAppButton />
    </PageWrapper>
  );
}
