import { WORLD_LAND_PATH } from "@/content/world-map-path";

/**
 * A minimal, monochrome world map with a pin at each place visited. The land
 * silhouette is public-domain Natural Earth data projected equirectangular to a
 * 1000x389 viewBox; pins are projected with the same latTop/scale so they land
 * in the right spot. Names live in the list below, so pins stay label-free and
 * the whole map is aria-hidden (the list carries the accessible content).
 */

const W = 1000;
const H = 389;
const LAT_TOP = 84;
const SCALE = W / 360; // degrees -> px, undistorted

const px = (lon: number) => (lon + 180) * SCALE;
const py = (lat: number) => (LAT_TOP - lat) * SCALE;

/** [lat, lon] for each place, roughly at the spot that reads right on a map. */
const PLACES: [number, number][] = [
  [32, 54], // Iran
  [22, 79], // India
  [4.2, 102], // Malaysia
  [15, 101], // Thailand
  [-2.5, 118], // Indonesia
  [24, 45], // Saudi Arabia
  [24.5, 54.4], // Dubai
  [39, 35], // Turkey
  [42.8, 12.8], // Italy
  [40, -3.7], // Spain
  [46.6, 2.4], // France
  [51.2, 10.4], // Germany
  [52.1, 19.4], // Poland
  [56, 10], // Denmark
  [56.5, -4.2], // Scotland
  [52.5, -1.5], // England
  [37, -96], // USA
  [45, -80], // Canada
  [23, -102], // Mexico
  [9.7, -84], // Costa Rica
  [-9.2, -75], // Peru
  [18.2, -66.4], // Puerto Rico
];

export function WorldMap() {
  return (
    <div className="mt-4 overflow-hidden rounded-xl border border-border bg-card p-3 sm:p-5">
      <svg
        viewBox={`0 0 ${W} ${H}`}
        role="img"
        aria-label="World map with the places I have visited marked"
        className="h-auto w-full"
      >
        <path d={WORLD_LAND_PATH} className="fill-foreground/[0.09]" />
        {PLACES.map(([lat, lon], i) => {
          const x = px(lon);
          const y = py(lat);
          return (
            <g key={i} aria-hidden>
              <circle cx={x} cy={y} r={9} className="fill-primary/20" />
              <circle
                cx={x}
                cy={y}
                r={4}
                className="fill-primary stroke-card"
                strokeWidth={1.5}
              />
            </g>
          );
        })}
      </svg>
    </div>
  );
}
