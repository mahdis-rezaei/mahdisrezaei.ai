import type { Metadata } from "next";
import Image from "next/image";
import { site } from "@/content/site";
import { AboutTimeline } from "@/components/about-timeline";
import { Practices } from "@/components/practices";
import { Beliefs } from "@/components/beliefs";
import { Tabs } from "@/components/tabs";

export const metadata: Metadata = {
  title: "About",
  description:
    "Mahdis Rezaei: six countries, one through-line. Turning ambiguous, high-trust problems into products people rely on. Staff PM at Meta and the solo builder of Yadegar.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  const { about } = site;

  return (
    <main className="flex-1">
      <article className="mx-auto w-full max-w-3xl px-6 py-16 sm:py-24">
        {site.portrait && (
          <div className="group relative mb-7 h-24 w-24 overflow-hidden rounded-2xl border border-border shadow-lg shadow-primary/10">
            <Image
              src={site.portrait}
              alt={`Portrait of ${site.name}`}
              fill
              sizes="96px"
              className="object-cover grayscale-[0.85] contrast-[0.97] transition-[filter] duration-500 ease-out group-hover:grayscale-0"
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
              { id: "journey", label: "Journey", panel: <AboutTimeline /> },
              {
                id: "clock",
                label: "Off the clock",
                panel: (
                  <>
                    <Practices />
                    <div className="mt-16 border-t border-border pt-14">
                      <Beliefs />
                    </div>
                  </>
                ),
              },
            ]}
          />
        </div>
      </article>
    </main>
  );
}
