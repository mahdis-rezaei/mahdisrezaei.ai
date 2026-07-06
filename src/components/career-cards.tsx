import { aboutPage } from "@/content/about";
import { SectionLabel } from "@/components/section-label";

/**
 * Career highlights header plus an at-a-glance impact strip: the marquee
 * outcomes up front, so the depth can live in the case studies below.
 */
export function CareerCards() {
  const c = aboutPage.career;

  return (
    <div>
      <SectionLabel>{c.eyebrow}</SectionLabel>
      <h2 className="mt-5 text-balance font-display text-3xl font-bold tracking-tight sm:text-4xl">
        {c.title}
      </h2>
      <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
        {c.lede}
      </p>

      <dl className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-4">
        {c.metrics.map((m) => (
          <div key={m.value} className="bg-card p-5 sm:p-6">
            <dt className="font-display text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              {m.value}
            </dt>
            <dd className="mt-2 text-pretty text-sm leading-snug text-muted-foreground">
              {m.label}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
