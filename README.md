# mahdisrezaei.ai

Personal portfolio for Mahdis Rezaei, a Staff Product Manager at Meta who
designs, builds, and ships AI products. A fast, editorial site that shows the
work, the products she has shipped on her own, and how she operates.

## Stack

- **Next.js 16** (App Router) + **TypeScript**, statically generated for SEO
- **Tailwind CSS v4** (CSS-first tokens in `src/app/globals.css`)
- **next-themes** for light/dark (`prefers-color-scheme` + manual toggle)
- **next/font**: Space Grotesk (display), Geist (body), Geist Mono (labels)
- Deployed on **Vercel**

## Content model

All visitor-facing copy is data-driven, never inline in components:

- `src/content/site.ts` — hero, nav, experience, links, SEO
- `src/content/work-studies.ts` — the Meta case studies (`/work/[slug]`)
- `src/content/building.ts` — independent products, Yadegar and Hamzaban
- `src/content/about.ts` — the personal narrative, practices, beliefs
- `src/content/testimonials.ts` — role-anonymized peer feedback

## Scripts

```bash
npm run dev     # local dev at http://localhost:3000
npm run build   # production build (static)
npm run start   # serve the production build
npm run lint    # ESLint
```
