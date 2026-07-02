import Link from "next/link";
import { site } from "@/content/site";
import { SectionLabel } from "@/components/section-label";
import { Reveal } from "@/components/reveal";

export function AboutTeaser() {
  const { about } = site;

  return (
    <Reveal
      as="section"
      className="mx-auto w-full max-w-3xl px-6 py-20 sm:py-24"
    >
      <SectionLabel index="03">About</SectionLabel>
      <p className="mt-6 text-balance font-display text-2xl font-medium leading-snug tracking-tight sm:text-3xl">
        {about.teaser}
      </p>
      <Link
        href={about.teaserCta.href}
        className="mt-6 inline-block text-sm font-medium text-primary transition-colors hover:text-primary/80"
      >
        {about.teaserCta.label} →
      </Link>
    </Reveal>
  );
}
