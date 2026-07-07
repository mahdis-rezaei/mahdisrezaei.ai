import type { StaticImageData } from "next/image";
import stillness from "../../public/practices/stillness.jpg";
import running from "../../public/practices/running.jpg";

/**
 * Photos for the Off the clock practices, as static imports (intrinsic size +
 * blur-up placeholder), keyed by the Practice.image value in about.ts.
 */
export const practiceImages: Record<string, StaticImageData> = {
  stillness,
  running,
};
