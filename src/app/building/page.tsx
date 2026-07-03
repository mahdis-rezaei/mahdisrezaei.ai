import type { Metadata } from "next";
import { site } from "@/content/site";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Building · Yadegar",
  description:
    "Yadegar, a private AI journaling app Mahdis Rezaei designed, built, and shipped end to end, web and iOS.",
  alternates: { canonical: "/building" },
};

export default function BuildingPage() {
  const { yadegar } = site;

  return (
    <main className="flex-1">
      <section className="mx-auto w-full max-w-3xl px-6 py-16 sm:py-24">
        <p className="text-sm font-medium uppercase tracking-widest text-primary">
          Building
        </p>
        <h1 className="mt-4 text-balance text-4xl font-bold tracking-tight sm:text-5xl">
          {yadegar.name}
        </h1>
        <p className="mt-5 text-pretty text-xl leading-relaxed text-muted-foreground">
          {yadegar.oneLiner}
        </p>
        <p className="mt-3 text-sm text-muted-foreground">{yadegar.meaning}</p>

        <a
          href={yadegar.href}
          target="_blank"
          rel="noreferrer"
          className={cn(buttonVariants(), "mt-8")}
        >
          Visit Yadegar
        </a>

        <div className="mt-12 rounded-2xl border border-border bg-card p-6 text-muted-foreground sm:p-8">
          The full build write-up, covering why I built it, the architecture,
          and the principles it&apos;s built on, is coming in the next pass.
        </div>
      </section>
    </main>
  );
}
