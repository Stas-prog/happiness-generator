'use client';

type Props = {
  variant?: 'primary' | 'ghost';
  children?: React.ReactNode;
  href?: string;
};

export default function DonateButton({ variant = 'primary', children, href }: Props) {
  const url = href || process.env.NEXT_PUBLIC_PAYPAL_URL || '#';
  const base =
    'inline-flex items-center mb-3 mr-3 gap-2 rounded-full px-5 py-2 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 transition';
  const styles =
    variant === 'primary'
      ? `${base} bg-amber-700 hover:bg-amber-800 hover:text-white text-black border focus:border-white/80 `
      : `${base} bg-green-800 hover:bg-green-900 text-yellow-300 hover:text-white border border-white/80`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={styles}
    >
      {children ?? 'Donate'}
      <span aria-hidden="true">❤️</span>
    </a>
  );
}
