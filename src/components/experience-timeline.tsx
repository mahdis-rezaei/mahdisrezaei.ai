import { site } from "@/content/site";
import { careerImages } from "@/content/career-images";
import { PhotoZoom } from "@/components/photo-zoom";

function monogram(company: string) {
  const letters = company.replace(/[^A-Za-z]/g, "");
  return letters.slice(0, 1).toUpperCase();
}

/**
 * US career history (About → Career tab). Each role shows its photo (or a
 * monogram placeholder until one is added) alongside what she did.
 */
export function ExperienceTimeline() {
  return (
    <div className="space-y-5">
      {site.experience.map((job) => {
        const img = job.image ? careerImages[job.image] : null;
        return (
          <article
            key={`${job.company}-${job.period}`}
            className="flex flex-col gap-5 rounded-2xl border border-border bg-card p-5 sm:flex-row sm:items-start sm:p-6"
          >
            <div className="shrink-0 sm:w-72">
              {img ? (
                <PhotoZoom
                  image={img}
                  alt={`${job.company}, ${job.roles[0].title}`}
                  ratio="4 / 3"
                  tone="mono"
                  sizes="(min-width: 640px) 18rem, 100vw"
                />
              ) : (
                <div
                  aria-hidden
                  className="flex aspect-[4/3] w-full items-center justify-center rounded-xl border border-dashed border-border bg-accent font-display text-3xl font-semibold text-muted-foreground"
                >
                  {monogram(job.company)}
                </div>
              )}
            </div>

            <div className="min-w-0">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h3 className="font-display text-lg font-semibold">
                  {job.company}
                </h3>
                <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  {job.period}
                </span>
              </div>

              <div className="mt-2 space-y-6">
                {job.roles.map((r, ri) => {
                  const multi = job.roles.length > 1;
                  return (
                    <div
                      key={r.title}
                      className={
                        multi && ri > 0
                          ? "border-t border-border pt-6"
                          : undefined
                      }
                    >
                      <p className="text-sm font-medium text-primary">
                        {r.title}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {r.location}
                        {multi ? ` · ${r.period}` : ""}
                      </p>
                      <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
                        {r.summary}
                      </p>

                      {r.highlights && r.highlights.length > 0 && (
                        <ul className="mt-4 space-y-2">
                          {r.highlights.map((h, i) => (
                            <li
                              key={i}
                              className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground"
                            >
                              <span
                                aria-hidden
                                className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary"
                              />
                              <span className="text-pretty">{h}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
