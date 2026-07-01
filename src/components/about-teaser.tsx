import Link from "next/link";
import { site } from "@/content/site";

export function AboutTeaser() {
  const { about } = site;

  return (
    <section className="mx-auto w-full max-w-3xl px-6 py-16 sm:py-20">
      <p className="text-balance font-display text-2xl font-medium leading-snug tracking-tight sm:text-3xl">
        {about.teaser}
      </p>
      <Link
        href={about.teaserCta.href}
        className="mt-6 inline-block text-sm font-medium text-primary transition-colors hover:text-primary/80"
      >
        {about.teaserCta.label} →
      </Link>
    </section>
  );
}
