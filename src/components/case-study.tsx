import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import type { Block, CaseStudy as CaseStudyType } from "@/content/building";
import { buildImages } from "@/content/build-images";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/** Stable anchor id from a heading's text. */
function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/** Ordered anchor slugs for each block (null unless it is an h2), deduped. */
function headingSlugs(blocks: Block[]) {
  const seen: Record<string, number> = {};
  return blocks.map((b) => {
    if (b.type !== "h2") return null;
    let slug = slugify(b.text);
    if (seen[slug]) slug = `${slug}-${++seen[slug]}`;
    else seen[slug] = 1;
    return slug;
  });
}

function renderBlock(block: Block, i: number, slug: string | null) {
  switch (block.type) {
    case "h2":
      return (
        <h2
          key={i}
          id={slug ?? undefined}
          className="mt-14 scroll-mt-24 font-display text-2xl font-bold tracking-tight sm:text-3xl"
        >
          {block.text}
        </h2>
      );
    case "quote":
      return (
        <blockquote key={i} className="my-8 border-l-2 border-primary pl-5">
          <p className="font-display text-xl font-medium italic leading-snug tracking-tight text-balance sm:text-2xl">
            {block.text}
          </p>
          {block.cite && (
            <cite className="mt-3 block font-mono text-[0.62rem] uppercase not-italic tracking-widest text-primary">
              {block.cite}
            </cite>
          )}
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

export function CaseStudy({
  study,
  backHref = "/building",
  backLabel = "Building",
}: {
  study: CaseStudyType;
  backHref?: string;
  backLabel?: string;
}) {
  const icon = study.iconImage ? buildImages[study.iconImage] : null;
  const slugs = headingSlugs(study.blocks);
  const toc = study.blocks
    .map((b, i) => (b.type === "h2" ? { text: b.text, slug: slugs[i]! } : null))
    .filter((x): x is { text: string; slug: string } => x !== null);
  return (
    <main className="flex-1">
      <article className="mx-auto w-full max-w-3xl px-6 py-16 sm:py-24">
        <Link
          href={backHref}
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" /> {backLabel}
        </Link>

        {icon && (
          <Image
            src={icon}
            alt={`${study.title} app icon`}
            width={64}
            height={64}
            className="mt-8 h-16 w-16 rounded-2xl border border-border object-cover shadow-sm"
          />
        )}

        <h1
          className={cn(
            "text-balance text-4xl font-bold tracking-tight sm:text-5xl",
            icon ? "mt-5" : "mt-6",
          )}
        >
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

        {toc.length >= 2 && (
          <nav
            aria-label="Contents"
            className="mt-10 rounded-xl border border-border bg-card p-5 sm:p-6"
          >
            <p className="font-mono text-[0.62rem] uppercase tracking-widest text-muted-foreground">
              Contents
            </p>
            <ol className="mt-3 space-y-2">
              {toc.map((h, i) => (
                <li key={h.slug} className="flex gap-3 leading-relaxed">
                  <span className="font-mono text-xs tabular-nums text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <a
                    href={`#${h.slug}`}
                    className="text-pretty text-muted-foreground underline-offset-4 transition-colors hover:text-primary hover:underline"
                  >
                    {h.text}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        )}

        <div className="mt-10">
          {study.blocks.map((b, i) => renderBlock(b, i, slugs[i]))}
        </div>
      </article>
    </main>
  );
}
