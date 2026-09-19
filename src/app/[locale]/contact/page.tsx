import { getDictionary } from '../layout'; import { PageShell } from '@/components/seo/JsonLd';
export default function Contact({ params }: { params: { locale: 'en'|'fr'|'ar'|'es' } }) { const d=getDictionary(params.locale); return <PageShell><h1 className="max-w-3xl text-5xl font-bold">{d.contact.title}</h1><p className="mt-7 max-w-2xl text-xl text-black/65">{d.contact.text}</p></PageShell>; }
