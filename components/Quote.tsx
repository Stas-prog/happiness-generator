"use client";

import { useEffect, useState } from "react";

export default function Quote() {
  const [q, setQ] = useState<string>("");

  useEffect(() => {
    (async () => {
      const mod = await import("../messages/quotes.json");
      const arr = (mod as any).quotes as string[];
      setQ(arr[Math.floor(Math.random() * arr.length)]);
    })();
  }, []);

  if (!q) return null;
  return (
    <div className="mt-6 text-center text-slate-300 italic">“{q}”</div>
  );
}

