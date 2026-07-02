import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { site } from "@/content/site";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "About",
  description:
    "Mahdis Rezaei — how a life across six countries became a career turning ambiguous, high-trust problems into products people rely on.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  const { about } = site;

  return (
    <main className="flex-1">
      <article className="mx-auto w-full max-w-3xl px-6 py-16 sm:py-24">
        {site.portrait && (
          <div className="relative mb-8 h-28 w-28 overflow-hidden rounded-2xl border border-border">
            <Image
              src={site.portrait}
              alt={`Portrait of ${site.name}`}
              fill
              sizes="112px"
              className="object-cover"
            />
          </div>
        )}
        <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl">
          {about.title}
        </h1>
        <p className="mt-5 text-pretty text-xl leading-relaxed text-muted-foreground">
          {about.lede}
        </p>

        <div className="mt-10 space-y-6 text-lg leading-relaxed">
          {about.paragraphs.map((p, i) => (
            <p key={i} className="text-pretty">
              {p}
            </p>
          ))}
        </div>

        <section className="mt-14">
          <h2 className="font-display text-xl font-semibold tracking-tight">
            {about.knownForHeading}
          </h2>
          <ul className="mt-4 space-y-3">
            {about.knownFor.map((item) => (
              <li key={item} className="flex gap-3 leading-relaxed">
                <span
                  aria-hidden
                  className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                />
                <span className="text-pretty">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-14 rounded-2xl border border-border bg-card p-6 sm:p-8">
          <h2 className="font-display text-xl font-semibold tracking-tight">
            {about.nowHeading}
          </h2>
          <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
            {about.now}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/contact" className={cn(buttonVariants())}>
              Get in touch
            </Link>
            <Link
              href="/work"
              className={cn(buttonVariants({ variant: "outline" }))}
            >
              See my work
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}
