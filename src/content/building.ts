/**
 * Building section: the independent products Mahdis has designed and built.
 * `apps` drives the /building cards; `caseStudies` drives /building/[slug].
 * Both are fully hers, so full detail is fine (no §13 generalization needed).
 * Copy is dash-free to match the rest of the site.
 */

export type BuildApp = {
  slug: string;
  name: string;
  category: string;
  platform: string;
  status: "Live" | "In progress";
  icon: "notebook" | "languages";
  /** Optional app-icon image key into buildImages; overrides the glyph. */
  iconImage?: string;
  blurb: string;
  links: { label: string; href: string; external?: boolean }[];
};

export type Block =
  | { type: "h2"; text: string }
  | { type: "p"; text: string }
  | { type: "quote"; text: string; cite?: string }
  | { type: "list"; items: string[] };

export type CaseStudy = {
  title: string;
  tagline: string;
  /** Optional app-icon image key into buildImages, shown in the header. */
  iconImage?: string;
  meta: { label: string; value: string }[];
  links: { label: string; href: string; external?: boolean }[];
  blocks: Block[];
};

export const apps: BuildApp[] = [
  {
    slug: "yadegar",
    name: "Yadegar",
    category: "AI journaling companion",
    platform: "Web · iOS · Android soon",
    status: "Live",
    icon: "notebook",
    iconImage: "yadegar",
    blurb:
      "Reads years of your private entries and hands back one page worth returning to, in your own words. It stays silent when nothing honest surfaces.",
    links: [
      { label: "Read the case study", href: "/building/yadegar" },
      { label: "Visit Yadegar", href: "https://yadegarjournal.com", external: true },
      {
        label: "App Store",
        href: "https://apps.apple.com/us/app/yadegar/id6778475173",
        external: true,
      },
    ],
  },
  {
    slug: "hamzaban",
    name: "Hamzaban",
    category: "Farsi ↔ English translator",
    platform: "Web · iOS · Android",
    status: "In progress",
    icon: "languages",
    iconImage: "hamzaban",
    blurb:
      "A voice-first, elder-friendly translator that lets a Farsi-speaking parent and an English speaker have a real conversation, face to face, with no one in the middle. I'm building it for my parents.",
    links: [{ label: "Read about it", href: "/building/hamzaban" }],
  },
];

export const caseStudies: Record<string, CaseStudy> = {
  yadegar: {
    title: "Yadegar",
    tagline:
      "An AI journaling companion that knows when to stay silent.",
    iconImage: "yadegar",
    meta: [
      {
        label: "Role",
        value:
          "Sole owner: product, design, AI and eval engineering, full-stack, infra, mobile, and monetization.",
      },
      {
        label: "Status",
        value:
          "Live on web and the iOS App Store, with Android coming soon. Survived a rejection, fix, and approval; a subscription update in review.",
      },
      {
        label: "Stack",
        value:
          "Two-pass LLM engine (Claude) · Express and Postgres API · React SPA · Expo and React Native iOS · Stripe and Apple IAP · a CI eval harness.",
      },
    ],
    links: [
      { label: "Visit Yadegar", href: "https://yadegarjournal.com", external: true },
      {
        label: "App Store",
        href: "https://apps.apple.com/us/app/yadegar/id6778475173",
        external: true,
      },
    ],
    blocks: [
      {
        type: "p",
        text: "A contemplative journaling companion that reads years of your private entries and surfaces one thing worth returning to today: a thread, a forgotten page, a distance travelled. Always in your own words, and it stays silent when nothing honest surfaces.",
      },
      { type: "h2", text: "The problem, and the thesis" },
      {
        type: "p",
        text: "Every journaling app remembers what happened. Yadegar tries to remember what endured.",
      },
      {
        type: "p",
        text: "People reopen old journals not for analytics but to ask: what was I thinking? What mattered? How far have I come? What survived? The bet is that a well-calibrated model can answer that, surfacing the continuity you can't see from inside a single entry, if and only if it has the taste and safety to know when to speak and when to stay quiet.",
      },
      {
        type: "p",
        text: "The distinction the whole product hangs on: what happened is the wound, and surfacing it unbidden is an ambush, pain without perspective. What endured is the thread, and surfacing it is a gift, a continuity the writer couldn't see alone.",
      },
      { type: "quote", text: "Offer the meaning, never push the moment." },
      {
        type: "p",
        text: "A well-built app with bad calibration is just an ambush machine with beautiful typography. Avoiding that, not the CRUD or the UI, was the actual job.",
      },
      {
        type: "p",
        text: "So Yadegar takes a deliberate anti-metrics stance: no streaks, feeds, likes, mood scores, or engagement dashboards. It's a librarian, never a therapist, coach, or guru. Success is a user saying “I forgot I wrote that” or “that's true”: recognition, not “wow.” That reframing, away from daily actives and session length toward recognition, drove every downstream decision, including actively suppressing compulsive use.",
      },
      { type: "h2", text: "The AI engine: the core bet" },
      {
        type: "p",
        text: "The engine is a two-pass model pipeline plus small classifiers, run as an internal service.",
      },
      {
        type: "p",
        text: "Pass 1, extract. It runs a crisis check first, then does deterministic sentence segmentation server-side: entries are split into numbered sentences and the model selects candidates by index. It never types a quote itself, which kills a whole class of nondeterminism (paraphrase, hallucinated quotes, sub-clause carving). It over-collects on purpose, 8 to 15 candidates, because a line wrongly included costs nothing (Pass 2 drops it) while a line wrongly excluded is invisible forever.",
      },
      {
        type: "p",
        text: "Pass 2, score. Four pass or fail gates (safety floors, perspective, textual evidence, a displayable quote) applied before ranking, then five one-to-five axes: emotional center (the master axis), specificity, discovery, contradiction, and worth-returning-to. Plus a resolution penalty: self-reassurances and motivational conclusions are demoted, because the conclusion is what the writer wanted to believe, while the observation is where the truth slipped out. It returns exactly one result, or nothing.",
      },
      {
        type: "p",
        text: "Two passes is the single most important architectural decision: it makes every failure locatable. A missed line is an extraction bug; a wrong pick is a scoring bug. That paid off immediately: the best line in a test archive was losing not because scoring ranked it low, but because it was never extracted. No scoring change could ever have fixed it.",
      },
      {
        type: "list",
        items: [
          "Silence is a first-class output, not a failure. A logistics list, a thin line, a “got the job!” are not surfaceable. A companion that always finds something profound is a fortune teller.",
          "Threads key on the persistence of a function, not a phrase. A 2015 “take a deep breath” and a 2018 “hold the pen” are one thread, the same self-steadying move, though they share no words.",
          "Determinism as UX and safety: temperature zero on every call plus a Postgres cache keyed on a prompt version. Re-opening an entry returns the identical line; bumping the version auto-invalidates the cache. The honest caveat, carried in code: the cache, not temperature zero, is what actually guarantees stability.",
          "The calibrated scorer is kept context-blind. Personalization (“why today?”) is applied after scoring, in deterministic code, and only re-ranks near-ties, because feeding today's context into the scoring prompt inflated the scores. The seam is drawn to protect the calibration.",
          "Models pinned to exact versions, never a floating alias, so an auto-upgrade can't silently change results. A cheaper model is used only for low-stakes classification, and only after the eval harness proves it holds the same line.",
        ],
      },
      { type: "h2", text: "Responsible AI: the guardrails" },
      {
        type: "p",
        text: "Safety here isn't a content filter bolted on. It's layered through the pipeline, and each choice of failure direction is deliberate.",
      },
      {
        type: "list",
        items: [
          "The crisis check runs before anything else, scoped to the writer's present state (only the most recent entry, because running it over years over-fires). It's sensitivity-biased, returns server-authored support copy (the model never writes it, pointing to 988 and findahelpline.com), and fails open: on any error it returns false, which is safe because two independent downstream layers still exclude crisis lines. Defense in depth.",
          "Absolute hard floors: body weight, eating, appearance, and physical self-image are never surfaced, even positively, because observation itself can harm there. The requirement is absence, not suppression.",
          "The perspective-not-wound gate is arc-aware, the most important calibration shipped. A blunt version stripped the raw “before” of every growth arc, which destroyed the product's whole thesis. The fix: evaluate cross-time candidates as arcs, so a raw “before” passes when a later fragment shows it was survived.",
          "A bias guard scopes every observation to “in your writing,” never “in your life,” because people write more in distress than in contentment. “Appears often in the journal” must never silently become “was often true of your life.”",
          "User-sovereign controls: mute a grief season so nothing from it resurfaces, mark any entry “never resurface,” and a rotation layer that won't repeat a page within six months or a theme within ninety days. A life is larger than its hardest chapter.",
          "Fail-open versus fail-closed, chosen per risk: crisis detection fails open (safe via downstream gates); the hard-floor and resurfacing classifiers fail closed, withholding rather than risking exposure.",
        ],
      },
      { type: "h2", text: "The eval harness: taste, made executable" },
      {
        type: "p",
        text: "For a product that is 80% calibration and safety, 20% plumbing, the crown jewel is the regression suite that turns subjective quality into something a CI gate can enforce. “I think this output is good” is unshippable when the output speaks to someone about their most private writing.",
      },
      {
        type: "p",
        text: "Two independent axes, scored separately, because they fail independently: selection (did it choose the right line, or the right silence?) and voice (did it say it safely and concisely?). The founding insight came from an early result that scored selection 3 out of 10 and voice 8 out of 10: beautiful prose about the wrong line. Scoring them together would have hidden it. Bad retrieval can never be fixed by prettier prose.",
      },
      {
        type: "p",
        text: "A gold set of frozen human judgments: sixteen fixtures built from real journal text, each encoding a target (must surface) and anti-targets (must not). The categories are the product's whole risk surface: must-surface recognition cases, silence guards, crisis versus wound versus survived-guard (tested in both directions so the gates neither over- nor under-fire), thread and continuity cases, and cost-bound cases.",
      },
      {
        type: "list",
        items: [
          "One seam: all engine coupling is isolated behind a single adapter, so the checks reason over a normalized contract and never touch raw engine JSON. Offline mode replays recordings for fast CI.",
          "A separate safety harness validates the cheaper hard-floor model before it's trusted, where a single missed withhold is a disqualifying failure.",
          "Separating harness bugs from engine bugs is itself the discipline: a “ten failing” run turned out to be missing date headers and one over-strict check, not engine defects.",
          "CI-able: the runner exits non-zero on any scored failure, so a prompt change that breaks a principle fails loudly instead of degrading silently.",
        ],
      },
      {
        type: "quote",
        text: "The eval is the roadmap: iteration happens against the gold set, not opinions. Taste, made executable.",
      },
      { type: "h2", text: "The business model" },
      {
        type: "p",
        text: "The monetization is drawn from one principle: charge only for the one action with real recurring marginal cost.",
      },
      {
        type: "p",
        text: "Everything with roughly zero marginal cost is free forever: writing, keeping, editing, importing, exporting, browsing, and date-based returns like “On This Day.” You can revisit any past AI return for free. The paid line is the fresh AI return, a cache-miss engine run, the only thing that costs real money each time.",
      },
      {
        type: "list",
        items: [
          "Free: four fresh returns a month, plus a one-time onboarding bonus, because the magic has to land before any limit does.",
          "Member: unlimited, with an invisible fair-use ceiling that bounds the abusive tail. $8.99 a month or $59.99 a year. The annual saving is shown as a fact, not a pressure tactic, consistent with offer, never push.",
          "Unit economics I modeled: about ten cents of cost per fresh return, roughly 83 to 90% gross margin on a modeled thousand-member book, break-even at 47 to 75 returns a month. The anti-engagement design protects the margin by suppressing compulsive use.",
          "Shadow-mode metering: the quota gate shipped metered but not blocking until membership was purchasable, because a capped free user with no way to upgrade should never hit a wall. Flipping one flag turns it into a gentle, reversible limit.",
          "Dual-platform billing done honestly: Stripe on web (a signature-verified webhook as source of truth) and Apple IAP via RevenueCat on mobile. When the webhook proved to be a single point of failure, I added a client-initiated, grant-only server verification, so a paying member is never gated as free by a dropped webhook. Leaving is easier than arriving: lapsing never touches your pages.",
        ],
      },
      { type: "h2", text: "Architecture and execution" },
      {
        type: "list",
        items: [
          "Two repos, one-way flow: GitHub is the source of truth; a deployment syncs, runs, and migrates, and never pushes back.",
          "The engine is an internal loopback service: the raw endpoints are hard-blocked to any non-loopback caller because they bill the model API on every call. Real users reach it only through the authenticated, rate-limited product API.",
          "A monorepo: Express API plus engine, a React SPA, a Postgres and Drizzle schema with AES-256-GCM encryption at rest (a stolen database dump is useless without the key), an OpenAPI codegen client, the eval harness, and an Expo and React Native iOS app, all over one backend.",
          "Shipped end to end: three auth providers, email verification and password reset, the write, import, run, return, reflect loop, privacy export and delete, legal pages, a custom domain, security headers, and a readiness probe. iOS went through the full App Store gauntlet: a rejection for non-discoverable account deletion, then fix, then approval.",
        ],
      },
      { type: "h2", text: "What this demonstrates" },
      {
        type: "list",
        items: [
          "0 to 1 product judgment under deep ambiguity: defining success as recognition, not engagement, and holding that line against every default of the category.",
          "AI system design with safety as a first-class constraint: layered guardrails, fail-direction chosen per risk, and a scorer kept blind to personalization to protect its calibration.",
          "Evaluation rigor: turning subjective taste into a CI regression suite on independent axes, with held-out cases and a cheaper-model safety validator, treating the eval as the roadmap.",
          "Business fluency: a price line drawn exactly where marginal cost lives, with modeled unit economics, a fair-use ceiling, and a shadow-mode rollout that de-risks pricing before the wall exists.",
          "End-to-end shipping ownership: a live, encrypted, multi-platform product with a paid tier, built and launched solo.",
        ],
      },
      {
        type: "quote",
        text: "It remembers what endured, not what happened, and the whole product is the taste and safety to know the difference, proven by an eval harness.",
      },
    ],
  },

  hamzaban: {
    title: "Hamzaban",
    tagline:
      "A voice-first translator that lets a Farsi-speaking parent and an English speaker talk, face to face, with no one in the middle.",
    iconImage: "hamzaban",
    meta: [
      { label: "Role", value: "Sole owner: product, design, and build." },
      { label: "Status", value: "In progress. Building the MVP." },
      { label: "Platform", value: "Web, iOS, and Android, Expo and React Native." },
    ],
    links: [],
    blocks: [
      {
        type: "p",
        text: "Hamzaban means “one who shares your language” in Persian. It's the tool I'm building so my parents can be understood, without me in the room.",
      },
      { type: "h2", text: "Why I'm building it" },
      {
        type: "p",
        text: "Millions of families are split by a language barrier inside their own homes. A Farsi-speaking parent who isn't fluent in English becomes dependent on their adult child to speak for them, at the doctor, with neighbors, with a partner's family. The parent waits to be spoken for, and over time they stop asking, and the relationship thins.",
      },
      {
        type: "p",
        text: "I'm building this after watching, firsthand, exactly where the barrier breaks for my own parents. This is real problem discovery, not a hypothetical.",
      },
      { type: "h2", text: "Who it's for" },
      {
        type: "p",
        text: "The primary user is the parent: an older adult with low tech confidence who wants to speak in Farsi and simply be understood, and to understand what's said back. Success is completing an exchange without their child present. They should never see a settings screen, a login, or a configuration option.",
      },
      {
        type: "p",
        text: "I set it up once as the configurer, then step out of the way. The English speaker, a doctor or a neighbor, installs nothing and uses the same phone for a few seconds. Zero learning curve for anyone but me.",
      },
      { type: "h2", text: "The principles" },
      {
        type: "list",
        items: [
          "Silence and accuracy beat a confident wrong answer. A mistranslation that reaches the other person is the worst outcome, so the app shows the recognized source text and offers an easy redo rather than pushing a shaky result through.",
          "Privacy is the product. Journal-grade care applied to speech: audio is deleted immediately after transcription, transcripts aren't stored server-side, and there are no analytics or ad SDKs.",
          "Elder-first, not power-user-first. Big targets, big type, high contrast, one obvious action per screen. Farsi text is right-to-left and large.",
          "Calm, not noisy. No gamification, streaks, or retention loops. Warm, concise, human copy.",
          "The smallest thing that works. Ship the walking skeleton, harden it, then decide what, if anything, to add.",
        ],
      },
      { type: "h2", text: "How it works" },
      {
        type: "p",
        text: "The MVP is in-person, single-device, and real-time: the phone sits between two people, each taps their side to speak, and the app speaks the translation aloud for the other. A two-sided screen, with the listener's half rotated 180 degrees, makes it usable flat on a table.",
      },
      {
        type: "p",
        text: "On each turn the app captures audio, transcribes it, briefly shows the recognized source (“did I hear you right?”), translates, then speaks the result aloud on the other side. A single obvious “again” affordance is the primary error-recovery path. A Confirm mode adds one tap before speaking, for high-stakes settings like a clinic.",
      },
      { type: "h2", text: "The architecture" },
      {
        type: "p",
        text: "An Expo and React Native client talks to a thin serverless proxy that holds all the API keys, which never live in the client. The proxy orchestrates three swappable hops: speech-to-text, LLM-based translation with a tight system prompt (translate faithfully, preserve tone, invent nothing, prefer an honest “unsure” over a confident guess), and Persian and English neural text-to-speech. It returns the source text, the translation, and the spoken audio in one response, and retains nothing.",
      },
      {
        type: "p",
        text: "The riskiest assumption gets tested first: whether speech-to-text is accurate enough on a parent's real, colloquial, accented Farsi. That gate is a recording-and-measurement step before any UI is built, because if recognition is poor, the fix is provider and tuning work, not screens.",
      },
      { type: "h2", text: "Status" },
      {
        type: "p",
        text: "In progress. The build is deliberately staged: de-risk recognition, then a one-direction walking skeleton, then the two-sided conversation screen, then the confirmation and error-recovery layer, then quick phrases and in-session replay, then an accessibility and RTL polish pass, then TestFlight with my parents and App Store submission. It's a family gift as much as a portfolio piece, so the metric is honest: can my parent complete a real exchange, unassisted?",
      },
    ],
  },
};
