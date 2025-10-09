import type { MetadataRoute } from "next";
const BASE = (process.env.NEXT_PUBLIC_SITE_URL || "https://happiness-generator.vercel.app").replace(/\/+$/, "");

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: [
      "https://happiness-generator.vercel.app/sitemap.xml",
      `${BASE}/sitemap.xml`,
      '/sitemap.xml',
    ],
    host: BASE,
  };
}
