import { aboutPage } from "@/content/about";
import { SectionLabel } from "@/components/section-label";

/** Closing band — "What I believe". Shown under every tab. */
export function BeliefsBand() {
  const b = aboutPage.beliefs;

  return (
    <section className="mt-16 rounded-2xl border border-border bg-secondary px-6 py-12 sm:px-12 sm:py-14">
      <SectionLabel>{b.eyebrow}</SectionLabel>

      <div className="mt-8 grid gap-6">
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
