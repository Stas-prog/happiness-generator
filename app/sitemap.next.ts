import type {MetadataRoute} from 'next';

const BASE = process.env.NEXT_PUBLIC_SITE_URL || 'http://happiness-generator.vercel.app';
const LOCALES = ['uk','en','de'] as const;

// Додай тут шляхів більше за потреби
const PAGES = ['','/donate', '/about'];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];
  for (const l of LOCALES) {
    for (const p of PAGES) {
      const url = `${BASE}/${l}${p}`;
      entries.push({
        url,
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: p === '' ? 1 : 0.7,
        alternates: {
          languages: {
            uk: `${BASE}/uk${p}`,
            en: `${BASE}/en${p}`,
            de: `${BASE}/de${p}`,
            'x-default': `${BASE}/uk${p}`
          }
        }
      });
    }
  }
  return entries;
}
