import type { Metadata } from 'next';
import { siteConfig, type Locale } from '@/config/site';

export function localizedMetadata(locale: Locale, title: string, description: string, path = ''): Metadata {
  const canonical = `${siteConfig.url}/${locale}${path}`;
  return {
    title: `${title} | ${siteConfig.name}`,
    description,
    alternates: { canonical, languages: Object.fromEntries(siteConfig.locales.map((item) => [item, `${siteConfig.url}/${item}${path}`])) },
    openGraph: { title: `${title} | ${siteConfig.name}`, description, url: canonical, siteName: siteConfig.name, type: 'website', locale },
    twitter: { card: 'summary_large_image', title: `${title} | ${siteConfig.name}`, description },
  };
}
