import Link from "next/link";
import Image from "next/image";
import { site } from "@/content/site";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/**
 * Home hero (PRD §8.1). All copy comes from site.ts.
 * Confident builder's-gallery layout: a warm accent glow, an "open to work"
 * pulse, the big display headline with two CTAs, proof chips, and the portrait.
 */
export function Hero() {
  const { name, role, location, portrait, openToWork } = site;
  const { headline, subhead, proofChips, ctas } = site.hero;

  return (
    <section className="relative overflow-hidden">
      {/* Warm signature-accent glow behind the headline. */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-28 h-[26rem] w-[26rem] rounded-full bg-primary/8 blur-3xl"
      />

      <div className="relative mx-auto w-full max-w-5xl animate-rise px-6 pb-10 pt-16 sm:pt-20">
        <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between md:gap-12">
          <div className="max-w-2xl">
            {openToWork && (
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-sm font-medium text-muted-foreground">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500/70" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                Open to senior product roles
              </span>
            )}

            <p className="mt-6 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
              {name} · {role}
            </p>

            <h1 className="mt-4 text-balance text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl">
              {headline}
            </h1>

            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
              {subhead}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href={ctas.primary.href} className={cn(buttonVariants())}>
                {ctas.primary.label}
              </Link>
              <Link
                href={ctas.secondary.href}
                className={cn(buttonVariants({ variant: "outline" }))}
              >
                {ctas.secondary.label}
              </Link>
            </div>
          </div>

          {portrait && (
            <div className="shrink-0">
              <div className="relative h-48 w-48 overflow-hidden rounded-2xl border border-border shadow-xl shadow-primary/10 sm:h-60 sm:w-60">
                <Image
                  src={portrait}
                  alt={`Portrait of ${name}`}
                  fill
                  sizes="240px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          )}
        </div>

        <ul className="mt-12 flex flex-wrap gap-2" aria-label="Highlights">
          {proofChips.map((chip) => (
            <li
              key={chip}
              className="rounded-full border border-border bg-card px-3 py-1 text-sm text-muted-foreground"
            >
              {chip}
            </li>
          ))}
        </ul>

        <p className="mt-8 font-mono text-xs uppercase tracking-widest text-muted-foreground">
          {location}
        </p>
      </div>
    </section>
  );
}
