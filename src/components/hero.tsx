import Link from "next/link";
import { site } from "@/content/site";

/**
 * Home hero (PRD §8.1). All copy comes from site.ts.
 * Warm editorial layout: serif headline, generous rhythm, two CTAs, proof chips.
 */
export function Hero() {
  const { name, role, location } = site;
  const { headline, subhead, proofChips, ctas } = site.hero;

  return (
    <section className="mx-auto w-full max-w-3xl px-6 py-24 sm:py-32">
      <p className="text-sm font-medium tracking-wide text-muted-foreground">
        {name} · {role}
      </p>

      <h1 className="mt-6 text-balance text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
        {headline}
      </h1>

      <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
        {subhead}
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          href={ctas.primary.href}
          className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          {ctas.primary.label}
        </Link>
        <Link
          href={ctas.secondary.href}
          className="inline-flex h-11 items-center justify-center rounded-md border border-border bg-card px-6 text-sm font-medium text-foreground transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          {ctas.secondary.label}
        </Link>
      </div>

      <ul className="mt-10 flex flex-wrap gap-2" aria-label="Highlights">
        {proofChips.map((chip) => (
          <li
            key={chip}
            className="rounded-full border border-border bg-card px-3 py-1 text-sm text-muted-foreground"
          >
            {chip}
          </li>
        ))}
      </ul>

      <p className="mt-10 text-sm text-muted-foreground">{location}</p>
    </section>
  );
}
