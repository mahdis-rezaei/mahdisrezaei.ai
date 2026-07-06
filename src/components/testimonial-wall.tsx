import { Quote } from "lucide-react";
import { testimonials } from "@/content/testimonials";
import { SectionLabel } from "@/components/section-label";
import { cn } from "@/lib/utils";

/**
 * "What others say" — a wall of real, role-anonymized peer feedback. One
 * featured quote leads, the rest pack into a themed masonry, and a few short,
 * high-impact quotes render as indigo accent cards for rhythm. Each card is
 * tagged with the PM strength it speaks to, so the wall reads as organized
 * evidence rather than a pile of praise.
 */
export function TestimonialWall() {
  const t = testimonials;
  const featured = t.items.find((i) => i.featured) ?? t.items[0];
  const rest = t.items.filter((i) => i !== featured);

  return (
    <div>
      <SectionLabel>{t.eyebrow}</SectionLabel>
      <h2 className="mt-5 text-balance font-display text-3xl font-bold tracking-tight sm:text-4xl">
        {t.title}
      </h2>
      <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
        {t.lede}
      </p>

      {/* Featured quote */}
      <figure className="mt-10 rounded-2xl border border-border bg-secondary px-6 py-10 sm:px-10 sm:py-12">
        <Quote aria-hidden className="h-8 w-8 fill-primary/15 text-primary" />
        <blockquote className="mt-5 text-balance font-display text-2xl font-medium leading-snug tracking-tight sm:text-3xl">
          “{featured.quote}”
        </blockquote>
        <figcaption className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[0.7rem] uppercase tracking-widest">
          <span className="text-primary">{featured.cite}</span>
          <span aria-hidden className="text-border">
            ·
          </span>
          <span className="text-muted-foreground">{featured.theme}</span>
        </figcaption>
      </figure>

      {/* Themed masonry */}
      <div className="mt-5 sm:columns-2 sm:gap-5 lg:columns-3">
        {rest.map((item) => (
          <figure
            key={item.quote}
            className={cn(
              "mb-5 break-inside-avoid rounded-xl border p-5 transition-[transform,border-color] duration-300 hover:-translate-y-0.5",
              item.accent
                ? "border-transparent bg-primary text-primary-foreground shadow-sm shadow-primary/20"
                : "border-border bg-card hover:border-primary/40",
            )}
          >
            <span
              className={cn(
                "font-mono text-[0.6rem] uppercase tracking-widest",
                item.accent ? "text-primary-foreground/80" : "text-primary",
              )}
            >
              {item.theme}
            </span>
            <blockquote className="mt-2.5 text-pretty leading-relaxed">
              “{item.quote}”
            </blockquote>
            <figcaption
              className={cn(
                "mt-3 font-mono text-[0.62rem] uppercase tracking-widest",
                item.accent
                  ? "text-primary-foreground/70"
                  : "text-muted-foreground",
              )}
            >
              {item.cite}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
