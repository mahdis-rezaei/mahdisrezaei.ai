import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { getWork, workWithPages } from "@/content/site";

// Pre-render one page per work item that has a slug.
export function generateStaticParams() {
  return workWithPages.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const work = getWork(slug);
  if (!work) return {};
  return {
    title: work.title,
    description: work.outcome,
    alternates: { canonical: `/work/${work.slug}` },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const work = getWork(slug);
  if (!work) notFound();

  return (
    <main className="flex-1">
      <article className="mx-auto w-full max-w-3xl px-6 py-16 sm:py-24">
        <Link
          href="/work"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" /> All work
        </Link>

        <h1 className="mt-6 text-balance text-4xl font-bold tracking-tight sm:text-5xl">
          {work.title}
        </h1>
        <p className="mt-5 text-pretty text-xl leading-relaxed text-muted-foreground">
          {work.outcome}
        </p>

        <ul className="mt-6 flex flex-wrap gap-2">
          {work.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-border px-2.5 py-0.5 text-xs font-medium text-muted-foreground"
            >
              {tag}
            </li>
          ))}
        </ul>

        <div className="mt-12 rounded-2xl border border-border bg-card p-6 text-muted-foreground sm:p-8">
          The full case study, covering context, the call I made, what I did,
          and the impact, is coming in the next pass.
        </div>
      </article>
    </main>
  );
}
