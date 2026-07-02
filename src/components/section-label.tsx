import { cn } from "@/lib/utils";

/**
 * Editorial section marker — a mono index number + label, e.g. "01 / Work".
 * The mono numeral is the one deliberate "engineered" detail (PRD keeps the
 * overall look non-terminal).
 */
export function SectionLabel({
  index,
  children,
  tone = "default",
  className,
}: {
  index?: string;
  children: React.ReactNode;
  tone?: "default" | "invert";
  className?: string;
}) {
  return (
    <p
      className={cn(
        "flex items-center gap-2.5 text-sm font-medium uppercase tracking-widest",
        tone === "invert" ? "text-white/60" : "text-muted-foreground",
        className,
      )}
    >
      {index && (
        <span
          className={cn(
            "font-mono text-xs",
            tone === "invert" ? "text-primary-foreground/90" : "text-primary",
          )}
        >
          {index}
        </span>
      )}
      <span
        aria-hidden
        className={cn(
          "h-px w-6",
          tone === "invert" ? "bg-white/25" : "bg-border",
        )}
      />
      {children}
    </p>
  );
}
