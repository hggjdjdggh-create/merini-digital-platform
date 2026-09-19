export const siteConfig = {
  name: 'MERINI DIGITAL',
  url: 'https://merini-digital.com',
  description: 'MERINI DIGITAL creates clear, fast and multilingual websites for local businesses in Morocco and international clients.',
  locales: ['en', 'fr', 'ar', 'es'] as const,
  defaultLocale: 'en' as const,
  // No verified public contact details were present in the repository.
  contact: { email: '', phone: '', whatsapp: '' },
};
export type Locale = (typeof siteConfig.locales)[number];
export const isLocale = (value: string): value is Locale => siteConfig.locales.includes(value as Locale);
