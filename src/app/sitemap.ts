import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { workStudies } from "@/content/work-studies";
import { caseStudies } from "@/content/building";

/** All indexable routes, so search engines discover every page. */
export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.seo.url;
  const paths = [
    "",
    "/about",
    "/work",
    "/building",
    "/contact",
    ...Object.keys(workStudies).map((slug) => `/work/${slug}`),
    ...Object.keys(caseStudies).map((slug) => `/building/${slug}`),
  ];
  return paths.map((path) => ({
    url: `${base}${path}`,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
