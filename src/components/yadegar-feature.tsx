import Link from "next/link";
import { site } from "@/content/site";
import { buttonVariants } from "@/components/ui/button";
import { SectionLabel } from "@/components/section-label";
import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";

/**
 * Full-bleed dark "spotlight" band — the contrast moment as you scroll,
 * putting the product she built solo center stage. Stays dark in both themes
 * (a hair lighter than the page in dark mode, with hairline borders).
 */
export function YadegarFeature() {
  const { yadegar } = site;

  return (
    <section className="relative w-full overflow-hidden border-y border-white/10 bg-[#0e0e11] text-white dark:bg-[#17171b]">
      {/* Indigo glow. */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-primary/25 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl"
      />

      <Reveal className="relative mx-auto w-full max-w-5xl px-6 py-24 sm:py-28">
        <SectionLabel index="02" tone="invert">
          Building
        </SectionLabel>

        <div className="mt-6 max-w-2xl">
          <h2 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            {yadegar.name}
          </h2>
          <p className="mt-5 text-pretty text-lg leading-relaxed text-white/70">
            {yadegar.oneLiner}
          </p>
          <p className="mt-3 font-mono text-xs uppercase tracking-widest text-white/60">
            {yadegar.meaning}
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href={yadegar.ctas.primary.href}
              className={cn(buttonVariants())}
            >
              {yadegar.ctas.primary.label}
            </Link>
            <a
              href={yadegar.ctas.secondary.href}
              target="_blank"
              rel="noreferrer"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "border-white/25 bg-transparent text-white hover:border-white/40 hover:bg-white/10",
              )}
            >
              {yadegar.ctas.secondary.label}
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
