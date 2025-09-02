import type { Metadata, ResolvingMetadata } from "next";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

type Props = { children: React.ReactNode; params: { locale: "uk" | "en" | "de" } };

const SITE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";

const dict: Record<"uk" | "en" | "de", { title: string; description: string; keywords: string[] }> 
= {
  uk: {
    title: "Генератор Щастя",
    description: "Коли варіанти рівні — довірся жеребу.",
    keywords: ["генератор щастя", "вибір", "оракул", "рішення", "жереб", "орел і решка", "кинути монетку", "цитати"],
  },
  en: {
    title: "Happiness Generator",
    description: "When options are equal—trust the lot.",
    keywords: ["happiness generator", "choice", "oracle", "decision", "lot", "heads or tails", "coin flip", "quotes"],
  },
  de: {
    title: "Glücks-Generator",
    description: "Wenn Optionen gleich sind – vertraue dem Los.",
    keywords: ["glücksgenerator", "wahl", "orakel", "entscheidung", "los", "kopf oder zahl", "münzwurf", "zitate"],
  },
} as const;

export async function generateMetadata(
  { params }: { params: Props["params"] },
  _parent: ResolvingMetadata
): Promise<Metadata> {
  const { locale } = params;
  const meta = dict[locale] ?? dict.uk;

  // Абсолютні URL
  const url = `${SITE}/${locale}`;
  const ogImage = `${SITE}/og.png`;

  // hreflang альтернатива
  const languages = {
    en: `${SITE}/en`,
    uk: `${SITE}/uk`,
    de: `${SITE}/de`,
    "x-default": SITE,
  } as const;

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    alternates: {
      canonical: url,
      languages,
    },
    openGraph: {
      type: "website",
      url,
      siteName: meta.title,
      title: meta.title,
      description: meta.description,
      images: [{ url: ogImage, width: 1200, height: 630, alt: meta.title }],
      locale,
      alternateLocale: ["uk", "en", "de"].filter(l => l !== locale),
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
    },
    // Додаткові мікророзмітки (JSON-LD)
    other: {
      // Обережно: нижче вставимо в <head> через script у компоненті Layout
    },
  };
}

export default function LocaleLayout({ children, params }: Props) {
  const { locale } = params;
  const meta = dict[locale] ?? dict.uk;
  const url = `${SITE}/${locale}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: meta.title,
    url,
    inLanguage: locale,
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE}/${locale}?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang={locale}>
      <head>
        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-slate-950 text-slate-50 antialiased">
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
