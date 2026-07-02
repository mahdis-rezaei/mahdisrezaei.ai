import Link from "next/link";
import Image from "next/image";
import { site } from "@/content/site";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/**
 * Home hero (PRD §8.1). All copy comes from site.ts.
 * Confident builder's-gallery layout: big display headline, two CTAs (the
 * primary in the signature indigo), proof chips, and the portrait when set.
 */
export function Hero() {
  const { name, role, location, portrait } = site;
  const { headline, subhead, proofChips, ctas } = site.hero;

  return (
    <section className="mx-auto w-full max-w-5xl animate-rise px-6 pb-8 pt-20 sm:pt-24">
      <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between md:gap-12">
        <div className="max-w-2xl">
          <p className="text-sm font-medium tracking-wide text-muted-foreground">
            {name} · {role}
          </p>

          <h1 className="mt-6 text-balance text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl">
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
            <div className="relative h-48 w-48 overflow-hidden rounded-2xl border border-border shadow-lg shadow-primary/5 sm:h-56 sm:w-56">
              <Image
                src={portrait}
                alt={`Portrait of ${name}`}
                fill
                sizes="224px"
                className="object-cover"
                priority
              />
            </div>
          </div>
        )}
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
