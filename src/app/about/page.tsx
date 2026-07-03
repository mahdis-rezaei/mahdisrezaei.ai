import type { Metadata } from "next";
import Image from "next/image";
import { site } from "@/content/site";
import { AboutTimeline } from "@/components/about-timeline";
import { CareerCards } from "@/components/career-cards";
import { Principles } from "@/components/principles";
import { Practices } from "@/components/practices";
import { BeliefsBand } from "@/components/beliefs-band";
import { Tabs } from "@/components/tabs";

export const metadata: Metadata = {
  title: "About",
  description:
    "Mahdis Rezaei — six countries, one through-line: turning ambiguous, high-trust problems into products people rely on. Staff PM at Meta and the solo builder of Yadegar.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  const { about } = site;

  return (
    <main className="flex-1">
      <article className="mx-auto w-full max-w-3xl px-6 py-16 sm:py-24">
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
        <h1 className="text-balance text-4xl font-bold leading-[1.02] tracking-tight sm:text-6xl">
          {about.title}
        </h1>
        <p className="mt-5 max-w-md text-pretty text-xl leading-relaxed text-muted-foreground">
          {about.lede}
        </p>

        <div className="mt-12">
          <Tabs
            label="About sections"
            tabs={[
              { id: "personal", label: "Personal", panel: <AboutTimeline /> },
              { id: "career", label: "Career", panel: <CareerCards /> },
              { id: "work", label: "How I work", panel: <Principles /> },
              { id: "clock", label: "Off the clock", panel: <Practices /> },
            ]}
          />
        </div>

        <BeliefsBand />
      </article>
    </main>
  );
}
