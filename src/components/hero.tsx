import Link from "next/link";
import { site } from "@/content/site";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/**
 * Home hero (PRD §8.1). All copy comes from site.ts.
 * Confident builder's-gallery layout: big display headline, two CTAs (the
 * primary in the signature indigo), proof chips, small location line.
 */
export function Hero() {
  const { name, role, location } = site;
  const { headline, subhead, proofChips, ctas } = site.hero;

  return (
    <section className="mx-auto w-full max-w-5xl animate-rise px-6 pb-8 pt-20 sm:pt-28">
      <p className="text-sm font-medium tracking-wide text-muted-foreground">
        {name} · {role}
      </p>

      <h1 className="mt-6 max-w-3xl text-balance text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl md:text-7xl">
        {headline}
      </h1>

      <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
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
