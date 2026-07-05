import type { Metadata } from "next";
import { CareerCards } from "@/components/career-cards";
import { ExperienceTimeline } from "@/components/experience-timeline";
import { SectionLabel } from "@/components/section-label";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Professional",
  description:
    "The professional work of Mahdis Rezaei: building trusted AI at scale at Meta, plus a decade of product work across Amazon, GoodRx, GlobeTax, Blue Apron, and Imprivata.",
  alternates: { canonical: "/work" },
};

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

        <div className="mt-16">
          <CareerCards />
        </div>

        <Reveal as="section" className="mt-20">
          <SectionLabel>Career history</SectionLabel>
          <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            A decade, six companies
          </h2>
          <p className="mt-3 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
            From program management into product, and toward the AI work I care
            most about.
          </p>
          <div className="mt-10">
            <ExperienceTimeline />
          </div>
        </Reveal>
      </section>
    </main>
  );
}
