'use client';

type Props = {
  variant?: 'primary' | 'ghost';
  children?: React.ReactNode;
  href?: string;
};

export default function DonateButton({ variant = 'primary', children, href }: Props) {
  const url = href || process.env.NEXT_PUBLIC_PAYPAL_URL || '#';
  const base =
    'inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 transition';
  const styles =
    variant === 'primary'
      ? `${base} bg-amber-500 hover:bg-amber-600 text-black focus:ring-amber-400`
      : `${base} bg-transparent hover:bg-white/10 text-white border border-white/20`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={styles}
    >
      {children ?? 'Donate'}
      <span aria-hidden>❤️</span>
    </a>
  );
}
