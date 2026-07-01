"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/**
 * Icon visibility is driven by the `.dark` class next-themes sets on <html>
 * (before paint), so there's no hydration mismatch and no mount gating.
 */
export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      type="button"
      aria-label="Toggle color theme"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className={cn(buttonVariants({ variant: "ghost", size: "icon" }))}
    >
      <Moon className="h-[1.15rem] w-[1.15rem] dark:hidden" />
      <Sun className="hidden h-[1.15rem] w-[1.15rem] dark:block" />
    </button>
  );
}
