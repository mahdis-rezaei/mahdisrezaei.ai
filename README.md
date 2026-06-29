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
- **Fonts** via `next/font`: Space Grotesk (display) + Geist (body)
- Deploys to **Vercel**

## Content model

All visitor-facing copy lives in data, never inline in components:

- `src/content/site.ts` — typed structured content (hero, nav, links, SEO)
- `src/content/work/*.mdx` — case studies (Phase 2)

## Design tokens (PRD §10 — a builder's gallery, deliberately NOT Yadegar)

Neutral chrome + one energetic signature accent, so each project's own colors
carry the personality and the site signals *range*:

- Light base `#FAFAF8` · ink `#16161A` · muted `#6B6B70`
- Dark base `#0E0E11` / cards `#141417` · text `#F4F4F2` · muted `#9A9AA2`
- Signature accent: **electric indigo `#5A4BE3`** (used sparingly)
- Display **Space Grotesk**, body **Geist** (General Sans's sanctioned alt)

Tokens map to shadcn-style semantic CSS variables so future primitives inherit
the system. `--indigo` is a single token if the exact accent hue is ever retuned.

> Note: the spec names **General Sans** for body; it's a Fontshare font and
> isn't reachable from this build environment, so Geist (the PRD's listed
> alternate) is used. Swap in General Sans later by self-hosting its woff2.

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
