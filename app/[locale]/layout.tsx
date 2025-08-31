// app/[locale]/layout.tsx
import type { Locale } from "../../lib/messages";
import { SUPPORTED } from "../../lib/messages";
import Navbar from "../../components/Navbar";
import Footer from "components/Footer";
import type {Metadata} from 'next';

const LOCALES = ['uk','en','de'] as const;
const TITLES = {
  uk: 'Генератор Щастя — бути чи не бути',
  en: 'Happiness Generator — to be or not to be',
  de: 'Glücksgenerator — sein oder nicht sein'
};
const DESCR = {
  uk: 'Коли варіанти рівні — довірся жеребу: йти чи зачекати. Підказки, цитати, світло, орел і решка, оракул.',
  en: 'When choices are equal, trust a fair toss: go or wait. Prompts, quotes, light, heads or tails, oracle.',
  de: 'Wenn Optionen gleich sind: Los entscheide — gehen oder warten. Hinweise, Zitate, Licht, Kopf oder Zahl, orakel.'
};

const BASE = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export async function generateMetadata(
  {params}: {params: {locale: string}}
): Promise<Metadata> {
  const locale = (['uk','en','de'].includes(params.locale) ? params.locale : 'uk') as 'uk'|'en'|'de';

  // hreflang
  const languages = {
    uk: `${BASE}/uk`,
    en: `${BASE}/en`,
    de: `${BASE}/de`,
    'x-default': `${BASE}/uk`
  };

  const canonical = `${BASE}/${locale}`;

  return {
    title: TITLES[locale],
    description: DESCR[locale],
    metadataBase: new URL(BASE),
    alternates: { canonical, languages },
    openGraph: {
      type: 'website',
      url: canonical,
      title: TITLES[locale],
      description: DESCR[locale],
      siteName: 'Happiness Generator',
      images: [
        { url: `/og/${locale}.png`, width: 1200, height: 630, alt: TITLES[locale] }
      ],
      locale,
      alternateLocale: ['uk','en','de'].filter(l => l !== locale)
    },
    twitter: {
      card: 'summary_large_image',
      title: TITLES[locale],
      description: DESCR[locale],
      images: [`/og/${locale}.png`]
    }
  };
}


export default function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const locale = (SUPPORTED.includes(params.locale as Locale) ? params.locale : "uk") as Locale;

  return (
    <html lang={locale}>
      <body className="min-h-screen bg-slate-950 text-slate-50">
        <header className="border-b border-slate-800">
          <div className="max-w-5xl mx-auto px-4 py-3">
            <Navbar currentLocale={locale} />
          </div>
        </header>
        <main className="max-w-5xl mx-auto px-4 py-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
