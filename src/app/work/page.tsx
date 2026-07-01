import type { Metadata } from "next";
import { site } from "@/content/site";
import { WorkCard } from "@/components/work-card";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected product work by Mahdis Rezaei — AI platforms, trust & safety, enterprise identity, and Yadegar, built end to end.",
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

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {site.selectedWork.map((work) => (
            <WorkCard key={work.slug} work={work} />
          ))}
        </div>

        <p className="mt-10 text-sm text-muted-foreground">
          The full experience timeline and deep case studies are coming next.
        </p>
      </section>
    </main>
  );
}
