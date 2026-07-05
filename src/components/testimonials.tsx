"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { aboutPage } from "@/content/about";
import { SectionLabel } from "@/components/section-label";
import { cn } from "@/lib/utils";

/**
 * A swappable testimonials carousel: one real, role-anonymized quote at a time,
 * with prev/next controls and dot indicators. All quotes stay in the DOM for
 * SEO; only the active one is visible. Honors reduced motion via a plain
 * opacity swap. Quotes are curated to showcase Staff AI PM strength.
 */
export function Testimonials() {
  const t = aboutPage.testimonials;
  const [i, setI] = useState(0);
  const count = t.items.length;

  const go = (next: number) => setI((next + count) % count);

  return (
    <section
      aria-roledescription="carousel"
      aria-label={t.title}
      className="mt-16"
    >
      <SectionLabel>{t.eyebrow}</SectionLabel>
      <h2 className="mt-5 text-balance font-display text-3xl font-bold tracking-tight sm:text-4xl">
        {t.title}
      </h2>
      <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
        {t.lede}
      </p>

      <div className="relative mt-10 rounded-2xl border border-border bg-secondary px-6 py-10 sm:px-12 sm:py-14">
        <Quote
          aria-hidden
          className="h-8 w-8 fill-primary/15 text-primary"
        />

        {t.items.map((item, idx) => (
          <figure
            key={item.quote}
            aria-hidden={idx !== i}
            className={cn(
              "m-0 transition-opacity duration-500",
              idx === i
                ? "relative opacity-100"
                : "pointer-events-none absolute inset-0 select-none px-6 py-10 opacity-0 sm:px-12 sm:py-14",
            )}
          >
            <blockquote className="mt-5">
              <p className="text-balance font-display text-xl font-medium leading-snug tracking-tight sm:text-2xl">
                “{item.quote}”
              </p>
            </blockquote>
            <figcaption className="mt-6 font-mono text-[0.7rem] uppercase tracking-widest text-primary">
              {item.cite}
            </figcaption>
          </figure>
        ))}

        <div className="mt-8 flex items-center justify-between">
          <div className="flex gap-2" role="group" aria-label="Choose a testimonial">
            {t.items.map((item, idx) => (
              <button
                key={item.quote}
                type="button"
                aria-current={idx === i}
                aria-label={`Show testimonial ${idx + 1} of ${count}`}
                onClick={() => go(idx)}
                className={cn(
                  "h-2 rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-secondary",
                  idx === i
                    ? "w-6 bg-primary"
                    : "w-2 bg-border hover:bg-muted-foreground/40",
                )}
              />
            ))}
          </div>

          <div className="flex gap-2">
            <button
              type="button"
              aria-label="Previous testimonial"
              onClick={() => go(i - 1)}
              className="rounded-full border border-border p-2 text-muted-foreground transition-colors hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-secondary"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="Next testimonial"
              onClick={() => go(i + 1)}
              className="rounded-full border border-border p-2 text-muted-foreground transition-colors hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-secondary"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
