import type { StaticImageData } from "next/image";

/**
 * Career photos as static imports, keyed by the ExperienceItem.image value in
 * site.ts. Populated once job photos are uploaded to public/career/ — until
 * then the Career tab shows a monogram placeholder per role.
 *
 * Example once photos exist:
 *   import meta from "../../public/career/meta.jpg";
 *   export const careerImages = { meta };
 */
export const careerImages: Record<string, StaticImageData> = {};
