import { Suspense } from 'react';
import Oracle from '../../components/Oracle';
import Clock from '../../components/Clock';

export default function Page({ params }: { params: { locale: string } }) {
  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Hero */}
      <section className="text-center space-y-2 sm:space-y-3">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
          Генератор Щастя
        </h1>
        <p className="mx-auto max-w-2xl text-slate-300 text-sm sm:text-base">
          Коли варіанти рівні — довірся жеребу: їхати чи зачекати, вступати чи змінити план.
        </p>
      </section>

      {/* Main grid */}
      <section
        className="
          grid grid-cols-1 gap-6 sm:gap-8
          md:grid-cols-2 md:items-start
        "
      >
        {/* Clock зверху на мобілці, ліворуч на md+ */}
        <div className="order-1 md:order-none">
          <div className="rounded-2xl border border-slate-800/60 bg-slate-900/40 p-4 sm:p-5 md:p-6">
            <Suspense fallback={<div className="h-40 animate-pulse rounded-xl bg-slate-800/40" />}>
              <Clock />
            </Suspense>
          </div>
        </div>

        {/* Oracle — розтягується ідеально на мобілці */}
        <div className="order-2">
          <div className="rounded-2xl border border-slate-800/60 bg-slate-900/40 p-4 sm:p-5 md:p-6">
            <Oracle />
          </div>
        </div>
      </section>
    </div>
  );
}
