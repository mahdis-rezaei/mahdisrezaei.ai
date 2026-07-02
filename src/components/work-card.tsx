import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Bell,
  Gauge,
  HeartPulse,
  KeyRound,
  NotebookPen,
  Radar,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import type { WorkIcon, WorkItem } from "@/content/site";
import { cn } from "@/lib/utils";

const ICONS: Record<WorkIcon, LucideIcon> = {
  notebook: NotebookPen,
  shield: ShieldCheck,
  gauge: Gauge,
  radar: Radar,
  key: KeyRound,
  bell: Bell,
  pulse: HeartPulse,
};

export function WorkCard({ work }: { work: WorkItem }) {
  const Icon = ICONS[work.icon];
  const caseHref = work.slug ? `/work/${work.slug}` : undefined;
  const caseLabel =
    work.group === "built-solo" ? "See how I built it" : "Read the case study";

  return (
    <article className="group relative flex flex-col rounded-xl border border-border bg-card p-6 transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
      <div className="flex items-start justify-between gap-3">
        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <Icon className="h-6 w-6" strokeWidth={1.75} />
        </span>
        {work.platform && (
          <span className="mt-1 text-xs font-medium uppercase tracking-widest text-muted-foreground">
            {work.platform}
          </span>
        )}
      </div>

      <h3 className="mt-5 font-display text-xl font-semibold leading-snug">
        {caseHref ? (
          <Link
            href={caseHref}
            className="after:absolute after:inset-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            {work.title}
          </Link>
        ) : (
          work.title
        )}
      </h3>

      <p className="mt-2 text-pretty leading-relaxed text-muted-foreground">
        {work.outcome}
      </p>

      <ul className="mt-5 flex flex-wrap gap-2">
        {work.tags.map((tag) => (
          <li
            key={tag}
            className="rounded-full border border-border px-2.5 py-0.5 text-xs font-medium text-muted-foreground"
          >
            {tag}
          </li>
        ))}
      </ul>

      {/* CTAs sit above the stretched card link so they stay clickable. */}
      {(caseHref || work.ctas?.length) && (
        <div className="relative z-10 mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 pt-1">
          {caseHref && (
            <Link
              href={caseHref}
              className={cn(
                "inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80",
              )}
            >
              {caseLabel}
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
          )}
          {work.ctas?.map((cta) => (
            <a
              key={cta.href}
              href={cta.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-sm font-medium text-foreground transition-colors hover:text-primary"
            >
              {cta.label}
              <ArrowUpRight className="h-4 w-4" />
            </a>
          ))}
        </div>
      )}
    </article>
  );
}
