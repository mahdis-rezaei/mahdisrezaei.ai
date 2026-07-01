import Link from "next/link";
import { site } from "@/content/site";
import { WorkCard } from "@/components/work-card";

export function SelectedWork() {
  return (
    <section className="mx-auto w-full max-w-5xl px-6 py-16 sm:py-20">
      <div className="flex items-end justify-between gap-4">
        <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
          Selected work
        </h2>
        <Link
          href="/work"
          className="text-sm font-medium text-primary transition-colors hover:text-primary/80"
        >
          All work →
        </Link>
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {site.selectedWork.map((work) => (
          <WorkCard key={work.slug} work={work} />
        ))}
      </div>
    </section>
  );
}
