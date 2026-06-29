# Website Content — ready-to-use copy

Final draft copy for mahdisrezaei.ai, in Mahdis's voice (warm, direct, no buzzwords, every
word earns its place). Drop into `site.ts` / MDX. Meta work is **generalized** per the PRD §13
— no internal codenames, rounded/qualitative impact. `[confirm]` marks things only Mahdis can
verify (exact dates, a number she wants public).

---

## Hero

**Headline:** Product leader who builds.

**Sub-headline:**
Staff PM at Meta, working on AI and agentic systems for trust and safety. On the side, I
designed, built, and shipped Yadegar — a private AI journaling app — end to end.

**Proof chips:**
- 10+ years · Meta, Amazon
- Shipped an AI product solo — web + iOS
- Works AI-native, every day

**CTAs:** [ See my work ] [ Get in touch ]
**Location line (small):** San Francisco · open to remote

---

## About (full page)

# I build things.

Products, teams, and a life that took six countries to assemble.

I was born in a small town in northeast Iran and raised to fit inside lines someone else
drew — my faith, my role, my future. Over twenty years I took those lines apart one at a
time. I left at eighteen for India with three months of English and a dictionary, and earned
a bachelor's and a master's in computer science. I did an MBA in Rome, interned in London, and
landed in New York with two degrees and almost no work experience, figuring it out from
scratch.

From there I built a career the same way I'd learned everything else — one hard thing at a
time. A fifteen-person startup. Blue Apron the year it went public. Amazon, where I shipped
subscription products for Ring. And then Meta, where I finally crossed from program management
into product, and into the work I care most about.

Today I'm a Staff PM in Meta's integrity organization, working on AI and agentic systems that
help decide what's safe at the scale of billions of users. The problems are ambiguous and
high-stakes, the kind where a confident wrong answer is worse than no answer — which is
exactly the kind of problem I like.

And on the side, I built Yadegar. I've kept a journal for twenty years, in three languages,
through every one of those moves. When I finally went back and read them, I didn't find a list
of events — I found a handful of things that kept being true. So I built the tool I wished I'd
had: a private journaling app that reads across everything you've written and hands you back
one page worth returning to. I designed it, wrote the code, and shipped it — web and iOS — on
my own.

The through-line, if there is one: I'm happiest turning something ambiguous and hard into
something real that people can trust. That's the job. It's also the story.

**What I'm known for**
- Turning messy, high-trust problems into clear operating models — and shipping them.
- Building with AI, not just managing people who do.
- Bringing skeptical engineers along; relationships are my actual superpower.
- Knowing when to kill the wrong approach, and having the spine to say so.

**Now**
Open to senior and Staff product roles. Building, interviewing, and writing about what I learn.

---

## Selected work — card copy (home)

1. **Scaling trusted AI review**
   Moved high-stakes review from people to evaluated AI — without losing the trust those
   decisions depend on.
   *Tags: AI platform · Trust & Safety · 0→1*

2. **Yadegar — an AI product, built end to end**
   Designed, built, and shipped a private AI journaling app, solo. Web and iOS.
   *Tags: AI · 0→1 · Founder*

3. **Enterprise identity from scratch**
   Built a platform that secured enterprise access for one of the largest ad businesses in
   the world.
   *Tags: Platform · Enterprise · 0→1*

> There's a **4th case study** below — *The eval platform behind safe AI*. Show the 3 above on
> the home page by default; for an evaluation/AI-infra role (e.g. Workato), swap it in as a
> featured card since it's the most on-point.

---

## Case study 1 — Scaling trusted AI review  (slug: trusted-ai-review)

> **One line:** I led product for an AI platform that shifted high-stakes review from people
> to evaluated AI — without losing the trust those decisions depend on.

**Context**
At a large social platform, the teams that investigate and enforce against abuse were doing
careful, judgment-heavy work spread across a dozen tools. The work was slow, and a lot of it
was repetitive. Leadership wanted "AI for this," and every team was about to build its own
agent.

**The problem**
The tempting answer was "build an AI copilot." I argued against it. The real problem was that
this kind of work isn't one kind of work — so a single AI product would serve none of it well.
Some of it is open-ended judgment where a human has to stay accountable. Some of it is
repetitive, rule-bound steps a system can run on its own. Treat them the same and you erode
trust the first time the system is confidently wrong.

**The insight**
The useful distinction wasn't "automation versus augmentation" — both use automation. It was
*trigger and user experience*. Work that's triggered by a case and runs headless should be
automated. Work a person starts and reasons through, interactively, should be augmented — with
the human owning the decision. Same technology, opposite contracts.

**What I did**
I defined that product taxonomy and built two surfaces on a shared foundation: an automation
layer for the repetitive first-mile work, and an investigation-augmentation layer for the
judgment work. I launched on a ladder — read-only, then draft, then shadow, then partial
automation — so trust was earned one rung at a time. And I built the layer underneath that
made it scalable: turning thousands of messy, half-documented workflows into something
structured enough to automate safely.

**Impact** *(public framing — rounded)*
- Cut scaled human review by roughly a quarter while holding enforcement quality flat.
- The investigation assistant reached above-human-expert accuracy and was used by a
  thousand-plus reviewers, running thousands of AI-led investigations a day.
- The automation layer took the highest-volume workflows end to end and multiplied throughput
  several times over.

**What I learned**
The hardest lesson came from a workflow I scoped wrong. I built it as a free-form chat
assistant because people worked through it conversationally — but it was actually a strict
procedure with a right answer. The evaluation caught it before it shipped broadly, and I
rebuilt it as a procedure with a checklist and safe failure. The lesson stuck: a
conversational interface is not a conversational product. In high-trust work, the product
contract matters more than how smart the model sounds.

---

## Case study 2 — Yadegar  (slug: yadegar)  → can be the /building page

> **One line:** I designed, built, and shipped a private AI journaling app — end to end, on my
> own.

**What it is**
Yadegar is a private companion to a lifelong journaling practice. It reads across everything
you've written and brings back one page worth returning to, in your own words — the thread
that endured, not the noise of the day. *Yadegar* means "keepsake" in Persian. You can write
forward, import years of past journaling, and even write letters to your past self.
**Live at [yadegarjournal.com](https://yadegarjournal.com).**

**Why I built it**
I've kept a journal for twenty years, through leaving Iran, losing my religion, choosing who
to love, and starting over as an immigrant again and again. When I finally read mine back, I
found the same threads surfacing across a decade — my life wasn't a list of events, it was a
handful of things that kept being true. Journals have one flaw: they pile up, and you never
reopen them. Yadegar is the tool I wished I'd had the whole time.

**What I built**
- A TypeScript monorepo — web app (React + Vite, live) and an iOS app (Expo / React Native,
  in App Store submission).
- An AI memory engine, on the Anthropic API, that finds what's true across many entries.
- End-to-end encryption (AES-256-GCM) with search that runs on your device — your words never
  sit somewhere they shouldn't.
- Safety gates for the hard moments, because I know how heavy a journal can get.

**My role**
Product, design, architecture, and code. Solo, end to end.

**What it's built on** *(this doubles as my product taste)*
Privacy first. Calm and minimal. No streaks, no guilt, no engagement tricks. Reflection over
engagement. Every word in the product earns its place.

---

## Case study 3 — Enterprise identity from scratch  (slug: enterprise-identity)

> **One line:** I built a platform that let enterprises securely access one of the world's
> largest ad businesses — and closed a real security and revenue gap doing it.

**Context**
Large advertisers were running their business on personal accounts — a single person's login,
shared around a company. It was a privacy and security problem, and when those accounts got
compromised, it was an expensive one. Every other major platform already had a proper
enterprise tier. We didn't.

**The problem**
Build the enterprise identity layer that lets a company bring its own identity provider and
single sign-on — provision and de-provision access cleanly, the way enterprise software is
supposed to work — without breaking the advertiser ecosystem that depended on the old way.

**What I did**
I took this from pre-beta to general availability: mapped the first- and third-party
dependencies, worked with the developer-platform teams so partners kept working through the
migration, and sequenced a rollout that didn't strand existing advertisers. The hard part
wasn't the auth flow — it was the migration and the trust, across a lot of teams that each
owned a piece.

**Impact** *(public framing)*
- Shipped enterprise identity and SSO that secured access for major advertisers and closed a
  significant fraud and account-takeover gap.
- Protected a large, ongoing share of ad revenue that depended on those accounts staying safe.

**What I learned**
Platform work from scratch is mostly dependency-mapping and trust-building, not the core
build. The teams who own the pieces you need have their own roadmaps; you move them by making
the shared win legible, not by escalating.

---

## Case study 4 — The eval platform behind safe AI  (slug: ai-eval-platform)

> **One line:** I built the evaluation and deployment platform that let a large platform move
> high-stakes review from people to AI — and prove, continuously, that it was safe to.
> *(For an evaluation-focused role, e.g. Workato, feature this one on the home page.)*

**Context**
A large platform wanted to shift most of its high-volume human review to AI models. The
prize was huge; the risk was that a model can look excellent on a benchmark and still fail
in the real world — and in high-stakes review, a quiet drop in quality does real harm.

**The problem**
The tempting answer was "train a better model and certify it once." That's the wrong mental
model. Offline benchmarks don't predict live behavior — the real world has edge cases,
shifting content, and policy nuance a static test never sees. The actual problem was trust:
how do you prove a model is safe to put in the critical path, and keep proving it?

**The insight**
Deploying AI into high-stakes decisions has to be a *lifecycle*, not a one-time gate. And the
product isn't the model — it's the system around it: the labels you judge it by, making sure
people and models evaluate the same facts, a way to debug *why* it was wrong, and measurement
that never stops.

**What I did**
I defined a staged rollout where a model earns trust one step at a time — running silently on
live traffic first, then affecting a small slice, then becoming primary while people watch,
then full production — advancing only on evidence. Underneath it I built the trust
infrastructure: governed, versioned ground truth (instead of spreadsheets); frozen data
snapshots so people and models judge identical facts; a surface to inspect a model's reasoning
and classify why it failed; and continuous, calibrated measurement as the backbone of every
rollout decision.

**Impact** *(public framing — rounded)*
- Moved roughly a quarter of scaled human review to evaluated models early on — while holding
  quality flat (a reliability-neutral reduction).
- Turned one-off model launches into a repeatable path many teams could reuse.

**What I learned**
Two things. The hardest part wasn't the model — it was holding the line that you cut human
review *after* quality is proven, not before, even under pressure to capture the savings
sooner. And evaluation is only as honest as its inputs: for a while, models and people looked
like they disagreed when they'd actually seen different facts, until I made freezing the data
a precondition for every comparison. In high-stakes AI, the product is the system that proves
the model is right and keeps it right.

---

## Case study 5 — Detection at scale  (slug: detection-at-scale)

> **One line:** I helped turn fragmented, expert-driven threat investigation into a connected,
> AI-assisted, measurable detection system — faster, broader, and governed.

**Context**
At a large platform, finding emerging abuse — coordinated networks, impersonation, inauthentic
behavior — leaned on expert investigators and a pile of one-off tools. It was slow, hard to
measure, and didn't scale with the threat.

**The problem**
Find more of the problem, faster, without drowning the investigators who have to act on it — and
do it responsibly, not "AI because we can."

**The insight**
Increase *recall* first, then rank and triage, so broader coverage doesn't overwhelm already
saturated teams. And match the level of automation to the stakes: full automation where it's
safe, humans firmly in the loop where the action is high-risk.

**What I did**
Shipped AI-assisted detection and labeling infrastructure — LLM-based labeling and scoring that
investigators could call from across their tools, near-real-time monitoring, and workflow
automation that turned expert investigation playbooks into scheduled, measurable detection.

**Impact** *(public framing — rounded)*
- Cut investigation triage time by roughly two-thirds and multiplied the volume of assets a team
  could review.
- Drove automated detection at high precision, and surfaced large amounts of additional
  violating content from a handful of intelligence reports.

**What I learned**
Detection only matters if it connects to action — a better signal that no one acts on is worth
nothing. And responsible AI means having the discipline to know when *not* to use a model: the
goal is faster, safer, higher-quality detection, not AI adoption for its own sake.

---

## More selected work (the "range" strip — shorter entries)

These show range beyond AI/integrity. Render as compact cards, not full case-study pages.

**Ring Subscriptions — Amazon**
Led Ring Protect as a recurring-revenue *platform*, not a pricing page: billing and payments
infrastructure, Amazon channel integration, and a portfolio of partner, device, and subscription-
tier launches across 20+ markets. Consumer growth, billing infrastructure, and P&L. *(Tags:
Consumer · Subscriptions · Platform)*

**GoodRx — Price Page**
Took the most important page on a consumer healthcare marketplace — deceptively simple, actually
a tangle of drug-pricing edge cases — and turned it into a canonical product system: a clear
taxonomy, documented behavior, and a foundation for simplification, balancing user trust,
conversion, and SEO. *(Tags: Consumer · Marketplace · Healthcare)*

> **[CONFIRM before publishing any numbers]:** Ring (subscriber/revenue figures, VSpeed +$49M)
> and GoodRx (your exact role — Sr. TPM there — and which recommendations shipped) carry honesty
> caveats from the portfolio notes. The framing above is safe as written; add specific numbers
> only once you've confirmed the denominator and your ownership.

---

## Experience timeline (PM-framed) — `[confirm dates]`

- **Meta — Staff PM, Central Integrity (AI & Agentic Platforms)** · 2024–now
  Own the AI platform portfolio for integrity — evaluation, investigation augmentation, and
  workflow automation.
- **Meta — PM, Monetization** · 2022–2024
  Built enterprise identity/SSO for advertisers, and consumer single sign-on across Meta's
  apps.
- **Amazon — TPM, Ring** · `[confirm]`
  Launched and grew subscription tiers and billing; sold Ring on amazon.com.
- **GoodRx — TPM** · `[confirm]`
  Consumer healthcare affordability — app and web for medication savings, built for usability
  across all ages.
- **GlobeTax — Senior TPM** · `[confirm]`
  Internal platforms for international tax filing — complex, regulated, multi-country.
- **Blue Apron — TPM** · `[confirm]`
  IT and systems work through the company's IPO preparation.
- **Ground Control (now Imprivata) — Program Manager** · `[confirm]`
  First product/program role at a 15-person startup; mobile device management for hospitals.

---

## Contact

**Open to senior product roles** — and always happy to talk products, AI, or building.

- Email: mahdis.rezaei87@gmail.com
- LinkedIn: `[your URL]`
- GitHub: github.com/mahdis-rezaei
- Resume: [Download (PDF)](/resume.pdf)

---

## Footer
Designed and built with Claude Code. · © 2026 Mahdis Rezaei

---

## SEO / meta / OG

- **Canonical domain:** https://mahdisrezaei.ai (set `metadataBase` and per-page canonicals).
- **Site title:** Mahdis Rezaei — Product leader who builds
- **Meta description:** Mahdis Rezaei is a Staff PM at Meta working on AI and agentic systems
  for trust and safety, and the solo builder of Yadegar, an AI journaling app. Product
  strategy and the ability to ship it.
- **OG image text:** "Mahdis Rezaei — Product leader who builds" with a small line "Staff PM,
  Meta · Builder of Yadegar." Use the site's neutral gallery look + the signature accent — NOT
  Yadegar's parchment palette.
- **Per-page titles:** About — Mahdis Rezaei · Work — Mahdis Rezaei · Yadegar — Mahdis Rezaei.
- **JSON-LD Person:** name "Mahdis Rezaei," jobTitle "Staff Product Manager," sameAs [LinkedIn,
  GitHub, Yadegar].

---

### Confidentiality reminder
The Meta case studies above are deliberately generalized — no internal product names, rounded
impact. If you want any precise number public, decide it consciously; otherwise keep it for the
resume and live conversations.
