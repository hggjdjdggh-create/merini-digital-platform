import type { ReactNode } from 'react';
export function JsonLd({ data }: { data: unknown }) { return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />; }
export function PageShell({ children }: { children: ReactNode }) { return <main className="mx-auto max-w-6xl px-6 py-20">{children}</main>; }
