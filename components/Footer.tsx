const socials = [
  { name: 'Instagram', href: 'https://instagram.com/your', icon: '📸' },
  { name: 'Facebook',  href: 'https://facebook.com/your',  icon: '📘' },
  { name: 'TikTok',    href: 'https://tiktok.com/@your',  icon: '🎵' },
  { name: 'X (Twitter)', href: 'https://x.com/your',      icon: '🕊️' },
];

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10 py-8 text-sm">
      <div className="container mx-auto px-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="opacity-70">
          З любов’ю <span aria-hidden>❤️</span> і світлом <span aria-hidden>⭐</span> · Дім Світла
        </p>
        <nav className="flex gap-4">
          {socials.map(s => (
            <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer"
               className="opacity-80 hover:opacity-100 transition">
              <span aria-hidden>{s.icon}</span> <span className="sr-only">{s.name}</span>
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
