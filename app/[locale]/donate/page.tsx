import { getMessages } from "../../../lib/messages";
import DonateButton from "components/DonateButton";

export default async function DonatePage({ params }: { params: { locale: string } }) {
  const { locale, messages } = await getMessages(params.locale);

  return (
    <div className="max-w-xl mx-auto space-y-6">
      <h1 className="text-2xl font-semibold">{messages.app.title} — {messages.oracle.donate}</h1>
      <p className="text-slate-300">
        {messages.oracle.hint}
      </p>

      <div className="flex flex-wrap gap-3">
        {/* <form action="/api/donate/checkout" method="POST" onSubmit={(e) => {
          e.preventDefault();
          fetch("/api/donate/checkout", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ locale })
          }).then(r => r.json()).then(d => { if (d.url) location.href = d.url; });
        }}>
          <button className="px-4 py-2 rounded bg-amber-400 text-black hover:brightness-95">Stripe</button>
        </form> */}

        <a href="https://www.paypal.com/paypalme/YourName/5" target="_blank" rel="noreferrer"
           className="px-4 py-2 rounded border border-slate-700 hover:bg-slate-800">PayPal</a>

        <a href="https://pay.skrill.com/?amount=5&currency=USD&pay_to_email=you@mail.com" target="_blank" rel="noreferrer"
           className="px-4 py-2 rounded border border-slate-700 hover:bg-slate-800">Skrill</a>
      </div>
       <div className="mt-4 flex flex-wrap gap-3">
          <DonateButton>Підтримати (PayPal)</DonateButton>
          {process.env.NEXT_PUBLIC_SKRILL_URL && (
            <DonateButton variant="ghost" href={process.env.NEXT_PUBLIC_SKRILL_URL}>
              Підтримати (Skrill)
            </DonateButton>
          )}
        </div>
    </div>
  );
}
