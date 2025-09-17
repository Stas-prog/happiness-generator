import type { MetadataRoute } from "next";
const BASE = (process.env.NEXT_PUBLIC_SITE_URL || "https://happiness-generator.vercel.app").replace(/\/+$/, "");

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${BASE}/sitemap.xml`,
    host: BASE,
  };
}
