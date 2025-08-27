'use client';

import { useEffect, useState } from 'react';

export default function Clock() {
  const [now, setNow] = useState<Date>(new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const hh = now.getHours().toString().padStart(2, '0');
  const mm = now.getMinutes().toString().padStart(2, '0');
  const ss = now.getSeconds().toString().padStart(2, '0');

  return (
    <div className="flex flex-col items-center text-center gap-3">
      <div className="text-sm uppercase tracking-widest text-slate-400">Час</div>
      <div className="text-4xl sm:text-5xl md:text-6xl font-extrabold tabular-nums">
        {hh}:{mm}
        <span className="text-slate-400">:{ss}</span>
      </div>

      {/* колесо часу */}
      <div className="mt-4 sm:mt-6">
        <div className="relative h-28 w-28 sm:h-36 sm:w-36">
          <div className="absolute inset-0 rounded-full border-4 border-amber-400/50 animate-spin-slow" />
          <div className="absolute inset-3 rounded-full border-4 border-amber-300/60 animate-spin" />
          <div className="absolute inset-6 rounded-full bg-gradient-to-b from-amber-400/40 to-amber-600/30 blur-[1px]" />
        </div>
      </div>
    </div>
  );
}
