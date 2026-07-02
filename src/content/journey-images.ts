import type { StaticImageData } from "next/image";
import iran from "../../public/journey/iran.jpg";
import india from "../../public/journey/india.jpg";
import italy from "../../public/journey/italy.jpg";
import london from "../../public/journey/london.jpg";
import newYork from "../../public/journey/new-york.jpg";
import losAngeles from "../../public/journey/los-angeles.jpg";

/**
 * Journey photos as static imports so next/image knows their intrinsic size
 * (no layout shift) and can generate a blur-up placeholder. Keyed by the
 * JourneyStop.image value in site.ts.
 */
export const journeyImages: Record<string, StaticImageData> = {
  iran,
  india,
  italy,
  london,
  "new-york": newYork,
  "los-angeles": losAngeles,
};
