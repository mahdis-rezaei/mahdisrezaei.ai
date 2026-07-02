import Link from "next/link";
import { featuredWork } from "@/content/site";
import { WorkCard } from "@/components/work-card";

export function SelectedWork() {
  return (
    <section className="mx-auto w-full max-w-5xl px-6 py-16 sm:py-20">
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Selected work
          </p>
          <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            A few things I&apos;m proud of
          </h2>
        </div>
        <Link
          href="/work"
          className="shrink-0 text-sm font-medium text-primary transition-colors hover:text-primary/80"
        >
          All work →
        </Link>
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {featuredWork.map((work) => (
          <WorkCard key={work.title} work={work} />
        ))}
      </div>
    </section>
  );
}
