import DonateButton from "components/DonateButton";

const socials = [
  { name: 'Instagram', href: 'https://instagram.com/vital._1973', icon: '📸' },
  { name: 'Facebook',  href: 'https://facebook.com/vitalij.skubcenko',  icon: '📘' },
  { name: 'TikTok',    href: 'https://tiktok.com/@user7345086630888',  icon: '🎵' },
  { name: 'X (Twitter)', href: 'https://x.com/SkubaVital777',      icon: '🕊️' },
];

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10 py-8 text-sm">
      <div className="container mx-auto px-4 flex flex-col gap-4 text-center items-center sm:flex-row sm:items-center sm:justify-between">
        <p className="opacity-70">
          З любов’ю <span aria-hidden>❤️</span> і світлом
          <span aria-hidden>⭐</span> · &nbsp;
          <a href="https://dim-svitla-love-dobra.vercel.app" target="_blank" rel="me noopener noreferrer">Дім Світла</a>
        </p>
       <div className="flex-col flex-wrap sm:flex-row  gap-3">
          <DonateButton>Підтримати (PayPal)</DonateButton>
          {process.env.NEXT_PUBLIC_SKRILL_URL && (
            <DonateButton variant="ghost" href={process.env.NEXT_PUBLIC_SKRILL_URL}>
              Підтримати (Skrill)
            </DonateButton>
          )}
        </div>
        <nav className="flex gap-4">
          {socials.map(s => (
            <a key={s.name} href={s.href} target="_blank" rel="me noopener noreferrer"
               className="opacity-80 hover:opacity-100 transition">
              <span aria-hidden>{s.icon}</span> <span className="sr-only">{s.name}</span>
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
