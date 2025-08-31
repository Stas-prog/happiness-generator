
import type {MetadataRoute} from 'next';

const BASE = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/'
    },
    sitemap: `${BASE}/sitemap.xml`
  };
}

export function GET() {
  const body = `User-agent: *\nAllow: /\nSitemap: ${BASE}/sitemap.xml`;
  return new Response(body, { headers: { "content-type": "text/plain" } });
}