'use client';

import {QRCodeCanvas}  from "qrcode.react";


type DonateStrings = {
    title: string;
    subtitle: string;
    otherText: string;
    thankYou: string;
};

export default function Donate({  
  currentLocale,
  locale,
  strings
}: {
  locale: string;
  strings: DonateStrings;
  currentLocale: string
}) {
const paypalUrl = process.env.NEXT_PUBLIC_PAYPAL_URL || "https://www.paypal.com/donate/?business=4D2PHEADNNYNC&currency_code=USD";
const skrillUrl = process.env.NEXT_PUBLIC_SKRILL_URL || "https://skrill.me/rq/Vitalii/10/EUR?key=rt1-V4JM-QydKrTiJEpHykG8Tc8" ;


  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12 text-center space-y-8">
      <h1 className="text-3xl sm:text-4xl font-bold">{strings.title} 💛</h1>
      <p className="max-w-xl opacity-80">
       {strings.subtitle}
      </p>
      <div className="grid sm:grid-cols-2 gap-10">
        {/* PayPal */}
        <div className="flex flex-col items-center gap-4">
          <QRCodeCanvas value={paypalUrl} size={128} />
          <a
            href={paypalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full bg-amber-500 hover:bg-amber-600 text-black font-semibold transition"
          >
            Donate via PayPal
          </a>
        </div>

        {/* Skrill */}
        <div className="flex flex-col items-center gap-4">
          <QRCodeCanvas value={skrillUrl} size={128} />
          <a
            href={skrillUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full bg-purple-600 hover:bg-purple-700 text-white font-semibold transition"
          >
            Donate via Skrill
          </a>
        </div>
      </div>

      <div className="max-w-md text-left space-y-2 ring-1 ring-slate-700/50 p-6 rounded-xl bg-slate-900/50 border border-slate-800">
        PrivatBank  &nbsp; Ukraina
        <div className="text-sm opacity-70 text-yellow-400">UAH <span className="text-blue-600">-  5169 3600 2791 9665</span>
        <button className="ring-1 px-1 ml-3 text-green-500 rounded-sm" onClick={ async () => {
      try {
        await navigator.clipboard.writeText('5169 3600 2791 9665');
        console.log('Код успішно скопійований!');
        alert('Код скопійований!'); 
      } catch (err) {
        console.error('Не вдалося скопіювати код: ', err);
        alert('Помилка при копіюванні коду.'); 
      }
         }}>Copy</button>
       </div>
       <div className="text-sm opacity-70 text-yellow-400">USD <span className="text-blue-600">-  5169 3600 0827 6531</span>
         <button className="ring-1 px-1 ml-3 text-green-500 rounded-sm" onClick={ async () => {
      try {
        await navigator.clipboard.writeText('5169 3600 0827 6531');
        console.log('Код успішно скопійований!');
        alert('Код скопійований!'); 
      } catch (err) {
        console.error('Не вдалося скопіювати код: ', err);
        alert('Помилка при копіюванні коду.'); 
      }
          }}>Copy</button>
       </div>
        <div className="text-sm opacity-70 text-yellow-400">EUR <span className="text-blue-600">-  4731 1856 8204 7607</span>
        <button className="ring-1 px-1 ml-3 text-green-500 rounded-sm" onClick={ async () => {
      try {
        await navigator.clipboard.writeText('4731 1856 8204 7607');
        console.log('Код успішно скопійований!');
        alert('Код скопійований!'); 
      } catch (err) {
        console.error('Не вдалося скопіювати код: ', err);
        alert('Помилка при копіюванні коду.'); 
      }
           }}>Copy</button>
       </div>
   </div>
      <p className="max-w-md text-sm opacity-70">
        {strings.otherText}
      </p>
      <p className="text-green-400 font-semibold">{strings.thankYou}❤️</p>
    </div>
  );
}
   

