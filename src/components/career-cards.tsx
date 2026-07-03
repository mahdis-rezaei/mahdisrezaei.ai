import { aboutPage } from "@/content/about";
import { SectionLabel } from "@/components/section-label";

/** Career tab — "Building trusted AI at scale": trajectory chip + case cards. */
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

      <div className="mt-6 inline-flex flex-wrap gap-x-4 gap-y-1 rounded-lg border border-border bg-secondary px-4 py-2.5 font-mono text-xs text-muted-foreground">
        {c.trajectory.map((t, i) => (
          <span key={i} className="flex items-center gap-4">
            {i > 0 && <span aria-hidden className="text-border">·</span>}
            {t}
          </span>
        ))}
      </div>

      <div className="mt-8 grid gap-4">
        {c.cards.map((card) => (
          <article
            key={card.title}
            className="rounded-xl border border-border bg-card p-6 shadow-sm sm:p-7"
          >
            <p className="font-mono text-[0.62rem] uppercase tracking-widest text-primary">
              {card.kicker}
            </p>
            <h3 className="mt-3 font-display text-xl font-bold leading-snug tracking-tight">
              {card.title}
            </h3>
            <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
              {card.body}
            </p>
            {card.stat && (
              <p className="mt-3 font-medium text-foreground">{card.stat}</p>
            )}
            <p className="mt-4 border-t border-dashed border-border pt-4 text-pretty italic leading-relaxed text-muted-foreground">
              {card.judgment}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}
