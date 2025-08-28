export type Locale = 'uk' | 'en' | 'de';

const FALLBACK: Locale = 'uk';
export const SUPPORTED: Locale[] = ['uk', 'en', 'de'];

export async function getMessages(locale: string) {
  const lc = (SUPPORTED.includes(locale as Locale) ? locale : FALLBACK) as Locale;
  // динамічно підтягуємо JSON (без next-intl)
  const mod = await import(`../messages/${lc}.json`);
  return { locale: lc, messages: mod.default ?? mod };
}
