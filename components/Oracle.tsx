"use client";

import { useState } from "react";

type OracleStrings = {
  title: string;
  hintTitle: string;
  start: string;
  reset: string;
  share: string;
  shareCopy: string;
  shareCopied: string;
  donate: string;
  hint: string;
  answer: { yes: string; no: string; wait: string };
};

export default function Oracle({
  currentLocale,
  locale,
  strings
}: {
  locale: string;
  strings: OracleStrings;
  currentLocale: string
}) {
  const [state, setState] = useState<"idle" | "thinking" | "done">("idle");
  const [result, setResult] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  function start() {
    setState("thinking");
    setResult(null);
    setCopied(false);

    // невеличка пауза, щоб "подих" був відчутний
    setTimeout(() => {
      const r = Math.random();
      const pick =
        r < 0.4 ? strings.answer.yes : r < 0.7 ? strings.answer.wait : strings.answer.no;
      setResult(pick);
      setState("done");
    }, 1600);
  }

  function reset() {
    setState("idle");
    setResult(null);
    setCopied(false);
  }

  async function copyLink() {
    const url = typeof window !== "undefined" ? window.location.href : "";
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg text-green-600 font-semibold">{strings.title}</h2>
        {/* Кнопка донату*/}
        <a
          href={`/${currentLocale}/donate`} target="_blank" rel="noreferrer"
          className="text-amber-300 hover:text-amber-200 text-sm"
        >
          {strings.donate}
        </a>
      </div>

      {/* Дихаюче коло */}
      <div className="grid place-items-center py-6">
        <div
          className={`oracle-breath ${state === "thinking" ? "breathing" : ""} ${
            state === "done" ? "lit" : ""
          }`}
          aria-label="oracle-circle"
        >
          <span className="oracle-dot" />
        </div>
      </div>

      {/* Відповідь */}
      <div className="min-h-[2.25rem] text-center text-xl font-semibold">
        {result ?? ""}
      </div>

      {/* Кнопки */}
      <div className="mt-6 flex flex-wrap gap-2 justify-center">
        {state !== "thinking" && (
          <button
            onClick={start}
            className="px-4 py-2 rounded bg-emerald-400 text-black hover:brightness-95"
          >
            {strings.start}
          </button>
        )}
        {state !== "idle" && (
          <button
            onClick={reset}
            className="px-4 py-2 rounded border border-slate-700 text-slate-200 hover:bg-slate-800"
          >
            {strings.reset}
          </button>
        )}
        <button
          onClick={copyLink}
          className="px-4 py-2 rounded border border-slate-700 text-slate-200 hover:bg-slate-800"
          title={strings.shareCopy}
        >
          {copied ? strings.shareCopied : strings.share}
        </button>
      </div>

      {/* Підказка */}
      <div className="mt-6 text-sm text-slate-300">
        <div className="mb-1 flex items-center justify-between gap-2">
           <div className="font-semibold text-red-400 mb-1">{strings.hintTitle}</div>
              <button className="bg-blue-600 px-2 py-1 rounded text-black hover:bg-blue-400">
                  <a href={`/${currentLocale}/donate`} target="_blank" rel="noreferrer" 
                  className="text-red-600 hover:text-red-400 text-sm">
                   Donat
                  </a>
              </button>
        </div>
        <p className="text-gray-400">{strings.hint}</p>
      </div>
    </div>
  );
}
