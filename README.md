# mahdisrezaei.ai

Personal site for **Mahdis Rezaei** — Staff Product Manager and builder.
A fast, warm, editorial portfolio that positions her as a *product leader who builds*.

Built against [`PRD.md`](./PRD.md); copy lives in [`website-content.md`](./website-content.md).

## Stack

- **Next.js 16** (App Router) + **TypeScript** — static generation for SEO
- **Tailwind CSS v4** — CSS-first config, design tokens in `src/app/globals.css`
- **shadcn/ui** foundation (`components.json`, `cn` util) — primitives added per phase
- **next-themes** — light/dark, follows `prefers-color-scheme` + manual toggle
- **MDX** (`@next/mdx`) — for long-form case studies (Phase 2)
- Deploys to **Vercel**

## Content model

All visitor-facing copy lives in data, never inline in components:

- `src/content/site.ts` — typed structured content (hero, nav, links, SEO)
- `src/content/work/*.mdx` — case studies (Phase 2)

## Design tokens (PRD §10 — Yadegar palette)

Warm editorial minimalism, brand-cohesive with Mahdis's app Yadegar:

- Parchment `#F3EAD7` · ink `#2B2722` · terracotta `#9A5B43` · gold `#D2A857`
- Body **Inter**, headings **Fraunces**; dark mode = warm charcoal `#16140F`

Tokens map to shadcn-style semantic CSS variables so future primitives inherit the brand.

## Scripts

```bash
npm run dev     # local dev at http://localhost:3000
npm run build   # production build (static)
npm run start   # serve the production build
npm run lint    # ESLint
```

## Build phases (PRD §16)

- **Phase 0 — scaffold + tokens + hero** ✅ (this commit)
- Phase 1 — home sections, About, contact, nav, theme toggle, resume
- Phase 2 — experience timeline, case studies, /building page
- Phase 3 — OG image, JSON-LD polish, sitemap/robots, analytics, a11y/perf pass

## Inputs still needed

- `public/resume.pdf` — the public resume
- `public/photo.jpg` — a warm professional portrait
- Confirm employment dates (`[confirm]` marks in `website-content.md`)
