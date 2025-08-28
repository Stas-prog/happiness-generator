// app/[locale]/layout.tsx
import type { Locale } from "../../lib/messages";
import { SUPPORTED } from "../../lib/messages";
import Navbar from "../../components/Navbar";

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
        <footer className="border-t border-slate-800 mt-12">
          <div className="max-w-5xl mx-auto px-4 py-6 text-sm text-slate-400 flex items-center gap-2">
            <span>★</span>
            <span>♥</span>
            <span className="ml-2">© {new Date().getFullYear()}</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
