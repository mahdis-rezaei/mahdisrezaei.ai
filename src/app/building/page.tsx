import type { Metadata } from "next";
import Link from "next/link";
import { Languages, NotebookPen, type LucideIcon } from "lucide-react";
import { apps, type BuildApp } from "@/content/building";
import { buttonVariants } from "@/components/ui/button";
import { SectionLabel } from "@/components/section-label";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Building",
  description:
    "Products Mahdis Rezaei has designed, built, and shipped on her own, end to end: Yadegar, an AI journaling companion, and Hamzaban, a Farsi to English translator.",
  alternates: { canonical: "/building" },
};

const ICONS: Record<BuildApp["icon"], LucideIcon> = {
  notebook: NotebookPen,
  languages: Languages,
};

function AppCard({ app }: { app: BuildApp }) {
  const Icon = ICONS[app.icon];
  return (
    <article className="flex flex-col rounded-2xl border border-border bg-card p-7 transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 sm:p-8">
      <div className="flex items-start justify-between gap-3">
        <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
          <Icon className="h-7 w-7" strokeWidth={1.75} />
        </span>
        <span
          className={cn(
            "rounded-full border px-3 py-1 text-xs font-medium",
            app.status === "Live"
              ? "border-emerald-600/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400"
              : "border-border bg-secondary text-muted-foreground",
          )}
        >
          {app.status}
        </span>
      </div>

      <h2 className="mt-6 font-display text-2xl font-bold tracking-tight">
        {app.name}
      </h2>
      <p className="mt-1 font-mono text-xs uppercase tracking-widest text-primary">
        {app.category}
      </p>
      <p className="mt-0.5 font-mono text-xs uppercase tracking-widest text-muted-foreground">
        {app.platform}
      </p>

      <p className="mt-4 flex-1 text-pretty leading-relaxed text-muted-foreground">
        {app.blurb}
      </p>

      <div className="mt-7 flex flex-wrap gap-3">
        {app.links.map((l, i) =>
          l.external ? (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className={cn(
                buttonVariants({ variant: i === 0 ? "primary" : "outline" }),
              )}
            >
              {l.label}
            </a>
          ) : (
            <Link
              key={l.href}
              href={l.href}
              className={cn(
                buttonVariants({ variant: i === 0 ? "primary" : "outline" }),
              )}
            >
              {l.label}
            </Link>
          ),
        )}
      </div>
    </article>
  );
}

export default function BuildingPage() {
  return (
    <main className="flex-1">
      <section className="mx-auto w-full max-w-5xl px-6 py-16 sm:py-24">
        <SectionLabel>Independent work</SectionLabel>
        <h1 className="mt-5 text-balance text-4xl font-bold tracking-tight sm:text-5xl">
          Things I&apos;ve built
        </h1>
        <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
          Products I designed, built, and shipped on my own, end to end. Not
          managed. Built.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {apps.map((app) => (
            <AppCard key={app.slug} app={app} />
          ))}
        </div>
      </section>
    </main>
  );
}
