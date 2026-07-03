import type { Metadata } from "next";
import { site } from "@/content/site";
import { WorkCard } from "@/components/work-card";
import { CareerCards } from "@/components/career-cards";
import { SectionLabel } from "@/components/section-label";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Professional",
  description:
    "The professional work of Mahdis Rezaei: building trusted AI at scale at Meta, plus enterprise platforms, consumer products, and Yadegar, built end to end.",
  alternates: { canonical: "/work" },
};

// The Meta AI work is told through the career cards below, so the portfolio
// gallery shows the rest (Yadegar + range) to avoid duplicating it.
const galleryGroups = site.workGroups.filter((g) => g.key !== "at-meta");

export default function ProfessionalPage() {
  return (
    <main className="flex-1">
      <section className="mx-auto w-full max-w-5xl px-6 py-16 sm:py-24">
        <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl">
          Professional
        </h1>
        <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
          A decade turning ambiguous, high-stakes problems into products people
          rely on, most recently evaluated AI systems at Meta&apos;s scale.
        </p>

        <div className="mt-16">
          <CareerCards />
        </div>

        <div className="mt-20 space-y-16">
          {galleryGroups.map((group) => {
            const items = site.work.filter((w) => w.group === group.key);
            if (items.length === 0) return null;
            return (
              <Reveal key={group.key}>
                <SectionLabel>{group.eyebrow}</SectionLabel>
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
      </section>
    </main>
  );
}
