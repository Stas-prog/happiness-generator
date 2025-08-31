import {NextRequest, NextResponse} from 'next/server';

const LOCALES = ['uk', 'en', 'de'] as const;
const DEFAULT = 'uk';

function pickLocale(req: NextRequest) {
  // 1) cookie має пріоритет
  const cookie = req.cookies.get('preferred-locale')?.value;
  if (cookie && LOCALES.includes(cookie as any)) return cookie;

  // 2) Accept-Language
  const header = req.headers.get('accept-language') || '';
  const langs = header.split(',').map(s => s.split(';')[0].trim().toLowerCase());
  const found = langs.find(l => LOCALES.includes(l as any) || LOCALES.includes(l.split('-')[0] as any));
  return (found?.split('-')[0]) || DEFAULT;
}

export default function middleware(req: NextRequest) {
  const {pathname} = req.nextUrl;

  // Працюємо лише на корені, не чіпаємо/_next, статичні, API тощо
  if (pathname === '/') {
    const locale = pickLocale(req);
    const url = req.nextUrl.clone();
    url.pathname = `/${locale}`;
    const res = NextResponse.redirect(url, 307);
    res.cookies.set('preferred-locale', locale, {path: '/', maxAge: 60*60*24*365});
    return res;
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/'] // тільки корінь
};
