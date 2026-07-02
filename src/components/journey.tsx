import Image from "next/image";
import { site } from "@/content/site";
import { SectionLabel } from "@/components/section-label";

/**
 * Life-story roadmap (About page) — a vertical timeline of the six-country
 * journey. Each stop has a numbered marker, place, years, and note, plus an
 * optional photo (fills in when a JourneyStop.image path is set in site.ts).
 */
export function Journey() {
  const { journey } = site;

  return (
    <section className="mt-16">
      <SectionLabel>The journey</SectionLabel>
      <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
        Six countries, one through-line
      </h2>

      <ol className="mt-10">
        {journey.map((stop, i) => (
          <li key={stop.place} className="flex gap-5 pb-12 last:pb-0">
            {/* Rail: numbered marker + connecting line to the next stop. */}
            <div className="flex flex-col items-center">
              <span className="z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border bg-card font-mono text-xs font-medium text-primary">
                {String(i + 1).padStart(2, "0")}
              </span>
              {i < journey.length - 1 && (
                <span className="mt-2 w-px flex-1 bg-border" aria-hidden />
              )}
            </div>

            <div className="-mt-0.5 pb-1">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h3 className="font-display text-lg font-semibold">
                  {stop.place}
                </h3>
                <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  {stop.years}
                </span>
              </div>

              {stop.image && (
                <div className="relative mt-4 aspect-[16/10] w-full max-w-md overflow-hidden rounded-xl border border-border">
                  <Image
                    src={stop.image}
                    alt={`${stop.place}`}
                    fill
                    sizes="(min-width: 768px) 28rem, 100vw"
                    className="object-cover"
                  />
                </div>
              )}

              <p className="mt-3 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
                {stop.note}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
