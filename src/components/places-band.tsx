import { ChevronDown } from "lucide-react";
import type { Places } from "@/content/about";

/**
 * A compact, expandable list of places visited, grouped by region. Collapsed to
 * a single summary row so it stays out of the way; expands to the full list.
 * Built on native <details> for no-JS accessibility, matching the poetry shelf.
 */
export function PlacesBand({ places }: { places: Places }) {
  return (
    <div className="mt-5">
      <p className="font-display text-sm font-semibold tracking-tight">
        {places.lead}
      </p>
      <details className="group mt-3 overflow-hidden rounded-xl border border-border bg-card open:bg-secondary">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-4 py-3.5 [&::-webkit-details-marker]:hidden">
          <span className="min-w-0 truncate">
            <span className="font-display text-sm font-semibold tracking-tight">
              {places.summary}
            </span>
            <span className="ml-2 font-mono text-[0.62rem] uppercase tracking-widest text-muted-foreground">
              {places.count} places
            </span>
          </span>
          <ChevronDown
            aria-hidden
            className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-300 group-open:rotate-180"
          />
        </summary>

        <div className="grid gap-5 px-4 pb-4 sm:grid-cols-3">
          {places.groups.map((g) => (
            <div key={g.region}>
              <p className="font-mono text-[0.62rem] uppercase tracking-widest text-primary">
                {g.region}
              </p>
              <p className="mt-1.5 text-pretty text-sm leading-relaxed text-muted-foreground">
                {g.places.join(", ")}
              </p>
            </div>
          ))}
        </div>
      </details>
    </div>
  );
}
