import type { MDXComponents } from "mdx/types";

/**
 * Maps MDX elements to components. Required by @next/mdx (App Router).
 * Case-study MDX (Phase 2) will render through a shared layout that
 * supplies styled elements here. Defaults are fine for now.
 */
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
  };
}
