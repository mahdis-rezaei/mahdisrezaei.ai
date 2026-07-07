import type { MetadataRoute } from "next";
import { site } from "@/content/site";

/** Allow all crawlers and point them at the sitemap. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${site.seo.url}/sitemap.xml`,
    host: site.seo.url,
  };
}
