import type {MetadataRoute} from 'next';

const BASE = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
const LOCALES = ['uk','en','de'] as const;

// Додай тут шляхів більше за потреби
const PAGES = ['', '/about', '/donate'];

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



export function GET() {
  // const base = process.env.NEXT_PUBLIC_DOMAIN || "http://localhost:3000";
  const urls = ["uk","en","de"].map(l => `${BASE}/${l}`);
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls.map(u => `<url><loc>${u}</loc></url>`).join("")}
  </urlset>`;
  return new Response(xml, { headers: { "content-type": "application/xml" } });
}
