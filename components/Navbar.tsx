"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const LOCALES = [
  { code: "uk", label: "UA" },
  { code: "en", label: "EN" },
  { code: "de", label: "DE" }
];

export default function Navbar({ currentLocale }: { currentLocale: string }) {
  const pathname = usePathname() || "/";
  const base = `/${currentLocale}`;

  return (
    <nav className="flex items-center gap-3">
      <Link href={base} className="text-green-700 hover:text-white">
        Home
      </Link>
      <Link href={`/${currentLocale}/donate`} className="text-green-700 hover:text-white">
        Donate
      </Link>


      <div className="ml-auto flex items-center gap-2">
        {LOCALES.map((l) => {
          const href = pathname.replace(/^\/(uk|en|de)/, `/${l.code}`);
          const active = l.code === currentLocale;
          return (
            <Link
              key={l.code}
              href={href}
              className={`px-2 py-1 rounded text-sm border transition
                ${active ? "border-amber-300 text-amber-300" : "border-slate-700 text-slate-300 hover:bg-slate-800"}`}
            >
              {l.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
