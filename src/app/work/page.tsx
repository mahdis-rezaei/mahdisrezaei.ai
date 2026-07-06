import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { workStudies } from "@/content/work-studies";
import { careerEarlier } from "@/content/site";
import { CareerCards } from "@/components/career-cards";
import { ExperienceTimeline } from "@/components/experience-timeline";
import { TestimonialWall } from "@/components/testimonial-wall";
import { SectionLabel } from "@/components/section-label";
import { Tabs } from "@/components/tabs";

export const metadata: Metadata = {
  title: "Professional",
  description:
    "The professional work of Mahdis Rezaei: building trusted AI at scale at Meta, a decade of product work across Amazon, GoodRx, GlobeTax, Blue Apron, and Imprivata, and what the people she has built with say about her.",
  alternates: { canonical: "/work" },
};

/** Tab 1 — the marquee AI work, plus the deep case-study index. */
function CareerHighlights() {
  return (
    <div>
      <CareerCards />

      <section className="mt-20">
        <SectionLabel>Selected work</SectionLabel>
        <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
          By company
        </h2>

        {/* Meta: the case studies, clickable */}
        <div className="mt-10">
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <h3 className="font-display text-2xl font-bold tracking-tight">
              Meta
            </h3>
            <span className="font-mono text-[0.7rem] uppercase tracking-widest text-primary">
              Product leader · Integrity and Monetization
            </span>
            <span className="ml-auto font-mono text-[0.7rem] uppercase tracking-widest text-muted-foreground">
              2022 to now
            </span>
          </div>
          <ul className="mt-5 divide-y divide-border border-y border-border">
            {Object.entries(workStudies).map(([slug, study]) => (
              <li key={slug}>
                <Link
                  href={`/work/${slug}`}
                  className="group flex items-start justify-between gap-6 py-4 transition-colors hover:text-primary"
                >
                  <div>
                    <h4 className="font-display text-lg font-semibold tracking-tight">
                      {study.title}
                    </h4>
                    <p className="mt-1 text-pretty leading-relaxed text-muted-foreground">
                      {study.tagline}
                    </p>
                  </div>
                  <ArrowRight className="mt-1.5 h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-300 group-hover:translate-x-0.5 group-hover:text-primary" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Before Meta: a compact career arc */}
        <div className="mt-12">
          <p className="font-mono text-[0.7rem] uppercase tracking-widest text-muted-foreground">
            Before Meta
          </p>
          <ul className="mt-5 divide-y divide-border border-y border-border">
            {careerEarlier.map((c) => (
              <li
                key={c.company}
                className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 py-4"
              >
                <div className="min-w-0">
                  <div className="flex flex-wrap items-baseline gap-x-2.5">
                    <span className="font-display text-lg font-semibold tracking-tight">
                      {c.company}
                    </span>
                    <span className="text-sm text-primary">{c.role}</span>
                  </div>
                  <p className="mt-1 text-pretty text-sm leading-relaxed text-muted-foreground">
                    {c.note}
                  </p>
                </div>
                <span className="font-mono text-[0.7rem] uppercase tracking-widest text-muted-foreground">
                  {c.period}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

/** Tab 2 — the chronological career, company by company. */
function CareerHistory() {
  return (
    <div>
      <SectionLabel>Career history</SectionLabel>
      <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
        A decade, six companies
      </h2>
      <p className="mt-3 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
        From program management into product, and toward the AI work I care most
        about.
      </p>
      <div className="mt-10">
        <ExperienceTimeline />
      </div>
    </div>
  );
}

export default function ProfessionalPage() {
  return (
    <main className="flex-1">
      <section className="mx-auto w-full max-w-5xl px-6 py-16 sm:py-24">
        <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl">
          Professional
        </h1>
        <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
          I&apos;ve built for more than a decade across startups and some of the
          largest platforms in the world: consumer, enterprise, and now AI. The
          titles changed as I went, but the job never really did. Take something
          ambiguous and high-stakes, and turn it into something real that people
          can trust.
        </p>

        <div className="mt-12">
          <Tabs
            label="Professional sections"
            tabs={[
              {
                id: "highlights",
                label: "Career highlights",
                panel: <CareerHighlights />,
              },
              {
                id: "history",
                label: "Career history",
                panel: <CareerHistory />,
              },
              {
                id: "feedback",
                label: "What others say",
                panel: <TestimonialWall />,
              },
            ]}
          />
        </div>
      </section>
    </main>
  );
}
