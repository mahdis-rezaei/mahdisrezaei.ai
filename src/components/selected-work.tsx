import Link from "next/link";
import { featuredWork } from "@/content/site";
import { WorkCard } from "@/components/work-card";
import { SectionLabel } from "@/components/section-label";
import { Reveal } from "@/components/reveal";

export function SelectedWork() {
  return (
    <Reveal
      as="section"
      className="mx-auto w-full max-w-5xl px-6 py-20 sm:py-24"
    >
      <div className="flex items-end justify-between gap-4">
        <div>
          <SectionLabel index="01">Selected work</SectionLabel>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
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

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {featuredWork.map((work) => (
          <WorkCard key={work.title} work={work} />
        ))}
      </div>
    </Reveal>
  );
}
