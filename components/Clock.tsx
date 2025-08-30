"use client";

import { useEffect, useState } from "react";

export default function Clock({
  locale,
  lines
}: {
  locale: string;
  lines: string[];
}) {
  const [now, setNow] = useState<Date>(new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const time = new Intl.DateTimeFormat(locale, {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  }).format(now);

  const time2 = new Intl.DateTimeFormat(locale, {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit"
  }).format(now);

  return (
    <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800">
      {/* ЦИФРОВИЙ ЧАС поверх у центрі */}
        <div className="text-3xl text-center mb-6 font-semibold text-emerald-300 drop-shadow-sm select-none">
          {time}
        </div>
      
      {/* Два кільця + внутрішнє колесо-спінер */}
      <div className="mx-auto w-48 h-48 relative grid place-items-center">
        {/* зовнішнє кільце */}
        <div className="absolute inset-0 rounded-full border-2 border-slate-700" />
        {/* внутрішнє кільце */}
        <div className="absolute inset-6 rounded-full border border-slate-700/70" />
        {/* колесо в середині */}
        <div className="inner-wheel" aria-hidden />        
      </div>

      {/* 4 рядки під колесом */}
      <div className="mt-4 text-center text-sm text-pink-200 space-y-1">
        {lines.map((l, i) => (
          <div key={i}>{l}</div>
        ))}
      </div>
      <div className="text-3xl text-center mt-8 mb-6 font-semibold text-emerald-300 drop-shadow-sm select-none">
        {time2}
      </div>
    </div>
  );
}
