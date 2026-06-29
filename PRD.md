# PRD — Mahdis Rezaei Personal Website

**Owner:** Mahdis Rezaei
**Author:** drafted as a Staff-PM spec, ready to hand to Claude Code
**Status:** v1 draft — review the "Decisions needed" section first, then build
**Purpose of this doc:** a complete, build-ready product spec. Drop it into the website
repo as `PRD.md` and have Claude Code build against it section by section.

---

## 1. One-line goal

A fast, beautiful personal site that gets Mahdis shortlisted for senior/Staff PM roles and
proves the one thing most PMs can't claim: **she designs, builds, and ships real AI products
herself.**

---

## 2. Why this site exists (context)

- Mahdis is a Staff PM at Meta (Central Integrity — AI & agentic platforms), actively
  interviewing for her next senior PM role (Shopify loop in progress).
- She built **Yadegar**, an AI journaling app, end to end — TypeScript monorepo, web + iOS,
  an AI memory engine. That makes her a **"PM who builds,"** which is rare and valuable.
- She wants a home on the internet that a recruiter, hiring manager, or referrer lands on
  and immediately thinks: *strong product leader, technical depth, ships things, distinct
  point of view.*
- Inspiration: a friend's engineer site (shyambv.com) — clean, content-driven, a little
  personality. We're keeping that spirit and raising it to do a real job.

---

## 3. Goals & non-goals

### Goals
1. **Convert visitors into conversations** — a recruiter/HM leaves having emailed her, saved
   her, or downloaded her resume.
2. **Establish positioning in 5 seconds** — "product leader who builds with AI."
3. **Showcase Yadegar** as living proof of the build-with-AI story (with a live link).
4. **Show PM craft** through 2–3 case studies framed as problem → insight → decision → impact.
5. **Be findable** — ranks for "Mahdis Rezaei" and is fully crawlable/shareable (good OG
   cards). This is the #1 technical improvement over the inspiration site.
6. **Feel like her** — warm, human, calm, confident. Not a generic template.

### Non-goals (v1)
- Not a blog engine or CMS. Content lives in typed files; a blog can come later.
- Not a Yadegar marketing site — link out to Yadegar; don't rebuild it here.
- No e-commerce, no auth, no comments, no heavy CMS.
- Not a place for confidential Meta material (see §13).

---

## 4. Success metrics

The site should be instrumented so she can actually measure it (very PM of her):
- **Primary:** contact actions (email clicks, resume downloads, Calendly bookings if used).
- **Secondary:** unique visitors, time on case-study pages, Yadegar click-throughs,
  LinkedIn referrals.
- **Quality bar:** Lighthouse ≥ 95 on Performance, Accessibility, Best Practices, SEO;
  loads in < 1.5s on 4G; works flawlessly on mobile.

---

## 5. Audience & journeys

**Primary:** recruiters and hiring managers for Staff/Senior/Principal PM roles.
**Secondary:** her professional network (potential referrers), and Yadegar-curious
visitors/press.

Design for these three journeys:
1. **The 30-second recruiter.** Lands from LinkedIn → reads the hero → skims selected work →
   clicks resume or email. Must work even if they read *only* the hero.
2. **The deep evaluator (HM).** Reads a case study end to end and the Yadegar page to judge
   depth and judgment. Reward them with substance.
3. **The curious peer.** Reads the About story, maybe tries Yadegar. Wants to know who she is.

---

## 6. Positioning & messaging

**Positioning statement (internal, not shown verbatim):**
> Mahdis is a product leader who pairs Staff-level platform strategy with the rare ability to
> build and ship AI products herself. She turns ambiguous, high-trust problems into systems
> people rely on — at Meta's scale and in her own products.

**Headline — CHOSEN: A.** "Product leader who builds."
*(Rationale: senior PM sites lead with a crisp identity, not a paragraph — Brian Kemler is
"Product Manager, portfolio of impact from Google/Meta"; Arunjeet Singh leads with the AI
apps he builds. Your single differentiator is that you build, so the headline says exactly
that. The other options live on as sub-copy.)*
Alternates kept for reference: B. "I turn ambiguous, high-stakes problems into AI products
people trust." · C. "PM by craft. Builder by instinct."

**Sub-headline (draft):**
> Staff PM at Meta working on AI and agentic systems for trust & safety — and the solo
> builder behind Yadegar, an AI journaling app I designed, built, and shipped end to end.

**Proof points to surface early (3 chips/stats):**
- 10+ years across Meta, Amazon, and high-trust platforms
- Shipped an AI product end to end (web + iOS), solo
- Works AI-native — designs, prototypes, and builds with AI daily

**Voice & tone:** warm, direct, human, energetic — a builder who genuinely loves the work and
obsesses over users. Confident, not corporate. No buzzword stacking; every word earns its place
(same bar as her writing style guide). Avoid "leverage," "robust," "synergy," em-dash pile-ups.

---

## 7. Information architecture

**Recommended:** a single-page scrolling home for the fast read, plus dedicated detail pages
for depth and SEO.

```
/                     Home (hero + selected work + Yadegar feature + about teaser + contact)
/about                The full story (the differentiator)
/work                 Experience timeline + selected work index
/work/[slug]          Individual case study (2–3 of these)
/building             Yadegar feature page (the build-with-AI proof)
/writing              Optional/Phase 2 — notes & essays index
/contact              Contact + resume (can also be a home section)
/resume.pdf           Downloadable resume (static asset)
```

Global nav (sticky, minimal): **Work · Building · About · Contact** + a primary "Get in
touch" button. Keep it to 4 items + CTA.

---

## 8. Page-by-page spec

### 8.1 Home
Sections, top to bottom:
1. **Hero** — name, headline, sub-headline, 2 CTAs ("See my work" + "Get in touch"), the 3
   proof chips, a tasteful portrait or warm abstract mark. Location ("San Francisco /
   remote") small.
2. **Selected work** — 3 cards: the AI platform case study, Yadegar, and one more (MMA or
   Ring). Each card: title, one-line outcome, tags, link to detail page.
3. **Building / Yadegar feature** — a wider band that teases Yadegar with one strong line, a
   visual, and a "See how I built it" + "Visit Yadegar" link.
4. **About teaser** — 2–3 sentences of the story + "Read my story" link.
5. **Contact band** — "Open to senior product roles. Let's talk." + email + LinkedIn +
   resume.
6. **Footer** — nav, socials, "built with Claude Code" (a quiet, on-brand flex), year.

### 8.2 About (the differentiator — give it room)
Draft copy to start from (Claude Code: use as a base, keep her voice):
> I build things — products, teams, and a life that took six countries to assemble.
>
> I was born in a small town in northeast Iran and raised to fit inside lines someone else
> drew. Over twenty years I took those lines apart one at a time: I left at eighteen for
> India with three months of English, earned two degrees, did an MBA in Rome, and built a
> career from nothing — through New York, a startup, Amazon, and now Meta.
>
> Today I'm a Staff PM in Meta's integrity organization, working on AI and agentic systems
> that decide what's safe at the scale of billions of users. And on the side I built Yadegar,
> a private AI journaling app, end to end — because I've kept a journal for twenty years and
> wanted software that shows me what *endured*, not just what happened.
>
> The through-line: I'm happiest turning something ambiguous and hard into something real
> that people trust. That's the job, and it's also the story.

Include: a short "what I'm known for" list (e.g. high-trust AI platforms; turning messy
problems into operating models; building with AI; bringing skeptical engineers along), and a
"now" line ("Open to senior/Staff PM roles — building, interviewing, and writing about AI").

### 8.3 Work — experience + selected work
- **Experience timeline** (PM-framed, from her resume): Meta (Staff PM, Central Integrity —
  AI & agentic platforms; before that Monetization — MMA/enterprise auth, Meta Accounts),
  Amazon (Ring subscriptions), GoodRx, GlobeTax, Blue Apron, Ground Control/Imprivata. Each:
  org, role, dates, one-line PM-outcome note.
- **Selected work index** — cards linking to the case studies below.

### 8.4 Case studies — `/work/[slug]` (2–3 total)
Use a consistent template (Claude Code: build one reusable layout):
- Title + one-line outcome
- Context (2–3 sentences)
- The problem / why it mattered
- The insight / the call she made
- What she did
- Impact (see §13 on how to phrase Meta numbers publicly)
- What she learned / would do differently (shows seniority)
- Tags, role, timeframe

Set — **curated against Mahdis's full master portfolio** (decision: "hedge" — lead AI, show
range). **5 deep case studies on /work; feature 3–4 on the home page** (pick by the role you're
applying for); plus a compact **"More work" strip** for consumer range. All Meta work generic
(§13).
1. **"Scaling trusted AI review"** — the integrity AI platform (investigation augmentation +
   workflow automation). The "where AI acts / recommends / escalates" product.
2. **"Yadegar — an AI product, built end to end"** — links to /building or is the same page.
3. **"Enterprise identity from scratch"** — the MMA / enterprise auth work. 0→1 platform, range.
4. **"The eval platform behind safe AI"** — the LLM eval/deployment lifecycle. **Feature on the
   home page for an evaluation / AI-infra role (e.g. Workato).**
5. **"Detection at scale"** — the Detect portfolio (AI-assisted detection + labeling). Your
   **strongest measurable-impact** story; adds ML/detection depth.

**Home-page featuring by role:** AI/eval role → CS4, CS1, CS5, Yadegar. Broad PM role → CS1,
Yadegar, CS3 + the range strip. Default → CS1, CS4, Yadegar (+ CS3/CS5 on /work).

**"More work" strip** (compact cards, not full pages): **Ring Subscriptions** (consumer
subscriptions / billing platform) and **GoodRx** (consumer healthcare marketplace) — for range,
so Mahdis isn't pigeonholed as only an integrity-AI PM. Full copy in `website-content.md`.

**Considered but folded in (not separate):** i3E AI Strategy (overlaps with CS1/CS4), OOPS /
Mesa / AI Chat (conversational-AI guardrails — overlaps with CS1). Mention within CS1/CS4 if
useful; don't give them their own pages.

### 8.5 Building / Yadegar — `/building`
The proof-of-build page. Draft spine:
- **What it is:** "Yadegar is a private, AI journaling companion. It reads across all your
  entries and hands you back one page worth returning to, in your own words — the thread that
  endured, not the noise of the day." (*Yadegar* means "keepsake" in Persian.)
- **Why I built it:** the 20-year-journal insight + privacy-first conviction (pull from
  founder-story.md, her approved public version).
- **What I built (the credibility):** TypeScript monorepo; React + Vite web (live); Expo /
  React Native iOS (in App Store submission); an AI memory engine on the Anthropic API;
  end-to-end encryption (AES-256-GCM) with on-device search; safety gates for hard moments.
- **My role:** designed, built, and shipped it solo — product, architecture, and code.
- **Links:** Visit Yadegar (live web), App Store (when live), GitHub if she wants it public.
- **Principles it's built on:** privacy first, calm and minimal, no manipulative patterns,
  reflection over engagement. (These double as a statement of her product taste.)

### 8.6 Contact — `/contact` (or a home band)
- Warm one-liner: "Open to senior product roles, and always happy to talk products, AI, or
  building. Reach me here."
- Email (mailto), LinkedIn, optional X/Twitter, GitHub, resume download, optional Calendly.
- Keep it human, not a form wall. A simple mailto + links is enough for v1.

### 8.7 Writing (Phase 2, optional)
If/when she writes: an index of notes/essays on AI, product, and building. Skip in v1 unless
she has 2–3 pieces ready; an empty blog hurts more than no blog.

---

## 9. Content data model

Keep **all content in one typed file** (`src/content/site.ts`) so the site is trivial to
update and Claude Code can scaffold UI against a stable shape. Example schema:

```ts
export const site = {
  name: "Mahdis Rezaei",
  role: "Staff Product Manager",
  location: "San Francisco / Remote",
  headline: "Product leader who builds.",
  subhead: "Staff PM at Meta on AI & agentic systems for trust & safety — and the solo builder behind Yadegar, an AI journaling app I shipped end to end.",
  proofChips: ["10+ yrs · Meta, Amazon", "Shipped an AI product solo (web + iOS)", "Builds AI-native"],
  openToWork: true,

  selectedWork: [
    { slug: "trusted-ai-review", title: "Scaling trusted AI review", outcome: "Moved high-stakes review from humans to evaluated AI without losing trust.", tags: ["AI platform","Trust & Safety","0→1"], featured: true },
    { slug: "yadegar", title: "Yadegar — an AI product, built end to end", outcome: "Designed, built, and shipped a private AI journaling app solo.", tags: ["AI","0→1","Founder"], featured: true },
    { slug: "enterprise-identity", title: "Enterprise identity from scratch", outcome: "Built a platform that secured enterprise access at scale.", tags: ["Platform","Enterprise"], featured: false },
  ],

  experience: [
    { org: "Meta", role: "Staff PM · Central Integrity (AI & Agentic Platforms)", period: "2024 — now", note: "Own the AI platform portfolio for integrity — LLM evaluation, investigation augmentation, and workflow automation." },
    { org: "Meta", role: "PM · Monetization", period: "2022 — 2024", note: "Built enterprise identity/auth and consumer single sign-on for Meta's ad platform." },
    { org: "Amazon", role: "TPM · Ring", period: "—", note: "Launched and grew Ring subscription tiers and billing." },
    { org: "GoodRx", role: "TPM", period: "—", note: "Consumer healthcare affordability — app and web for medication savings." },
    // …GlobeTax, Blue Apron, Ground Control
  ],

  caseStudies: [ /* full long-form per §8.4, can live as MDX */ ],

  yadegar: { tagline: "...", what: "...", why: "...", built: ["..."], links: { web: "https://...", appStore: "" } },

  links: [
    { label: "Email", href: "mailto:mahdis.rezaei87@gmail.com" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/<handle>" },
    { label: "GitHub", href: "https://github.com/mahdis-rezaei" },
    { label: "Resume", href: "/resume.pdf" },
  ],
}
```

Long-form case studies are best as **MDX files** (`src/content/work/*.mdx`) so prose stays
readable and Claude Code renders them with a shared layout.

---

## 10. Design system

**Direction — CHOSEN: a confident builder's gallery. Deliberately NOT Yadegar.** Mahdis owns
many products; the site must read as *her* — a versatile, energetic, user-obsessed product
builder — not as an extension of one product's taste. So the site is a neutral, confident,
energetic *frame*, and each project brings its own color through its screenshots. That is the
literal solution to "I don't want people to think I have one taste": the chrome stays
restrained; the work pops; range is the headline. The feel is modern, energetic, and warm —
someone who genuinely loves building and obsesses over users — NOT a calm literary brand.
(Yadegar is warm parchment + Inter + literary serif; this is the opposite end of the spectrum
on purpose. Also not the terminal/monospace look — that reads engineer.)

- **Color — neutral chrome + ONE energetic signature accent (NOT Yadegar's terracotta):**
  - Light: near-white warm-neutral `#FAFAF8`; ink `#16161A`; muted `#6B6B70`.
  - Dark (KEPT — gallery-like): rich near-black `#0E0E11` / `#141417`; text `#F4F4F2`; muted
    `#9A9AA2`. Respect `prefers-color-scheme` + a manual toggle.
  - **Signature accent — LOCKED: electric indigo `#5A4BE3`.** Energetic and creative but warm
    when it leans violet — holds Mahdis's two halves (energetic builder + empathetic connector).
    Modern/intelligent for an AI builder, distinctive (not default tech-blue), and unrelated to
    Yadegar's terracotta or any product palette, so it signals *her*. (Still one token if she
    ever wants to retune the exact hue, but treat indigo as the decision.)
  - Let product screenshots / case visuals carry the color. Keep UI chrome neutral so range
    shows and no single product's palette dominates the site.
- **Typography (NOT Inter, NOT a literary serif — both read as Yadegar):**
  - Display: a confident contemporary grotesk with character — **Space Grotesk** (alts: Clash
    Display, General Sans). Energetic, geometric, modern.
  - Body: a clean neutral sans that isn't Inter — **General Sans** (alt: Geist). Friendly, crisp.
  - Bold, energetic type scale; tight confident headings.
- **Layout:** gallery-forward — large, beautiful work cards and product visuals do the talking;
  generous whitespace; single readable column (~70ch) for prose. Mobile-first.
- **Energy & motion (this is where "energetic builder" shows):** purposeful motion — smooth
  scroll-in, hover life on cards, a lively hero, one or two moments of delight/personality.
  Always respect `prefers-reduced-motion`. Confident, not corporate; never a parallax circus.
- **Components:** Nav (sticky, minimal), Hero, ProofChips, WorkCard (visual-forward),
  CaseStudyLayout, ExperienceTimeline, ProductFeature (Yadegar), MoreWorkStrip, ContactBand,
  Footer, ThemeToggle.
- **Imagery:** a warm, high-energy professional portrait + crisp product screenshots, each in
  its OWN colors (this is what proves range). Optimize everything (next/image or equivalent).
- **Voice in the UI:** warm, energetic, human — show user-empathy and a love of building. Let
  real personality through; this is a person who *loves* this work.

---

## 11. Tech stack & architecture

**Recommended:** **Next.js (App Router) + TypeScript + Tailwind CSS + shadcn/ui**, deployed
on **Vercel**. Rationale: best-in-class DX for Claude Code, static/SSR for SEO, trivial
custom-domain + HTTPS, free tier is plenty, great image optimization, MDX support.

- **Content:** typed `site.ts` + MDX for case studies (via `next-mdx-remote` or
  `@next/mdx`).
- **Styling:** Tailwind + a small token layer for the palette/type above.
- **Components:** shadcn/ui for primitives; keep it light.
- **Rendering:** static generation (SSG) for everything; no server needed.
- **Forms:** none in v1 (mailto). If a contact form is wanted later, use Formspree/Resend.
- **Repo:** new Git repo, feature branches, clear commits (matches her working style).

**Lighter alternative:** **Astro + Tailwind** — even faster, content-first, great if she
wants minimal JS. Pick one; don't mix. (Avoid the inspiration site's approach of hand-rolled
client-rendered React with no SSR — it tanks SEO and shareability.)

---

## 12. SEO & sharing (the big fix vs. the inspiration site)

- Server-render/static-generate all pages so content is in the HTML (crawlable).
- Per-page `<title>`, meta description, canonical URLs.
- **Open Graph + Twitter cards** with a custom OG image (name + headline) so links look
  great when shared.
- `sitemap.xml` + `robots.txt`.
- JSON-LD `Person` schema (name, jobTitle, sameAs links) so search engines understand who she
  is.
- Semantic headings, descriptive alt text, real anchor text.
- Goal: searching "Mahdis Rezaei" surfaces this site near the top.

---

## 13. Privacy & confidentiality (important — Staff-PM judgment)

This is a **public** site, not a resume handed to one recruiter. Be deliberate:
- **Do not publish Meta internal product codenames** (the internal names of the integrity AI
  systems, the account-compromise workflow, etc.) or internal screenshots. Describe the work
  generically: "an AI platform for high-stakes review," "investigation augmentation,"
  "workflow automation."
- **Be careful with internal metrics.** The specific figures on her resume are fine to share
  privately; on a public page, prefer qualitative or rounded framing ("cut scaled human
  review by roughly a quarter while holding quality flat") and keep precise numbers for the
  resume and conversations. When in doubt, generalize.
- **Yadegar is fully hers** — showcase it freely. But never put real journal entries or user
  data on the site (per Yadegar's own privacy principles).
- Resume PDF: use the version she's comfortable being public, or gate the resume behind an
  email click if she prefers.

Claude Code should treat all Meta specifics as "generalize unless Mahdis explicitly approves
the exact wording."

---

## 14. Accessibility & performance
- WCAG AA: color contrast, focus states, keyboard nav, semantic HTML, alt text.
- `prefers-reduced-motion` honored.
- Lighthouse ≥ 95 across the board; images optimized and lazy-loaded; fonts subset/preloaded.
- Works on small screens first.

---

## 15. Deployment & domain
- Host on **Vercel**; auto-deploy from `main`.
- **Domain — CHOSEN: `mahdisrezaei.ai`** (the .com was taken). On-brand: the URL itself
  reinforces "product leader who builds AI" every time it's seen. Name-based for SEO. Buy it
  and point DNS to Vercel. (`.ai` registrars: e.g. Namecheap, Porkbun, Cloudflare; ~$70–100/yr.)
- HTTPS automatic. Set up the resume as `/resume.pdf`.
- Add privacy-friendly analytics (Vercel Analytics or Plausible) — no cookie banner needed.

---

## 16. Build plan (phased) & acceptance criteria

**Phase 0 — scaffold (½ day)**
- Next.js + TS + Tailwind + shadcn; repo; Vercel deploy of a hello-world; domain pointed.
- ✅ Live URL on the custom domain, green Lighthouse on an empty page.

**Phase 1 — home + about + contact (the must-haves)**
- Hero, selected-work cards (linking to stubs), Yadegar feature band, about teaser, contact
  band, footer, nav, theme toggle. Full About page. Resume PDF live.
- ✅ A recruiter can land, understand her in 5 seconds, and email/download resume. Mobile
  perfect. OG card renders.

**Phase 2 — work + case studies + Yadegar page**
- Experience timeline; 2 case studies (the AI platform, generalized + Yadegar) using the
  shared layout; the /building page.
- ✅ An HM can read a full case study and the Yadegar page and judge depth.

**Phase 3 — polish**
- Custom OG image, JSON-LD, sitemap/robots, analytics, motion pass, image optimization, a11y
  audit, copy edit pass in her voice.
- ✅ Lighthouse ≥ 95 all categories; "Mahdis Rezaei" search test; cross-browser/mobile check.

**Phase 4 (optional, later)** — writing/notes section; a third case study; small delight
moments.

---

## 17. Decisions — RESOLVED (made for you, with rationale)

All nine are decided so Claude Code can build without waiting. Each reflects how senior/Staff
PMs actually build personal sites (see the teardowns in Appendix A). Override any you want —
but these are the recommended defaults and the build should proceed on them.

1. **Headline → "Product leader who builds."** Crisp identity over a paragraph, like every
   strong PM site. (§6)
2. **Visual direction → a confident builder's GALLERY, deliberately NOT Yadegar.** Neutral
   chrome + one energetic signature accent + bold contemporary type (Space Grotesk / General
   Sans, not Inter). Each product brings its own color, so the site signals *range and a
   versatile, energetic builder* — not one product's taste. Dark mode kept. (§10)
   *(Changed from the earlier "cohesive with Yadegar" call — Mahdis explicitly wants the site to
   represent her range, not mirror a single product she built.)*
3. **Domain → `mahdisrezaei.ai`** (the .com was taken; `.ai` is on-brand for an AI builder).
   Best for name-search SEO. (§15)
4. **3rd case study → Enterprise identity (MMA).** Shows range beyond AI/integrity; the work
   senior HMs respect. (§8.4)
5. **Meta specifics → generalize.** Public site uses generic framing and rounded/qualitative
   impact; no internal codenames; precise numbers stay in the resume and conversations. Name
   Meta/Amazon as employers and Yadegar freely. (§13)
6. **Portrait → yes**, a warm professional photo. Both reference PMs use a headshot; it builds
   trust fast and humanizes your story.
7. **Resume → public PDF** at `/resume.pdf`, plus an email link. Frictionless access matters
   more than gating for a job search.
8. **Booking → email-first, no Calendly in v1.** A booking link reads as "selling" (Kemler
   sells coaching; you're a candidate). A warm email link fits better. Add later only if you
   start advisory work.
9. **Stack → Next.js (App Router) + TS + Tailwind + shadcn on Vercel.** Best SEO and the
   cleanest Claude Code build. (§11)

**Still genuinely yours to provide** (not decisions, just inputs): the professional photo,
your LinkedIn URL, which exact resume PDF to publish, and a final read of the About copy in
your voice.

---

## 18. Appendix A — inspiration teardown (shyambv.com)

What it is and what to borrow vs. change:
- **Structure:** single-page React, all content in one `data.js` (`window.SITE_DATA`).
  Sections: about, work (experience timeline w/ org/role/period/note/tag), investing,
  writing (live Medium feed), now, skills, photos gallery, travel log, contact links.
  Nav: about · work · writing · photos · contact.
- **Aesthetic:** terminal/developer vibe — monospace fonts (JetBrains Mono, IBM Plex Mono,
  Space Mono), warm cream bg (`#f4efe6`), terracotta accent (`#c75b39`), a terminal-window
  motif with traffic-light dots and a "type a command" interaction, plus a theme toggle.
- **Tone:** understated, personal, hobby-forward (photography, hiking, travel). Honest
  touches ("two startups, both failed, both taught me more than anything that worked").
- **Borrow:** the content-driven single-data-file architecture; clean section rhythm; a
  touch of interactive personality; the warm palette; the "now" section; honest voice.
- **Change/upgrade for Mahdis:** SSR/SSG for SEO (his is invisible to Google); a real
  positioning line and conversion path (his has none); PM case studies with depth; Yadegar as
  the centerpiece; a product-leader aesthetic over a developer-terminal one; analytics.

### Senior-PM reference sites (what they have in common)

**Brian Kemler (briankemler.com)** — ex-Google/Meta PM. Server-rendered, premium dark look
with a brass-gold accent (`#c8a96e` on near-black `#1a1a1a`), Montserrat type. Positioning:
"Product Manager — portfolio of impact work from Google, Meta and beyond." Organized as an
*impact portfolio*: shipped apps (Live Transcribe, Live Caption — accessibility audio), Talks
& Keynotes, Stories & Film, **Recognition** (a personal note from Sundar Pichai), Publications,
Patents. Also monetizes: PM Guides + Coaching. Takeaway: lead with shipped products and
credibility markers; a name-domain; a confident premium aesthetic.

**Arunjeet Singh (maximumimpact.studio)** — ex-Meta/Amazon/Salesforce/Microsoft. Clean,
minimal, centered; founder bio + headshot + socials. Nav: Blog, Apps, About, GitHub. Leads
with "using AI agents to build innovative software," features the apps he ships (e.g.
TokenCounter). Takeaway: the builder-PM brand — *show the things you made* — plus a headshot
and a clear, jargon-free bio.

**The cross-PM pattern we're applying for you:**
1. Crisp identity headline + big-company credibility up top → "Product leader who builds,"
   Meta/Amazon named.
2. Feature the things you've *shipped* → Yadegar as the centerpiece (your unfair advantage —
   neither reference built an AI product as polished as yours, solo).
3. A headshot and a human, jargon-free voice.
4. A name-based domain and real SEO.
5. One confident, branded aesthetic — and yours is differentiated by being **cohesive with
   Yadegar** rather than another dark template.

### Yadegar brand facts (for reference — deliberately do NOT mirror these on the site)
Yadegar's look is parchment `#F3EAD7`, earthy brown/gold accents, Inter, calm/literary. The
personal site intentionally goes the OTHER way (neutral gallery + energetic accent + grotesk
type) so Mahdis doesn't read as a one-product taste. On the site, Yadegar appears as one
*exhibit* (screenshots in its own colors), not as the site's identity.
- **Tagline:** "A companion to a lifelong journaling practice. It brings back one page worth
  returning to, in your own words."
- **Live:** https://yadegarjournal.com — link to it from the site.

## 19. Appendix B — copy bank (drafts to start from)

- **Hero headline (A):** "Product leader who builds."
- **Hero sub:** "Staff PM at Meta on AI & agentic systems for trust & safety — and the solo
  builder behind Yadegar, an AI journaling app I designed, built, and shipped end to end."
- **Contact band:** "Open to senior product roles, and always happy to talk products, AI, or
  building. Reach me at mahdis.rezaei87@gmail.com."
- **Yadegar one-liner:** "A private AI journaling app that hands you back one page worth
  returning to, in your own words — the thread that endured, not the noise of the day."
- **Footer flex (quiet, on-brand):** "Designed and built with Claude Code."
- **About opener:** "I build things — products, teams, and a life that took six countries to
  assemble."

---

### How to use this with Claude Code
1. Create the website repo, copy this file in as `PRD.md`.
2. Start a Claude Code session: "Read PRD.md and build Phase 0, then Phase 1." Work phase by
   phase; review each before moving on.
3. Keep all copy in `site.ts` / MDX so you can edit words without touching components.
4. Answer the §17 decisions as they come up; Claude Code can proceed with the recommended
   defaults until you say otherwise.
