export interface SocialLinks {
  linkedin: string;
  instagram: string;
  facebook: string;
}

export interface ContactDetails {
  phone: string;
  email: string;
  whatsapp: string;
  address: string;
  businessHours: string;
  googleMapsUrl: string;
}

export interface HeroCTA {
  label: string;
  href: string;
  ariaLabel: string;
}

export interface HeroStatistic {
  label: string;
  value: string;
}

export interface Differentiator {
  id: string;
  title: string;
  description: string;
  /** Reserved for future icon support */
  icon?: string;
  /** Reserved for future image support */
  image?: string;
  /** Reserved for future accessible image text */
  imageAlt?: string;
}

export interface Company {
  companyName: string;
  tagline: string;
  description: string;
  heroTitle: string;
  heroDescription: string;
  primaryCTA: HeroCTA;
  secondaryCTA: HeroCTA;
  heroImage: string;
  heroImageAlt: string;
  heroBackgroundImage?: string;
  heroVideoBackground?: string;
  heroStatistics?: HeroStatistic[];
  heroBadges?: string[];
  heroTrustIndicators?: string[];
  aboutTitle: string;
  aboutSubtitle: string;
  aboutDescription: string;
  mission: string;
  vision: string;
  differentiators: Differentiator[];
  /** Reserved for future corporate metrics */
  aboutMetrics?: HeroStatistic[];
  /** Reserved for future certifications list */
  aboutCertifications?: string[];
  phone: string;
  email: string;
  whatsapp: string;
  address: string;
  businessHours: string;
  googleMapsUrl: string;
  socialLinks: SocialLinks;
}

export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  detailedDescription: string;
  icon: string;
  featured: boolean;
  image?: string;
  imageAlt?: string;
  /** Reserved for future category filtering */
  category?: string;
  /** Reserved for future individual page routing */
  href?: string;
}

export interface Industry {
  id: string;
  title: string;
  shortDescription: string;
  detailedDescription: string;
  featured: boolean;
  /** Reserved for future icon support */
  icon?: string;
  /** Reserved for future image support */
  image?: string;
  /** Reserved for future accessible image text */
  imageAlt?: string;
  /** Reserved for future individual page routing */
  href?: string;
}

export interface Project {
  id: string;
  title: string;
  sector: string;
  shortDescription: string;
  detailedDescription: string;
  featured: boolean;
  /** Reserved for future image support */
  image?: string;
  /** Reserved for future accessible image text */
  imageAlt?: string;
  /** Reserved for future gallery support */
  gallery?: string[];
  /** Reserved for future tech stack display */
  technologies?: string[];
  /** Reserved for publishable client name */
  clientName?: string;
  /** Reserved for individual project page routing */
  href?: string;
}

export interface SEO {
  title: string;
  description: string;
  keywords: string[];
  favicon: string;
  canonical: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
  ogType: 'website' | 'article';
}

export interface Theme {
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  backgroundColor: string;
  textColor: string;
  textSecondaryColor: string;
  textOnDarkColor: string;
  borderColor: string;
  radius: string;
  shadow: string;
  fontFamily: string;
  fontFamilyHeading: string;
}

export interface FeatureFlags {
  about: boolean;
  services: boolean;
  industries: boolean;
  projects: boolean;
  differentiators: boolean;
  whatsapp: boolean;
  socialLinks: boolean;
  contactForm: boolean;
  maps: boolean;
}

export interface ClientConfig {
  company: Company;
  branding: Theme;
  seo: SEO;
  services: Service[];
  industries: Industry[];
  projects: Project[];
  contact: ContactDetails;
  socialLinks: SocialLinks;
  featureFlags: FeatureFlags;
}

export type NavigationFeatureKey = keyof Pick<
  FeatureFlags,
  'about' | 'services' | 'industries' | 'projects' | 'differentiators'
>;

export interface NavigationItem {
  id: string;
  label: string;
  href: string;
  featureKey?: NavigationFeatureKey;
}
