import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
const locales = ['en', 'fr', 'ar', 'es'];
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (pathname.startsWith('/_next') || pathname.startsWith('/api') || /\.[^/]+$/.test(pathname)) return NextResponse.next();
  if (!locales.some((locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`))) {
    const url = request.nextUrl.clone(); url.pathname = `/en${pathname === '/' ? '' : pathname}`; return NextResponse.redirect(url);
  }
  return NextResponse.next();
}
export const config = { matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'] };
