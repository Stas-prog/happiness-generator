'use client';
import { useEffect, useMemo, useState } from 'react';
import data from '../messages/quotes.json'; // шлях під себе

export type Locale = 'uk' | 'en' | 'de';

export type QuoteEntry = {
  id: string;
  uk: { text: string; author: string };
  en: { text: string; author: string };
  de: { text: string; author: string };
};

export type QuotesJson = { quotes: QuoteEntry[] };


function indexOfDay(total: number, tzOffsetMin = 0) {
  const now = new Date();
  const utc = new Date(now.getTime() + tzOffsetMin * 60_000);
  const y = utc.getUTCFullYear();
  const m = utc.getUTCMonth();
  const d = utc.getUTCDate();
  let x = (y * 10000 + (m + 1) * 100 + d) ^ 0x9e3779b9;
  x = (x ^ (x >>> 16)) * 0x85ebca6b;
  x = (x ^ (x >>> 13)) * 0xc2b2ae35;
  x = x ^ (x >>> 16);
  return Math.abs(x) % total;
}

function resolveQuote(q: QuoteEntry, locale: Locale) {
  return (q as any)[locale] ?? (q as any)['en'];
}

export default function Quotes({ locale = 'uk' as Locale, mode = 'daily' as 'daily' | 'random' }) {
  // Transform the imported data to match the expected QuotesJson structure
  const quotes: QuoteEntry[] = useMemo(() => {
    // Assume data has shape: { quotes: [{ id, uk, en, de }] }
    return (data.quotes ?? []).map((q) => ({
      id: q.id,
      uk: q.uk,
      en: q.en,
      de: q.de,
    }));
  }, [data]);

  const initialIndex = useMemo(() => {
    if (mode === 'daily') return indexOfDay(quotes.length);
    return Math.floor(Math.random() * quotes.length);
  }, [mode, quotes.length]);

  const [idx, setIdx] = useState(initialIndex);

  useEffect(() => {
    if (mode === 'daily') {
      setIdx(indexOfDay(quotes.length));
    }
  }, [mode, quotes.length]);

  const q = quotes[idx];
  const tr = resolveQuote(q, locale);

  return (
    <div className="mx-auto max-w-2xl rounded-2xl bg-neutral-900/50 p-6 text-neutral-100 shadow-lg ring-1 ring-white/20">
      <p className='text-center font-bold text-xl text-green-700 mb-3'>{locale === 'uk' ? 'Цитата дня' : locale === 'de' ? 'Zitat des Tages' : 'Quote of the Day'}</p>
      <div className="text-lg leading-relaxed">
        <span className="block italic">“{tr.text}”</span>
        <span className="mt-3 block text-sm text-neutral-400">— {tr.author}</span>
      </div>

      <div className="mt-6 flex items-center gap-3">  
        <button
          onClick={() => setIdx((i) => (i + 1) % quotes.length)}
          className="rounded-full bg-amber-600/90 px-4 py-2 text-sm font-medium hover:bg-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-400"
        >
          {locale === 'uk' ? 'Нова цитата' : locale === 'de' ? 'Neues Zitat' : 'New quote'}
        </button>

        <span className="ml-auto text-xs text-neutral-500">
          ID: <code>{q.id}</code>
        </span>
      </div>
    </div>
  );
}
