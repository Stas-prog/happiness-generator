import { NextResponse } from "next/server";

const BASE = (process.env.NEXT_PUBLIC_SITE_URL || "https://happiness-generator.vercel.app").replace(/\/+$/, "");
const LOCALES = ["uk", "en", "de"] as const;
const PAGES = ["", "/donate", "/about"] as const;

export async function GET() {
  const now = new Date().toISOString();

  // згенеруємо абсолютні URL
  const urls: string[] = [];
  for (const l of LOCALES) {
    for (const p of PAGES) urls.push(`${BASE}/${l}${p}`);
  }

  // простий, “несварливий” XML без alternates/hreflang — дружній для всіх сервісів
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url>
    <loc>${u}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>daily</changefreq>
    <priority>${/(\/uk|\/en|\/de)$/.test(u) ? "1.0" : "0.7"}</priority>
  </url>`).join("\n")}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      // на час діагностики відключимо кеш; потім можна поставити max-age=3600
      "Cache-Control": "no-store, max-age=0",
    },
  });
}
