import type { Places } from "@/content/about";
import { WorldMap } from "@/components/world-map";

/**
 * The travel practice's places: a headline line above a minimal world map with
 * a labelled pin at each place visited (names show on hover and on tap/focus).
 */
export function PlacesBand({ places }: { places: Places }) {
  return (
    <div className="mt-5">
      <p className="font-display text-sm font-semibold tracking-tight">
        {places.lead}
      </p>
      <WorldMap />
    </div>
  );
}
