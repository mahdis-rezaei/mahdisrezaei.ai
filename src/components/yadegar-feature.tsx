import Link from "next/link";
import { site } from "@/content/site";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function YadegarFeature() {
  const { yadegar } = site;

  return (
    <section className="mx-auto w-full max-w-5xl px-6 py-16 sm:py-20">
      <div className="relative overflow-hidden rounded-2xl border border-border bg-card px-6 py-12 sm:px-12 sm:py-16">
        {/* Restrained signature-accent wash — the one energetic moment. */}
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-primary/10 blur-3xl"
        />
        <div className="relative max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Building
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            {yadegar.name}
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            {yadegar.oneLiner}
          </p>
          <p className="mt-3 text-sm text-muted-foreground">{yadegar.meaning}</p>

          <div className="mt-8 flex flex-wrap gap-3">
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
              className={cn(buttonVariants({ variant: "outline" }))}
            >
              {yadegar.ctas.secondary.label}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
