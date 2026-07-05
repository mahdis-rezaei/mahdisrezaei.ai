import { aboutPage } from "@/content/about";
import { SectionLabel } from "@/components/section-label";

/** How I work tab — the principles Mahdis works by. */
export function Principles() {
  const w = aboutPage.howIWork;

  return (
    <div>
      <SectionLabel>{w.eyebrow}</SectionLabel>
      <h2 className="mt-5 text-balance font-display text-3xl font-bold tracking-tight sm:text-4xl">
        {w.title}
      </h2>
      <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
        {w.lede}
      </p>

      <div className="mt-10 divide-y divide-border">
        {w.principles.map((p) => (
          <div key={p.title} className="py-8 first:pt-0">
            <h3 className="font-display text-xl font-bold tracking-tight sm:text-2xl">
              {p.title}
            </h3>
            <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
              {p.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
