import { aboutPage } from "@/content/about";
import { SectionLabel } from "@/components/section-label";

/** Closing band — "What I believe" + an emotional closer. Shown under every tab. */
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

      <blockquote className="mt-10 border-t border-border pt-8">
        <p className="text-balance text-xl leading-snug italic sm:text-2xl">
          “{b.closer}”
        </p>
        <cite className="mt-3 block font-mono text-[0.62rem] uppercase not-italic tracking-widest text-primary">
          {b.closerCite}
        </cite>
      </blockquote>
    </section>
  );
}
