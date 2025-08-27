import Link from 'next/link';

export default function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = params;

  return (
    <html lang={locale}>
      <body className="min-h-screen bg-slate-950 text-slate-50">
        {/* Header */}
        <header className="sticky top-0 z-50 border-b border-slate-800/70 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60">
          <div className="mx-auto flex w-full max-w-6xl items-center gap-3 px-3 sm:px-4 md:px-6 lg:px-8 py-3">
            <Link href={`/${locale}`} className="shrink-0">
              <span className="text-lg sm:text-xl font-semibold">
                Генератор Щастя
              </span>
            </Link>

            {/* spacer */}
            <div className="ms-auto" />

            {/* Lang switch (приклад; підстав свої посилання якщо інші) */}
            <nav className="flex items-center gap-2">
              {['uk','en','de'].map(code => (
                <Link
                  key={code}
                  href={`/${code}`}
                  className={`px-2.5 py-1.5 rounded-md text-sm border transition
                    ${code === locale
                      ? 'border-amber-300 text-amber-300'
                      : 'border-slate-700 text-slate-300 hover:bg-slate-800/60'}`}
                >
                  {code.toUpperCase()}
                </Link>
              ))}
            </nav>
          </div>
        </header>

        {/* Main */}
        <main className="mx-auto w-full max-w-6xl px-3 sm:px-4 md:px-6 lg:px-8 py-6 sm:py-8 md:py-10">
          {children}
        </main>

        {/* Footer */}
        <footer className="border-t border-slate-800/70">
          <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-3 sm:px-4 md:px-6 lg:px-8 py-4 text-xs sm:text-sm text-slate-400">
            <span>© {new Date().getFullYear()} Дім Світла</span>
            <span className="text-slate-500">З любов’ю і світлом</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
