import { aboutPage } from "@/content/about";
import { journeyImages } from "@/content/journey-images";
import { SectionLabel } from "@/components/section-label";
import { PhotoZoom } from "@/components/photo-zoom";

/**
 * Personal tab — "Six countries, one through-line" timeline. Numbered nodes on
 * a spine, each chapter with a captioned photo, narrative, and a "thread" line.
 */
export function AboutTimeline() {
  const p = aboutPage.personal;

  return (
    <div>
      <SectionLabel>{p.eyebrow}</SectionLabel>
      <h2 className="mt-5 text-balance font-display text-3xl font-bold tracking-tight sm:text-4xl">
        {p.title}
      </h2>
      <p className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
        <span className="font-medium text-foreground italic">
          {p.thesisLead}
        </span>{" "}
        {p.thesis}
      </p>

      <ol className="mt-12">
        {p.chapters.map((c, i) => {
          const img = c.image ? journeyImages[c.image] : null;
          const last = i === p.chapters.length - 1;
          return (
            <li key={c.n} className="flex gap-5 sm:gap-6">
              <div className="flex flex-col items-center">
                <span className="z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-primary/50 bg-background font-mono text-xs font-semibold text-primary">
                  {c.n}
                </span>
                {!last && (
                  <span className="mt-2 w-px flex-1 bg-border" aria-hidden />
                )}
              </div>

              <div className="min-w-0 pb-12">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="font-display text-xl font-bold tracking-tight sm:text-2xl">
                    {c.place}
                  </h3>
                  <span className="font-mono text-xs tracking-wide text-muted-foreground tabular-nums">
                    {c.years}
                  </span>
                </div>

                {img && (
                  <div className="mt-4 w-full max-w-sm">
                    <PhotoZoom
                      image={img}
                      alt={c.place}
                      caption={c.caption}
                      className="shadow-lg shadow-black/5"
                    />
                  </div>
                )}

                <div className="mt-4 space-y-3">
                  {c.narrative.map((para, j) => (
                    <p key={j} className="text-pretty leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>

                <div className="mt-5 flex gap-3 border-l-2 border-primary pl-4">
                  <span className="shrink-0 pt-1 font-mono text-[0.6rem] uppercase tracking-[0.2em] text-primary">
                    the thread
                  </span>
                  <span className="text-pretty italic leading-relaxed">
                    {c.thread}
                  </span>
                </div>
              </div>
            </li>
          );
        })}
      </ol>

      <p className="mt-2 border-t border-border pt-8 font-display text-xl font-bold leading-snug tracking-tight text-balance sm:text-2xl">
        {aboutPage.personal.closeLead}{" "}
        <span className="text-primary italic">
          {aboutPage.personal.closeEmph}
        </span>
      </p>
    </div>
  );
}
