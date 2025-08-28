import { getMessages } from "../../lib/messages";
import Clock from "../../components/Clock";
import Oracle from "../../components/Oracle";

export default async function Page({ params }: { params: { locale: string } }) {
  const { locale, messages } = await getMessages(params.locale);

  return (
    <div className="space-y-8">
      {/* Заголовок + спінер-лого зліва */}
      <div className="flex items-center gap-3">
        <div className="logo-spinner" aria-hidden />
        <div>
          <h1 className="text-2xl sm:text-3xl font-semibold">
            {messages.app.title}
          </h1>
          <p className="text-slate-300 text-sm sm:text-base">{messages.app.subtitle}</p>
        </div>
      </div>

      {/* Бути чи не бути */}
      <div className="text-amber-300/90 font-medium">
        {messages.app.toBeNotToBe}
      </div>

      {/* Годинник + Оракул */}
      <section className="grid sm:grid-cols-2 gap-8 items-start">
        <Clock
          locale={locale}
          lines={[
            messages.clock.line1,
            messages.clock.line2,
            messages.clock.line3,
            messages.clock.line4
          ]}
        />
        <Oracle
          locale={locale}
          strings={messages.oracle}
        />
      </section>
    </div>
  );
}
