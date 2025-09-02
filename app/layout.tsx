import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  // Базові значення - все одно будемо перевизначати в [locale]/layout.tsx
  title: "Happiness Generator",
  description: "Trust the lot when options are equal.",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const domain = process.env.NEXT_PUBLIC_SITE_URL  ?? "https://example.com";

  return (
    <html lang="uk">
      <head>
        {/* Верифікації (однакові для всіх мов) */}
        <meta name="google-site-verification" content="7P7IsqPfFXMQABIZN0T44GZolCul0Z9unEH7T4EcJIY" />
        <meta name="msvalidate.01" content="527A1635453DA8D34E75FB340CAA8F40" />

        {/* Продуктивність */}
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="preconnect" href={domain} />
        <link rel="dns-prefetch" href={domain} />
      </head>
      <body className="min-h-screen bg-slate-950 text-slate-50 antialiased">
        {children}
      </body>
    </html>
  );
}
