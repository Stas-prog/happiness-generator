"use client";
import { useMemo, useState } from "react";
import quotes from "../messages/quotes.json"; // шлях під свій alias

type Locale = "uk" | "en" | "de";

export default function Quotes({ locale = "uk" as Locale }) {
  const list =
    (quotes as { [key in Locale]: { text: string; author: string }[] })[locale] ?? [];
  const [idx, setIdx] = useState<number>(() => Math.floor(Math.random() * list.length));

  const q = useMemo(() => list[idx], [list, idx]);

  const pick = () => setIdx(Math.floor(Math.random() * list.length));

  if (!list.length) return null;

  return (
     <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800">
    <div className="flex flex-col items-center gap-4">
      <button
        onClick={pick}
        className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full transition"
      >
        {locale === "uk" ? "Цитата дня" : locale === "de" ? "Zitat des Tages" : "Quote of the Day"}
      </button>
      <blockquote className="max-w-xl text-lg italic text-center">
        “{q.text}”
        <span className="block mt-2 font-semibold">— {q.author}</span>
      </blockquote>
    </div>
    </div>
  );
}
