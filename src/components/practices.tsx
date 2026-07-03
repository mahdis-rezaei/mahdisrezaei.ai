import { aboutPage } from "@/content/about";
import { SectionLabel } from "@/components/section-label";

/** Off the clock tab — long-held "practices", each with a why-it-matters line. */
export function Practices() {
  const o = aboutPage.offClock;

  return (
    <div>
      <SectionLabel>{o.eyebrow}</SectionLabel>
      <h2 className="mt-5 text-balance font-display text-3xl font-bold tracking-tight sm:text-4xl">
        {o.title}
      </h2>
      <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
        {o.lede}
      </p>

      <div className="mt-10 divide-y divide-border">
        {o.practices.map((pr) => (
          <div key={pr.title} className="py-7 first:pt-0">
            <h3 className="font-display text-xl font-bold tracking-tight">
              {pr.title}
            </h3>
            <p className="mt-2.5 text-pretty leading-relaxed text-muted-foreground">
              {pr.body}
            </p>
            <p className="mt-3 flex gap-2 text-pretty italic text-muted-foreground">
              <span aria-hidden className="not-italic text-primary">
                →
              </span>
              {pr.why}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
