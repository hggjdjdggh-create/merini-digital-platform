import { siteConfig } from '@/config/site';
export function getStructuredData() { return [
  { '@context': 'https://schema.org', '@type': 'Organization', name: siteConfig.name, url: siteConfig.url },
  { '@context': 'https://schema.org', '@type': 'ProfessionalService', name: siteConfig.name, url: siteConfig.url, description: siteConfig.description, areaServed: ['Morocco', 'Worldwide'], serviceType: ['Web Design', 'Website Development', 'Technical SEO', 'Local SEO', 'Multilingual Websites'] },
  { '@context': 'https://schema.org', '@type': 'WebSite', name: siteConfig.name, url: siteConfig.url },
]; }
