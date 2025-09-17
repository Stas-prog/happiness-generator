import { NextResponse } from "next/server";

const BASE =
  (process.env.NEXT_PUBLIC_SITE_URL || "https://your-domain.vercel.app").replace(/\/+$/, "");

const LOCALES = ["uk", "en", "de"] as const;
const PAGES = ["", "/donate", "/about"] as const;

export async function GET() {
  const now = new Date().toISOString();
  const urls: string[] = [];

  for (const l of LOCALES) {
    for (const p of PAGES) {
      urls.push(`${BASE}/${l}${p}`);
    }
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${u}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>daily</changefreq>
    <priority>${u.endsWith(`/${LOCALES[0]}`) || u.endsWith(`/${LOCALES[1]}`) || u.endsWith(`/${LOCALES[2]}`) ? "1.0" : "0.7"}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      // На час діагностики вимкнемо кеш
      "Cache-Control": "no-store, max-age=0",
    },
  });
}
