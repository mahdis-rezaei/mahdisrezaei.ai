"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Pause, Play, Quote } from "lucide-react";
import { testimonials } from "@/content/testimonials";
import { SectionLabel } from "@/components/section-label";
import { cn } from "@/lib/utils";

const ADVANCE_MS = 5000;

/**
 * "What others say" — a swappable carousel of real, role-anonymized peer
 * feedback. One quote at a time (all in the DOM for SEO, cross-faded), with
 * prev/next, keyboard arrows, a position counter, and a row of theme chips that
 * lets a reader jump straight to a strength.
 *
 * Auto-advance runs on its own and is driven solely by the explicit play/pause
 * control (the WCAG pause mechanism), so pressing play always resumes rotation.
 * It never auto-advances for visitors who prefer reduced motion.
 */
export function TestimonialCarousel() {
  const t = testimonials;
  const items = t.items;
  const n = items.length;

  const [i, setI] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [reduced, setReduced] = useState(false);

  const go = (next: number) => setI((next + n) % n);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduced(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (!playing || reduced) return;
    const id = setTimeout(() => setI((p) => (p + 1) % n), ADVANCE_MS);
    return () => clearTimeout(id);
  }, [playing, reduced, i, n]);

  const autoOn = !reduced;

  return (
    <div>
      <SectionLabel>{t.eyebrow}</SectionLabel>
      <h2 className="mt-5 text-balance font-display text-3xl font-bold tracking-tight sm:text-4xl">
        {t.title}
      </h2>
      <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
        {t.lede}
      </p>

      <div
        role="group"
        aria-roledescription="carousel"
        aria-label={t.title}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") go(i - 1);
          if (e.key === "ArrowRight") go(i + 1);
        }}
        className="mt-10 rounded-2xl border border-border bg-secondary px-6 py-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:px-12 sm:py-12"
      >
        <Quote aria-hidden className="h-9 w-9 fill-primary/15 text-primary" />

        <div
          aria-live="polite"
          className="relative mt-6 min-h-[10rem] sm:min-h-[9rem]"
        >
          {items.map((item, idx) => (
            <figure
              key={item.quote}
              aria-hidden={idx !== i}
              className={cn(
                "m-0 transition-opacity duration-500 ease-out",
                idx === i
                  ? "opacity-100"
                  : "pointer-events-none absolute inset-0 select-none opacity-0",
              )}
            >
              <p className="font-mono text-[0.62rem] uppercase tracking-widest text-primary">
                {item.theme}
              </p>
              <blockquote className="mt-3 text-balance font-display text-xl font-medium leading-snug tracking-tight sm:text-2xl">
                “{item.quote}”
              </blockquote>
              <figcaption className="mt-5 font-mono text-[0.7rem] uppercase tracking-widest text-muted-foreground">
                {item.cite}
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Controls: position + progress + play/pause + prev/next */}
        <div className="mt-8 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs tabular-nums text-muted-foreground">
              {String(i + 1).padStart(2, "0")}
              <span className="mx-1 text-border">/</span>
              {n}
            </span>
            <span
              aria-hidden
              className="h-1 w-16 overflow-hidden rounded-full bg-border sm:w-24"
            >
              <span
                className="block h-full rounded-full bg-primary transition-[width] duration-500 ease-out"
                style={{ width: `${((i + 1) / n) * 100}%` }}
              />
            </span>
          </div>

          <div className="flex items-center gap-2">
            {autoOn && (
              <button
                type="button"
                aria-label={playing ? "Pause auto-advance" : "Play auto-advance"}
                aria-pressed={!playing}
                onClick={() => setPlaying((p) => !p)}
                className="mr-1 rounded-full border border-border p-2 text-muted-foreground transition-colors hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-secondary"
              >
                {playing ? (
                  <Pause className="h-4 w-4" />
                ) : (
                  <Play className="h-4 w-4" />
                )}
              </button>
            )}
            <button
              type="button"
              aria-label="Previous quote"
              onClick={() => go(i - 1)}
              className="rounded-full border border-border p-2 text-muted-foreground transition-colors hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-secondary"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="Next quote"
              onClick={() => go(i + 1)}
              className="rounded-full border border-border p-2 text-muted-foreground transition-colors hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-secondary"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Jump-to-theme chips */}
      <div
        role="group"
        aria-label="Browse feedback by strength"
        className="mt-6 flex flex-wrap gap-2"
      >
        {items.map((item, idx) => (
          <button
            key={item.theme}
            type="button"
            aria-current={idx === i}
            onClick={() => setI(idx)}
            className={cn(
              "rounded-full border px-3 py-1 font-mono text-[0.6rem] uppercase tracking-widest transition-colors",
              idx === i
                ? "border-transparent bg-primary text-primary-foreground"
                : "border-border text-muted-foreground hover:border-primary/40 hover:text-foreground",
            )}
          >
            {item.theme}
          </button>
        ))}
      </div>
    </div>
  );
}
