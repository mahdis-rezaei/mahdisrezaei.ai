import { aboutPage } from "@/content/about";
import { SectionLabel } from "@/components/section-label";

/** Closing band — "What I believe". Shown under every tab. */
export function BeliefsBand() {
  const b = aboutPage.beliefs;

  return (
    <section className="rounded-2xl border border-border bg-secondary px-6 py-12 sm:px-12 sm:py-14">
      <SectionLabel>{b.eyebrow}</SectionLabel>
      <h2 className="mt-5 text-balance font-display text-3xl font-bold tracking-tight sm:text-4xl">
        {b.title}
      </h2>
      <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
        {b.lede}
      </p>

      <div className="mt-10 grid gap-6">
        {b.items.map((item) => (
          <p
            key={item.lead}
            className="border-l-2 border-primary pl-4 text-pretty leading-relaxed"
          >
            <span className="font-display font-bold tracking-tight">
              {item.lead}
            </span>{" "}
            <span className="text-muted-foreground">{item.rest}</span>
          </p>
        ))}
      </div>
    </section>
  );
}
