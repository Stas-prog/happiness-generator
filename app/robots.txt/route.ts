export function GET() {
  const body = `User-agent: *\nAllow: /\nSitemap: ${process.env.NEXT_PUBLIC_DOMAIN}/sitemap.xml`;
  return new Response(body, { headers: { "content-type": "text/plain" } });
}
