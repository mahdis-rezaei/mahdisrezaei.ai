import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { site } from "@/content/site";
import { workStudies } from "@/content/work-studies";
import { CareerCards } from "@/components/career-cards";
import { ExperienceTimeline } from "@/components/experience-timeline";
import { Principles } from "@/components/principles";
import { TestimonialCarousel } from "@/components/testimonial-carousel";
import { SectionLabel } from "@/components/section-label";
import { Tabs } from "@/components/tabs";

export const metadata: Metadata = {
  title: "Professional",
  description:
    "The professional work of Mahdis Rezaei: building trusted AI at scale at Meta, a decade of product work across Amazon, GoodRx, GlobeTax, Blue Apron, and Imprivata, and what the people she has built with say about her.",
  alternates: { canonical: "/work" },
};

/** The chronological career, company by company. */
function CareerHistory() {
  return (
    <div>
      <SectionLabel>Career history</SectionLabel>
      <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
        Eleven years, six companies
      </h2>
      <p className="mt-3 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
        From a fifteen-person startup to the largest platforms in the world, and
        from program management into the AI product work I care most about.
      </p>
      <div className="mt-10">
        <ExperienceTimeline />
      </div>
    </div>
  );
}

/** Impact metrics, then the case studies. Kept simple. */
function CareerHighlights() {
  return (
    <div>
      <CareerCards />

      <section className="mt-16">
        <SectionLabel>Selected case studies</SectionLabel>
        <ul className="mt-6 divide-y divide-border border-y border-border">
          {Object.entries(workStudies).map(([slug, study]) => (
            <li key={slug}>
              <Link
                href={`/work/${slug}`}
                className="group flex items-start justify-between gap-6 py-5 transition-colors hover:text-primary"
              >
                <div>
                  <h3 className="font-display text-lg font-semibold tracking-tight">
                    {study.title}
                  </h3>
                  <p className="mt-1 text-pretty leading-relaxed text-muted-foreground">
                    {study.tagline}
                  </p>
                </div>
                <ArrowRight className="mt-1.5 h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-300 group-hover:translate-x-0.5 group-hover:text-primary" />
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default function ProfessionalPage() {
  return (
    <main className="flex-1">
      <section className="mx-auto w-full max-w-5xl px-6 py-16 sm:py-24">
        {site.portrait && (
          <div className="relative mb-7 h-24 w-24 overflow-hidden rounded-2xl border border-border shadow-lg shadow-primary/10">
            <Image
              src={site.portrait}
              alt={`Portrait of ${site.name}`}
              fill
              sizes="96px"
              className="object-cover"
            />
          </div>
        )}
        <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl">
          Professional
        </h1>
        <p className="mt-5 max-w-2xl text-pretty text-xl leading-relaxed">
          For eleven years, I&apos;ve built products where trust is the real
          product requirement.
        </p>
        <div className="mt-5 max-w-2xl space-y-4 text-pretty leading-relaxed text-muted-foreground">
          <p>
            My work has moved across startups, consumer marketplaces, enterprise
            platforms, subscriptions, ads, identity, and now AI. The domains
            changed, but the pattern got sharper: take ambiguous, high-stakes
            judgment and turn it into systems that are evaluated, calibrated, and
            trustworthy enough to scale.
          </p>
          <p>
            Today, that work sits at the center of AI product leadership. I build
            the infrastructure behind LLM enforcement, agentic investigation,
            workflow automation, human oversight, evaluation, and production
            launch gates.
          </p>
          <p>
            The through-line is not just shipping products. It is knowing how to
            make complex systems safe enough for people and businesses to rely
            on: where AI should act, where it should recommend, where humans need
            to stay accountable, and where the system should stop.
          </p>
        </div>

        <div className="mt-12">
          <Tabs
            label="Professional sections"
            tabs={[
              {
                id: "history",
                label: "Career history",
                panel: <CareerHistory />,
              },
              {
                id: "highlights",
                label: "Career highlights",
                panel: <CareerHighlights />,
              },
              {
                id: "approach",
                label: "How I work",
                panel: <Principles />,
              },
              {
                id: "feedback",
                label: "What others say",
                panel: <TestimonialCarousel />,
              },
            ]}
          />
        </div>
      </section>
    </main>
  );
}
