import Image from "next/image";
import { site } from "@/content/site";
import { careerImages } from "@/content/career-images";

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
            <div className="shrink-0 sm:w-44">
              {img ? (
                <Image
                  src={img}
                  alt={job.company}
                  placeholder="blur"
                  sizes="(min-width: 640px) 11rem, 100vw"
                  className="h-auto w-full rounded-xl border border-border"
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

            <div>
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h3 className="font-display text-lg font-semibold">
                  {job.company}
                </h3>
                <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  {job.period}
                </span>
              </div>
              <p className="mt-0.5 text-sm font-medium text-primary">
                {job.role}
              </p>
              <p className="text-xs text-muted-foreground">{job.location}</p>
              <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
                {job.summary}
              </p>

              {job.highlights && job.highlights.length > 0 && (
                <ul className="mt-4 space-y-2">
                  {job.highlights.map((h, i) => (
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
          </article>
        );
      })}
    </div>
  );
}
