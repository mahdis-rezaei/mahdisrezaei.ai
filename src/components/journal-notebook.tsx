import { ChevronDown } from "lucide-react";

/**
 * A compact, expandable set of short journaling excerpts. Collapsed to a single
 * summary row so it stays out of the way; expands to a few curated lines (names
 * and specifics left out). Built on native <details>, matching the poetry and
 * places bands.
 */
export function JournalNotebook({
  notebook,
}: {
  notebook: { summary: string; entries: string[] };
}) {
  return (
    <div className="mt-5">
      <details className="group overflow-hidden rounded-xl border border-border bg-card open:bg-secondary">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-4 py-3.5 [&::-webkit-details-marker]:hidden">
          <span className="font-mono text-[0.62rem] uppercase tracking-widest text-muted-foreground">
            {notebook.summary}
          </span>
          <ChevronDown
            aria-hidden
            className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-300 group-open:rotate-180"
          />
        </summary>

        <div className="space-y-4 px-4 pb-4">
          {notebook.entries.map((entry, i) => (
            <blockquote
              key={i}
              className="border-l-2 border-primary pl-4 text-pretty italic leading-relaxed text-muted-foreground"
            >
              {entry}
            </blockquote>
          ))}
        </div>
      </details>
    </div>
  );
}
