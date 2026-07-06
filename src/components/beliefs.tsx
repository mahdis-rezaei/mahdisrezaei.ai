import { aboutPage } from "@/content/about";
import { SectionLabel } from "@/components/section-label";

/** "What I believe" — a plain section that closes the Off the clock tab. */
export function Beliefs() {
  const b = aboutPage.beliefs;

  return (
    <div>
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
    </div>
  );
}
