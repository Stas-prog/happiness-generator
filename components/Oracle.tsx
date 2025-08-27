'use client';

import { useMemo, useRef, useState } from 'react';

const ANSWERS = ['Йди!', 'Не йди', 'Зачекай'] as const;

export default function Oracle() {
  const [spinning, setSpinning] = useState(false);
  const [answer, setAnswer] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const ringClass = useMemo(
    () =>
      spinning
        ? 'animate-[spin_1.1s_linear_infinite]'
        : 'animate-none',
    [spinning]
  );

  function start() {
    if (spinning) return;
    setAnswer(null);
    setSpinning(true);

    // короткий «вискок» відповіді
    timerRef.current = setTimeout(() => {
      const pick = ANSWERS[Math.floor(Math.random() * ANSWERS.length)];
      setAnswer(pick);
      setSpinning(false);
    }, 900);
  }

  function reset() {
    setAnswer(null);
    setSpinning(false);
    if (timerRef.current) clearTimeout(timerRef.current);
  }

  async function copyShare() {
    const text = `Оракул підказав: ${answer ?? '—'}`;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {
      // no-op
    }
  }

  return (
    <div className="flex flex-col items-center gap-4 sm:gap-5">
      <div className="text-sm uppercase tracking-widest text-slate-400">Оракул вибору</div>

      {/* гіпно-коло */}
      <div className="relative h-40 w-40 sm:h-48 sm:w-48 md:h-56 md:w-56">
        <div className={`absolute inset-0 rounded-full border-4 border-amber-400/70 ${ringClass}`} />
        <div className={`absolute inset-4 rounded-full border-4 border-amber-300/70 ${ringClass}`} />
        <div className="absolute inset-8 rounded-full bg-gradient-to-br from-amber-300/50 to-amber-600/40" />
        {/* відповідь на мить */}
        {answer && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xl sm:text-2xl md:text-3xl font-bold drop-shadow">
              {answer}
            </span>
          </div>
        )}
      </div>

      {/* кнопки */}
      <div className="grid w-full grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3">
        <button
          onClick={start}
          disabled={spinning}
          className="h-11 rounded-lg bg-emerald-400 text-black font-semibold hover:brightness-95 active:translate-y-px disabled:opacity-60"
        >
          Старт
        </button>
        <button
          onClick={reset}
          className="h-11 rounded-lg border border-slate-700 text-slate-200 hover:bg-slate-800/60"
        >
          Скинути
        </button>
        <button
          onClick={copyShare}
          className="h-11 rounded-lg border border-amber-400/60 text-amber-300 hover:bg-amber-500/10"
          title={copied ? 'Скопійовано!' : 'Скопіювати'}
        >
          {copied ? 'Скопійовано!' : 'Скопіювати'}
        </button>
      </div>

      <p className="max-w-prose text-center text-slate-300 text-sm sm:text-base">
        Дай Всевишньому простір спрямувати твої кроки. Донат, молитва, добрі наміри — і відповідь прийде.
      </p>
    </div>
  );
}
