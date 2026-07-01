import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { WorkCard as WorkCardType } from "@/content/site";

export function WorkCard({ work }: { work: WorkCardType }) {
  return (
    <Link
      href={`/work/${work.slug}`}
      className="group flex flex-col rounded-xl border border-border bg-card p-6 transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-display text-xl font-semibold leading-snug">
          {work.title}
        </h3>
        <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-muted-foreground transition-[color,transform] duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
      </div>

      <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
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
    </Link>
  );
}
