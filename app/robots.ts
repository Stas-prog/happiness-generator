import type { MetadataRoute } from "next";
const BASE = (process.env.NEXT_PUBLIC_SITE_URL || "https://happiness-generator.vercel.app").replace(/\/+$/, "") || "https://happiness-generator.vercel.app/sitemap.xml";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: [
      "https://happiness-generator.vercel.app/sitemap.xml",
      `${BASE}/sitemap.xml`,
    ],
    host: BASE,
  };
}
