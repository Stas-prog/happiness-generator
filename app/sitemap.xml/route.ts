export function GET() {
  const base = process.env.NEXT_PUBLIC_DOMAIN || "http://localhost:3000";
  const urls = ["uk","en","de"].map(l => `${base}/${l}`);
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls.map(u => `<url><loc>${u}</loc></url>`).join("")}
  </urlset>`;
  return new Response(xml, { headers: { "content-type": "application/xml" } });
}
