import { WORLD_LAND_PATH } from "@/content/world-map-path";

/**
 * A minimal, monochrome world map with a labelled pin at each place visited.
 * The land silhouette is public-domain Natural Earth data projected
 * equirectangular to a 1000x389 viewBox (aria-hidden, decorative). Pins are HTML
 * buttons overlaid by percentage using the same projection, so each carries its
 * place name: the label shows on hover and on tap/focus (works on touch and
 * keyboard), and screen readers announce each pin by name.
 */

const W = 1000;
const H = 389;
const LAT_TOP = 84;
const SCALE = W / 360; // degrees -> px, undistorted

/** name + [lat, lon], placed where each reads right on the map. */
const PLACES: { name: string; lat: number; lon: number }[] = [
  { name: "Iran", lat: 32, lon: 54 },
  { name: "India", lat: 22, lon: 79 },
  { name: "Malaysia", lat: 4.2, lon: 102 },
  { name: "Thailand", lat: 15, lon: 101 },
  { name: "Indonesia", lat: -2.5, lon: 118 },
  { name: "Saudi Arabia", lat: 24, lon: 45 },
  { name: "Dubai", lat: 24.5, lon: 54.4 },
  { name: "Turkey", lat: 39, lon: 35 },
  { name: "Italy", lat: 42.8, lon: 12.8 },
  { name: "Spain", lat: 40, lon: -3.7 },
  { name: "France", lat: 46.6, lon: 2.4 },
  { name: "Germany", lat: 51.2, lon: 10.4 },
  { name: "Poland", lat: 52.1, lon: 19.4 },
  { name: "Denmark", lat: 56, lon: 10 },
  { name: "Scotland", lat: 56.5, lon: -4.2 },
  { name: "England", lat: 52.5, lon: -1.5 },
  { name: "USA", lat: 37, lon: -96 },
  { name: "Canada", lat: 45, lon: -80 },
  { name: "Mexico", lat: 23, lon: -102 },
  { name: "Costa Rica", lat: 9.7, lon: -84 },
  { name: "Peru", lat: -9.2, lon: -75 },
  { name: "Puerto Rico", lat: 18.2, lon: -66.4 },
];

export function WorldMap() {
  return (
    <div className="mt-4 overflow-hidden rounded-xl border border-border bg-card p-3 sm:p-5">
      <p className="sr-only">
        The places I have visited, each marked with a pin on the world map:
      </p>
      <div className="relative">
        <svg viewBox={`0 0 ${W} ${H}`} aria-hidden className="h-auto w-full">
          <path d={WORLD_LAND_PATH} className="fill-foreground/[0.09]" />
        </svg>

        {PLACES.map((p) => {
          const left = ((p.lon + 180) / 360) * 100;
          const top = (((LAT_TOP - p.lat) * SCALE) / H) * 100;
          return (
            <button
              key={p.name}
              type="button"
              aria-label={p.name}
              style={{ left: `${left}%`, top: `${top}%` }}
              className="group/pin absolute z-0 -translate-x-1/2 -translate-y-1/2 rounded-full hover:z-20 focus:z-20 focus:outline-none"
            >
              <span
                aria-hidden
                className="block h-2.5 w-2.5 rounded-full bg-primary ring-4 ring-primary/20 transition-transform duration-200 group-hover/pin:scale-125 group-focus-visible/pin:scale-125 group-focus-visible/pin:ring-primary/40"
              />
              <span
                aria-hidden
                className="pointer-events-none absolute bottom-full left-1/2 mb-2 -translate-x-1/2 whitespace-nowrap rounded-md bg-foreground px-2 py-1 font-mono text-[0.6rem] uppercase tracking-widest text-background opacity-0 shadow-lg transition-opacity duration-200 group-hover/pin:opacity-100 group-focus/pin:opacity-100"
              >
                {p.name}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
