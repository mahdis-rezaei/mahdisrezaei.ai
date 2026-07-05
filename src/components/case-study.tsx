import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import type { Block, CaseStudy as CaseStudyType } from "@/content/building";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function renderBlock(block: Block, i: number) {
  switch (block.type) {
    case "h2":
      return (
        <h2
          key={i}
          className="mt-14 font-display text-2xl font-bold tracking-tight sm:text-3xl"
        >
          {block.text}
        </h2>
      );
    case "quote":
      return (
        <blockquote
          key={i}
          className="my-8 border-l-2 border-primary pl-5 font-display text-xl font-medium italic leading-snug tracking-tight text-balance sm:text-2xl"
        >
          {block.text}
        </blockquote>
      );
    case "list":
      return (
        <ul key={i} className="mt-5 space-y-3">
          {block.items.map((item, j) => (
            <li key={j} className="flex gap-3 leading-relaxed">
              <span
                aria-hidden
                className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
              />
              <span className="text-pretty text-muted-foreground">{item}</span>
            </li>
          ))}
        </ul>
      );
    default:
      return (
        <p key={i} className="mt-5 text-pretty text-lg leading-relaxed">
          {block.text}
        </p>
      );
  }
}

export function CaseStudy({ study }: { study: CaseStudyType }) {
  return (
    <main className="flex-1">
      <article className="mx-auto w-full max-w-3xl px-6 py-16 sm:py-24">
        <Link
          href="/building"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" /> Building
        </Link>

        <h1 className="mt-6 text-balance text-4xl font-bold tracking-tight sm:text-5xl">
          {study.title}
        </h1>
        <p className="mt-4 text-pretty text-xl leading-relaxed text-muted-foreground">
          {study.tagline}
        </p>

        <dl className="mt-8 grid gap-x-8 gap-y-4 border-y border-border py-6 sm:grid-cols-[7rem_1fr]">
          {study.meta.map((m) => (
            <div key={m.label} className="sm:contents">
              <dt className="font-mono text-xs uppercase tracking-widest text-primary">
                {m.label}
              </dt>
              <dd className="mt-1 text-pretty leading-relaxed text-muted-foreground sm:mt-0">
                {m.value}
              </dd>
            </div>
          ))}
        </dl>

        {study.links.length > 0 && (
          <div className="mt-8 flex flex-wrap gap-3">
            {study.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                {...(l.external ? { target: "_blank", rel: "noreferrer" } : {})}
                className={cn(buttonVariants(), "gap-1.5")}
              >
                {l.label}
                {l.external && <ArrowUpRight className="h-4 w-4" />}
              </a>
            ))}
          </div>
        )}

        <div className="mt-10">{study.blocks.map(renderBlock)}</div>
      </article>
    </main>
  );
}
