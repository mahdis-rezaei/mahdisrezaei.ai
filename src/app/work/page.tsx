import type { Metadata } from "next";
import { site } from "@/content/site";
import { WorkCard } from "@/components/work-card";
import { SectionLabel } from "@/components/section-label";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected product work by Mahdis Rezaei — AI platforms and trust & safety at Meta, enterprise identity, consumer products, and Yadegar, built end to end.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <main className="flex-1">
      <section className="mx-auto w-full max-w-5xl px-6 py-16 sm:py-24">
        <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl">
          Work
        </h1>
        <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
          A few of the problems I&apos;ve turned into products people rely on —
          framed as problem, insight, decision, and impact.
        </p>

        <div className="mt-16 space-y-20">
          {site.workGroups.map((group, i) => {
            const items = site.work.filter((w) => w.group === group.key);
            if (items.length === 0) return null;
            return (
              <Reveal key={group.key}>
                <SectionLabel index={String(i + 1).padStart(2, "0")}>
                  {group.eyebrow}
                </SectionLabel>
                <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                  {group.title}
                </h2>
                <p className="mt-3 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
                  {group.intro}
                </p>
                <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {items.map((work) => (
                    <WorkCard key={work.title} work={work} />
                  ))}
                </div>
              </Reveal>
            );
          })}
        </div>

        <p className="mt-16 text-sm text-muted-foreground">
          The full experience timeline and deep case studies are coming next.
        </p>
      </section>
    </main>
  );
}
