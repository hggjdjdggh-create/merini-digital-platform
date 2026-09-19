import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { ReactNode } from 'react';
import { siteConfig, isLocale, type Locale } from '@/config/site';
import { localizedMetadata } from '@/lib/seo/metadata';
import { getStructuredData } from '@/lib/seo/structured-data';
import { JsonLd } from '@/components/seo/JsonLd';
import './globals.css';
import en from '@/i18n/dictionaries/en.json';
import fr from '@/i18n/dictionaries/fr.json';
import ar from '@/i18n/dictionaries/ar.json';
import es from '@/i18n/dictionaries/es.json';

const dictionaries = { en, fr, ar, es };
export function getDictionary(locale: Locale) { return dictionaries[locale]; }
export async function generateStaticParams() { return siteConfig.locales.map((locale) => ({ locale })); }
export async function generateMetadata({ params }: { params: { locale: string } }) {
  const locale = isLocale(params.locale) ? params.locale : 'en';
  return localizedMetadata(locale, getDictionary(locale).home.eyebrow, getDictionary(locale).home.text);
}
export default function LocaleLayout({ children, params }: { children: ReactNode; params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale; const dict = getDictionary(locale); const rtl = locale === 'ar';
  const links = [['services', dict.nav.services], ['work', dict.nav.work], ['process', dict.nav.process], ['pricing', dict.nav.pricing], ['about', dict.nav.about], ['faq', dict.nav.faq], ['contact', dict.nav.contact], ['audit', dict.nav.audit]];
  return <html lang={locale} dir={rtl ? 'rtl' : 'ltr'}><body><JsonLd data={getStructuredData()} /><header className="border-b border-black/10 bg-[#f8f7f3]/95"><nav className="mx-auto flex max-w-6xl flex-wrap items-center gap-5 px-6 py-5" aria-label="Main navigation"><Link href={`/${locale}`} className="mr-auto text-lg font-bold tracking-[.12em]">MERINI DIGITAL</Link>{links.map(([href, label]) => <Link key={href} href={`/${locale}/${href}`} className="text-sm text-black/70 hover:text-[#b85c3b]">{label}</Link>)}<span className="flex gap-2 text-xs font-semibold"><Link href="/en">EN</Link><Link href="/fr">FR</Link><Link href="/ar">العربية</Link><Link href="/es">ES</Link></span></nav></header>{children}<footer className="border-t border-black/10 px-6 py-10"><div className="mx-auto max-w-6xl text-sm text-black/60"><strong className="text-[#18211f]">MERINI DIGITAL</strong><p className="mt-2">{siteConfig.description}</p></div></footer></body></html>;
}
