"use client";

export default function Clock({
  locale,
  lines
}: {
  locale: string;
  lines: string[];
}) {
  return (
    <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800">
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
      <div className="mt-4 text-center text-sm text-slate-300 space-y-1">
        {lines.map((l, i) => (
          <div key={i}>{l}</div>
        ))}
      </div>
    </div>
  );
}
