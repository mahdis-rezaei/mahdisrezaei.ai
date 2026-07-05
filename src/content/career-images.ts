import type { StaticImageData } from "next/image";
import meta from "../../public/career/meta.jpg";
import ring from "../../public/career/ring.jpg";
import goodrx from "../../public/career/goodrx.jpg";
import globetax from "../../public/career/globetax.jpg";
import blueapron from "../../public/career/blueapron.jpg";
import imprivata from "../../public/career/imprivata.jpg";

/**
 * Career photos as static imports (intrinsic size + blur-up placeholder),
 * keyed by the ExperienceItem.image value in site.ts.
 */
export const careerImages: Record<string, StaticImageData> = {
  meta,
  ring,
  goodrx,
  globetax,
  blueapron,
  imprivata,
};
