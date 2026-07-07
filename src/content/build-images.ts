import type { StaticImageData } from "next/image";
import yadegar from "../../public/build/yadegar.png";

/**
 * App icons for the Building projects, as static imports, keyed by the
 * BuildApp.iconImage value in building.ts. Apps without one fall back to a
 * lucide glyph.
 */
export const buildImages: Record<string, StaticImageData> = {
  yadegar,
};
