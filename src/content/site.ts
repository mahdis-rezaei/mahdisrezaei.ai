/**
 * Single source of truth for all site copy.
 * Never hard-code visitor-facing strings in components — edit them here.
 * Long-form case studies live as MDX in src/content/work (Phase 2).
 */

export type NavItem = { label: string; href: string };

export type Cta = { label: string; href: string };

export type SocialLink = {
  label: string;
  href: string;
  /** Hide from UI when the value is still a placeholder. */
  ready: boolean;
};

/** Icon key for a work card's tile — mapped to a lucide icon in the UI. */
export type WorkIcon =
  | "notebook"
  | "shield"
  | "gauge"
  | "radar"
  | "key"
  | "bell"
  | "pulse";

export type WorkItem = {
  /** Present for items with a case-study page at /work/[slug]. */
  slug?: string;
  title: string;
  outcome: string;
  tags: string[];
  icon: WorkIcon;
  /** Grouping key — must match a WorkGroup.key. */
  group: string;
  /** e.g. "Web · iOS" — shown on product-style cards. */
  platform?: string;
  /** External CTAs (e.g. "Visit Yadegar"). Internal links use `slug`. */
  ctas?: Cta[];
  /** Featured on the home "Selected work" section. */
  featured?: boolean;
};

export type WorkGroup = {
  key: string;
  eyebrow: string;
  title: string;
  intro: string;
};

export type JourneyStop = {
  place: string;
  years: string;
  note: string;
  /** Optional photo path (e.g. /journey/delhi.jpg); null shows a placeholder. */
  image: string | null;
};

export type Site = {
  name: string;
  role: string;
  location: string;
  openToWork: boolean;
  /** Portrait path once added at public/photo.jpg; null hides it. */
  portrait: string | null;
  hero: {
    headline: string;
    subhead: string;
    proofChips: string[];
    ctas: { primary: Cta; secondary: Cta };
  };
  nav: NavItem[];
  workGroups: WorkGroup[];
  work: WorkItem[];
  yadegar: {
    name: string;
    oneLiner: string;
    meaning: string;
    ctas: { primary: Cta; secondary: Cta };
    href: string;
  };
  journey: JourneyStop[];
  about: {
    teaser: string;
    teaserCta: Cta;
    title: string;
    lede: string;
    paragraphs: string[];
    knownForHeading: string;
    knownFor: string[];
    nowHeading: string;
    now: string;
  };
  contact: {
    heading: string;
    blurb: string;
  };
  links: SocialLink[];
  footer: { tagline: string; year: number };
  seo: {
    url: string;
    title: string;
    description: string;
    ogImageAlt: string;
  };
};

export const site: Site = {
  name: "Mahdis Rezaei",
  role: "Staff Product Manager",
  location: "San Francisco · open to remote",
  openToWork: true,
  portrait: "/photo.jpg",

  hero: {
    headline: "Product leader who builds.",
    subhead:
      "Staff PM at Meta, working on AI and agentic systems for trust and safety. On the side, I designed, built, and shipped Yadegar — a private AI journaling app — end to end.",
    proofChips: [
      "10+ years · Meta, Amazon",
      "Shipped an AI product solo — web + iOS",
      "Works AI-native, every day",
    ],
    ctas: {
      primary: { label: "See my work", href: "/work" },
      secondary: { label: "Get in touch", href: "/contact" },
    },
  },

  // Sticky global nav (PRD §7): 4 items + a "Get in touch" CTA.
  nav: [
    { label: "Work", href: "/work" },
    { label: "Building", href: "/building" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],

  // Grouped, gallery-style portfolio (PRD §10). Chrome stays neutral; each
  // group leads with an eyebrow + big title so range reads at a glance.
  workGroups: [
    {
      key: "built-solo",
      eyebrow: "Built solo",
      title: "Yadegar",
      intro:
        "The AI product I designed, built, and shipped end to end — product, design, architecture, and code.",
    },
    {
      key: "at-meta",
      eyebrow: "At Meta",
      title: "AI platforms for trust & safety",
      intro:
        "The systems, the calls I made, and the impact — generalized, without the internal names.",
    },
    {
      key: "range",
      eyebrow: "Platform & consumer",
      title: "Range",
      intro:
        "Work beyond AI and integrity — enterprise platforms and consumer products at scale.",
    },
  ],

  work: [
    {
      slug: "yadegar",
      title: "Yadegar",
      outcome:
        "A private AI journaling app that hands you back one page worth returning to, in your own words — the thread that endured, not the noise of the day.",
      tags: ["AI", "0→1", "Founder"],
      icon: "notebook",
      group: "built-solo",
      platform: "Web · iOS",
      ctas: [{ label: "Visit Yadegar", href: "https://yadegarjournal.com" }],
      featured: true,
    },
    {
      slug: "trusted-ai-review",
      title: "Scaling trusted AI review",
      outcome:
        "Moved high-stakes review from people to evaluated AI — without losing the trust those decisions depend on.",
      tags: ["AI platform", "Trust & Safety", "0→1"],
      icon: "shield",
      group: "at-meta",
      featured: true,
    },
    {
      slug: "ai-eval-platform",
      title: "The eval platform behind safe AI",
      outcome:
        "Built the evaluation and deployment platform that proved, continuously, that a model was safe to put in the critical path.",
      tags: ["Evaluation", "AI infra", "0→1"],
      icon: "gauge",
      group: "at-meta",
    },
    {
      slug: "detection-at-scale",
      title: "Detection at scale",
      outcome:
        "Turned fragmented, expert-driven investigation into a connected, AI-assisted, measurable detection system — faster and broader.",
      tags: ["Detection", "ML", "Platform"],
      icon: "radar",
      group: "at-meta",
    },
    {
      slug: "enterprise-identity",
      title: "Enterprise identity from scratch",
      outcome:
        "Built a platform that secured enterprise access for one of the largest ad businesses in the world.",
      tags: ["Platform", "Enterprise", "0→1"],
      icon: "key",
      group: "range",
      featured: true,
    },
    {
      title: "Ring Subscriptions",
      outcome:
        "Led Ring Protect as a recurring-revenue platform — billing infrastructure, Amazon channel, and subscription-tier launches across 20+ markets.",
      tags: ["Consumer", "Subscriptions", "Platform"],
      icon: "bell",
      group: "range",
    },
    {
      title: "GoodRx — Price Page",
      outcome:
        "Turned the most important page on a consumer healthcare marketplace into a canonical product system — balancing user trust, conversion, and SEO.",
      tags: ["Consumer", "Marketplace", "Healthcare"],
      icon: "pulse",
      group: "range",
    },
  ],

  yadegar: {
    name: "Yadegar",
    oneLiner:
      "A private AI journaling app that hands you back one page worth returning to, in your own words — the thread that endured, not the noise of the day.",
    meaning: "Yadegar means “keepsake” in Persian.",
    ctas: {
      primary: { label: "See how I built it", href: "/building" },
      secondary: { label: "Visit Yadegar", href: "https://yadegarjournal.com" },
    },
    href: "https://yadegarjournal.com",
  },

  // Life-story roadmap (About page). Warm and professional; photos optional.
  journey: [
    {
      place: "Esfarāyen, Iran",
      years: "1987 — 2006",
      note: "Born and raised in a small town in northeast Iran, in a family of builders. My parents had little formal schooling — my mother never learned to read — but they started business after business from nothing. I grew up watching them brainstorm at the kitchen table and bet on themselves, and I always knew I wanted more than the map I'd been handed.",
      image: "iran",
    },
    {
      place: "New Delhi, India",
      years: "2006 — 2012",
      note: "I left at eighteen with three months of English and a dictionary, and earned a bachelor's and a master's in computer science. I learned the language the way I'd later learn products — by paying close attention to how people actually talk and what they really need.",
      image: "india",
    },
    {
      place: "Rome, Italy",
      years: "2012 — 2014",
      note: "An MBA on scholarship. I already knew how to build software; I went to Rome to learn the other half — business, strategy, and how a product finds the people it's for.",
      image: "italy",
    },
    {
      place: "London, UK",
      years: "2014",
      note: "A marketing internship and my first real taste of the working world in a global city. Six months that made me certain I wanted to build products, not just study them.",
      image: "london",
    },
    {
      place: "New York, USA",
      years: "2014 — 2019",
      note: "I arrived with two degrees and almost no experience and built a career one hard thing at a time — a fifteen-person startup, a company through its IPO run, then platforms for international tax. New York is where I found product management and made it mine.",
      image: "new-york",
    },
    {
      place: "Los Angeles, USA",
      years: "2019 — now",
      note: "I moved west to be closer to family and the ocean. GoodRx, then Amazon — where I shipped subscription products for Ring — and then Meta, where I crossed fully into product and into the AI work I care most about.",
      image: "los-angeles",
    },
  ],

  about: {
    teaser:
      "I build things — products, teams, and a life that took six countries to assemble. Today I'm a Staff PM at Meta working on AI and agentic systems, and on the side I built Yadegar end to end.",
    teaserCta: { label: "Read my story", href: "/about" },
    title: "I build things.",
    lede: "Products, teams, and a life that took six countries to assemble.",
    paragraphs: [
      "I was born in a small town in northeast Iran and raised to fit inside lines someone else drew — my faith, my role, my future. Over twenty years I took those lines apart one at a time. I left at eighteen for India with three months of English and a dictionary, and earned a bachelor's and a master's in computer science. I did an MBA in Rome, interned in London, and landed in New York with two degrees and almost no work experience, figuring it out from scratch.",
      "I come by building honestly. My parents had almost no formal schooling — my mother never learned to read — but they were relentless entrepreneurs who started business after business from nothing: a farm, a jewelry shop, a factory. I grew up watching them brainstorm at the kitchen table and take risks without a net. It was the first product education I ever got.",
      "From there I built a career the same way I'd learned everything else — one hard thing at a time. A fifteen-person startup. A company through its IPO run. Amazon, where I shipped subscription products for Ring. And then Meta, where I finally crossed from program management into product, and into the work I care most about.",
      "Today I'm a Staff PM in Meta's integrity organization, working on AI and agentic systems that help decide what's safe at the scale of billions of users. The problems are ambiguous and high-stakes, the kind where a confident wrong answer is worse than no answer — which is exactly the kind of problem I like.",
      "And on the side, I built Yadegar. I've kept a journal for twenty years, in three languages, through every one of those moves. When I finally went back and read them, I didn't find a list of events — I found a handful of things that kept being true. So I built the tool I wished I'd had: a private journaling app that reads across everything you've written and hands you back one page worth returning to. I designed it, wrote the code, and shipped it — web and iOS — on my own.",
      "The through-line, if there is one: I'm happiest turning something ambiguous and hard into something real that people can trust. That's the job. It's also the story.",
    ],
    knownForHeading: "What I'm known for",
    knownFor: [
      "Turning messy, high-trust problems into clear operating models — and shipping them.",
      "Building with AI, not just managing people who do.",
      "Bringing skeptical engineers along; relationships are my actual superpower.",
      "Knowing when to kill the wrong approach, and having the spine to say so.",
    ],
    nowHeading: "Now",
    now: "Open to senior and Staff product roles. Building, interviewing, and writing about what I learn.",
  },

  contact: {
    heading: "Open to senior product roles.",
    blurb:
      "And always happy to talk products, AI, or building. Reach me at mahdis.rezaei87@gmail.com.",
  },

  links: [
    { label: "Email", href: "mailto:mahdis.rezaei87@gmail.com", ready: true },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/mahdisrezaei/",
      ready: true,
    },
    { label: "GitHub", href: "https://github.com/mahdis-rezaei", ready: true },
    // Flip `ready` to true once public/resume.pdf is added, to avoid a 404.
    { label: "Resume", href: "/resume.pdf", ready: false },
  ],

  footer: {
    tagline: "Designed and built with Claude Code.",
    year: 2026,
  },

  seo: {
    url: "https://mahdisrezaei.ai",
    title: "Mahdis Rezaei — Product leader who builds",
    description:
      "Mahdis Rezaei is a Staff PM at Meta working on AI and agentic systems for trust and safety, and the solo builder of Yadegar, an AI journaling app. Product strategy and the ability to ship it.",
    ogImageAlt: "Mahdis Rezaei — Product leader who builds",
  },
};

/** Home-page featured subset, in a deliberate order (PRD §8.4 default). */
export const featuredWork = site.work.filter((w) => w.featured);

/** Items that have a dedicated case-study page. */
export const workWithPages = site.work.filter(
  (w): w is WorkItem & { slug: string } => Boolean(w.slug),
);

export function getWork(slug: string) {
  return site.work.find((w) => w.slug === slug);
}
