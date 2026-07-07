import { ArrowUpRight, ChevronDown } from "lucide-react";
import type { Poem } from "@/content/about";
import { cn } from "@/lib/utils";

/**
 * An expandable reading list of poems. Each row collapses to just the title
 * and poet so it stays out of the way; expanding reveals a short, attributed
 * excerpt and a link to the full poem elsewhere (the texts are copyrighted, so
 * we quote a few lines and send readers to the source rather than host them).
 *
 * Built on native <details> so it works without JavaScript and stays keyboard
 * and screen-reader friendly.
 */
export function PoetryShelf({ poems }: { poems: Poem[] }) {
  return (
    <div className="mt-5">
      <p className="font-mono text-[0.62rem] uppercase tracking-widest text-muted-foreground">
        A few I keep close
      </p>
      <div className="mt-3 divide-y divide-border overflow-hidden rounded-xl border border-border">
        {poems.map((poem) => (
          <details key={poem.title} className="group bg-card open:bg-secondary">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-4 py-3.5 [&::-webkit-details-marker]:hidden">
              <span className="min-w-0 truncate">
                <span className="font-display text-sm font-semibold tracking-tight">
                  {poem.title}
                </span>
                <span className="ml-2 text-xs text-muted-foreground">
                  {poem.poet}
                </span>
              </span>
              <ChevronDown
                aria-hidden
                className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-300 group-open:rotate-180"
              />
            </summary>

            <div className="px-4 pb-4">
              <blockquote
                dir={poem.lang === "fa" ? "rtl" : "ltr"}
                className={cn(
                  "text-pretty font-display leading-relaxed text-muted-foreground",
                  poem.lang === "fa"
                    ? "border-r-2 border-primary pr-4 text-right text-lg"
                    : "border-l-2 border-primary pl-4",
                )}
              >
                {poem.excerpt.map((line, i) => (
                  <span key={i} className="block">
                    {line}
                  </span>
                ))}
              </blockquote>
              <a
                href={poem.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline"
              >
                Read the full poem
                <ArrowUpRight aria-hidden className="h-3.5 w-3.5" />
              </a>
            </div>
          </details>
        ))}
      </div>
    </div>
  );
}
