/**
 * Single source of truth for all site copy.
 * Never hard-code visitor-facing strings in components; edit them here.
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

/** Icon key for a work card's tile, mapped to a lucide icon in the UI. */
export type WorkIcon =
  | "notebook"
  | "shield"
  | "gauge"
  | "radar"
  | "scan"
  | "workflow"
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
  /** Grouping key; must match a WorkGroup.key. */
  group: string;
  /** e.g. "Web · iOS", shown on product-style cards. */
  platform?: string;
  /** External CTAs (e.g. "Visit Yadegar"). Internal links use `slug`. */
  ctas?: Cta[];
  /** Overrides the case-study link (else /work/[slug] when a slug exists). */
  caseHref?: string;
  /** Featured on the home "Selected work" section. */
  featured?: boolean;
};

export type WorkGroup = {
  key: string;
  eyebrow: string;
  title: string;
  intro: string;
};

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  highlights?: string[];
  /** Key into careerImages, or null until a photo is added. */
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
  experience: ExperienceItem[];
  about: {
    teaser: string;
    teaserCta: Cta;
    title: string;
    lede: string;
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
  location: "Los Angeles · open to remote",
  openToWork: true,
  portrait: "/photo.jpg",

  hero: {
    headline: "Product leader who builds.",
    subhead:
      "Staff PM at Meta, working on AI and agentic systems for trust and safety. On the side, I designed, built, and shipped Yadegar, a private AI journaling app, end to end.",
    proofChips: [
      "10+ years · Meta, Amazon",
      "Shipped an AI product solo, web and iOS",
      "Works AI-native, every day",
    ],
    ctas: {
      primary: { label: "See my work", href: "/work" },
      secondary: { label: "Get in touch", href: "/contact" },
    },
  },

  // Sticky global nav (PRD §7): 4 items + a "Get in touch" CTA.
  // Personal maps to life (/about); Professional to merged work + career (/work).
  nav: [
    { label: "Personal", href: "/about" },
    { label: "Professional", href: "/work" },
    { label: "Building", href: "/building" },
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
        "The AI product I designed, built, and shipped end to end: product, design, architecture, and code.",
    },
    {
      key: "at-meta",
      eyebrow: "At Meta",
      title: "AI platforms for trust & safety",
      intro:
        "The systems, the calls I made, and the impact, generalized, without the internal names.",
    },
    {
      key: "range",
      eyebrow: "Platform & consumer",
      title: "Range",
      intro:
        "Work beyond AI and integrity: enterprise platforms and consumer products at scale.",
    },
  ],

  work: [
    {
      title: "Yadegar",
      outcome:
        "A private AI journaling app that hands you back one page worth returning to, in your own words: the thread that endured, not the noise of the day.",
      tags: ["AI", "0→1", "Founder"],
      icon: "notebook",
      group: "built-solo",
      platform: "Web · iOS",
      caseHref: "/building/yadegar",
      ctas: [{ label: "Visit Yadegar", href: "https://yadegarjournal.com" }],
      featured: true,
    },
    {
      slug: "llm-lifecycle",
      title: "Deploying AI into high-stakes decisions",
      outcome:
        "Built the lifecycle that lets AI take over high-stakes enforcement decisions, and keeps proving, continuously, that it's safe to.",
      tags: ["LLM lifecycle", "Evaluation", "0→1"],
      icon: "shield",
      group: "at-meta",
      featured: true,
    },
    {
      slug: "ai-investigation",
      title: "An AI investigation platform people trust",
      outcome:
        "Led a multi-agent investigation platform to above-human-expert accuracy, by refusing to build a chatbot.",
      tags: ["Agentic AI", "Trust & Safety", "0→1"],
      icon: "scan",
      group: "at-meta",
      featured: true,
    },
    {
      slug: "workflow-automation",
      title: "Automating the operational first mile",
      outcome:
        "Turned thousands of fragmented, manual workflows into a governed automation platform, and kept humans exactly where the risk was.",
      tags: ["Automation", "Platform", "Scale"],
      icon: "workflow",
      group: "at-meta",
    },
    {
      slug: "ai-eval-platform",
      title: "The evaluation platform behind all of it",
      outcome:
        "Built the benchmark and eval platform that made every AI product provably safe to ship, and to keep proving in production.",
      tags: ["Evaluation", "AI infra", "Platform"],
      icon: "gauge",
      group: "at-meta",
    },
    {
      slug: "detection-at-scale",
      title: "Detection at scale",
      outcome:
        "Turned fragmented, expert-driven investigation into a connected, AI-assisted, measurable detection system: faster and broader.",
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
    },
    {
      title: "Ring Subscriptions",
      outcome:
        "Led Ring Protect as a recurring-revenue platform: billing infrastructure, Amazon channel, and subscription-tier launches across 20+ markets.",
      tags: ["Consumer", "Subscriptions", "Platform"],
      icon: "bell",
      group: "range",
    },
    {
      title: "GoodRx Price Page",
      outcome:
        "Turned the most important page on a consumer healthcare marketplace into a canonical product system, balancing user trust, conversion, and SEO.",
      tags: ["Consumer", "Marketplace", "Healthcare"],
      icon: "pulse",
      group: "range",
    },
  ],

  yadegar: {
    name: "Yadegar",
    oneLiner:
      "A private AI journaling app that hands you back one page worth returning to, in your own words: the thread that endured, not the noise of the day.",
    meaning: "Yadegar means “keepsake” in Persian.",
    ctas: {
      primary: { label: "See how I built it", href: "/building/yadegar" },
      secondary: { label: "Visit Yadegar", href: "https://yadegarjournal.com" },
    },
    href: "https://yadegarjournal.com",
  },

  // US career (Professional page), most recent first. Meta generalized per
  // PRD §13. Photos optional (fill careerImages when uploaded).
  experience: [
    {
      company: "Meta",
      role: "Staff Product Manager · Central Integrity",
      period: "Jun 2022 to now",
      location: "Los Angeles · Remote",
      summary:
        "I crossed fully into product at Meta and was promoted to Staff. Today I own the AI platform portfolio for integrity, turning the enforcement decisions that keep billions of people safe into evaluated, AI-first systems. Before that, in Monetization, I built the enterprise identity and single sign-on platform behind Meta's ads business.",
      highlights: [
        "Own the LLM evaluation and deployment lifecycle for integrity enforcement, from offline hill-climbing through shadow mode to production, cutting scaled human review by roughly a quarter while holding enforcement quality flat, across dozens of violation areas.",
        "Built Meta's flagship multi-agent investigation platform: a natural-language interface that returns evidence-backed reasoning and recommended actions. It reached above-human-expert accuracy, with a thousand-plus weekly users running thousands of AI-led investigations a day.",
        "Shipped an agentic workflow-automation platform that encodes human playbooks into governed workflows across thousands of escalation types, with explicit control over where AI acts, recommends, or stays out, cutting triage time by roughly two-thirds and freeing hundreds of thousands of human hours a year.",
        "Earlier, in Monetization: took Meta's enterprise identity and SSO platform from pre-beta to general availability, migrating a huge, dependent advertiser ecosystem without breaking it, closing a real account-takeover gap, and securing a large share of ad revenue.",
      ],
      image: "meta",
    },
    {
      company: "Amazon",
      role: "Principal Technical Program Manager · Ring",
      period: "Oct 2019 to Jun 2022",
      location: "Santa Monica",
      summary:
        "Ring is Amazon's home-security business, known for the video doorbell, on a mission to make neighborhoods safer and smart security affordable. I owned Ring Protect, the subscription behind the hardware, which is less a pricing page than a recurring-revenue platform: billing and payments, tax, the Amazon sales channel, and a portfolio of tiers. I held the P&L and roadmap for 14M+ customers across 20+ markets.",
      highlights: [
        "Launched Ring Protect Pro and Ring Protect Go across ring.com and Amazon, and shipped Ring's first subscription on Amazon's own devices platform.",
        "Led a global price increase worth tens of millions in annual revenue, modeling installed-base economics and churn trade-offs across the device fleet.",
        "Drove the first hardware-plus-subscription integration of the Amazon Astro robot with Ring Protect, including a trial that needed no credit card, a design that saved months of engineering.",
        "Rebuilt the subscription purchase and management flows to work across regions and currencies.",
      ],
      image: "ring",
    },
    {
      company: "GoodRx",
      role: "Senior Technical Program Manager",
      period: "Apr 2019 to Oct 2019",
      location: "Santa Monica",
      summary:
        "GoodRx is a consumer healthcare marketplace for prescription savings: search a medication, compare prices across pharmacies, and get a coupon that can cut the cost dramatically. Customers loved it, at a 90+ NPS. I owned the desktop price page, the most important page on the site, which looks simple (a drug, a list of prices, a coupon) and is anything but underneath.",
      highlights: [
        "Turned the price page from a pile of historically-evolved special cases into a canonical product system: a clear taxonomy of drug and row types, documented behavior for each, and a QA matrix.",
        "Framed every decision around the tension that actually mattered, user trust, conversion, and SEO crawlability, which pull against each other more than you'd expect.",
      ],
      image: "goodrx",
    },
    {
      company: "GlobeTax",
      role: "Senior Technical Program Manager",
      period: "Nov 2017 to Apr 2019",
      location: "New York",
      summary:
        "GlobeTax builds software for international withholding tax, the rules that govern how cross-border investment income gets taxed and reclaimed: a genuinely complex, heavily regulated, multi-country domain. I owned eCerts, a self-service tool that walked financial institutions' clients through generating and managing their IRS tax-certification forms, the W-8 and W-9 paperwork that determines treaty benefits.",
      highlights: [
        "Took something dense and error-prone and made it something a person could actually complete correctly.",
        "A deliberate stretch from consumer products to internal business users, a different way to think about feedback and testing; I learned to hold a complicated, regulated product in my head and explain it plainly.",
      ],
      image: "globetax",
    },
    {
      company: "Blue Apron",
      role: "Technical Program Manager",
      period: "Feb 2017 to Nov 2017",
      location: "New York",
      summary:
        "Blue Apron is the meal-kit service: recipes and pre-portioned ingredients delivered to your door. I joined at around a thousand people, right as it prepared to go public, and it IPO'd that June while I was there. I worked inside the company, on the information systems that every department, marketing, sales, finance, and engineering, ran on.",
      highlights: [
        "Brought real Agile practice to a team that didn't have it yet: made the case to leadership, reconfigured JIRA around how the team actually worked, and got everyone, across locations, onto weekly sprints.",
        "Rolled out a new company-wide help-desk system, and watched a company grow and go public up close.",
      ],
      image: "blueapron",
    },
    {
      company: "Imprivata (formerly Ground Control)",
      role: "Technical Program Manager",
      period: "Feb 2015 to Feb 2017",
      location: "New York",
      summary:
        "A fifteen-person SaaS startup in New York, and my first full-time job in the US; the product lives on today inside Imprivata as Mobile Access Management. GroundControl was deployment-automation software for fleets of shared Apple devices: organizations were configuring tens of thousands of iPhones and iPads by hand (Macy's alone ran more than 5,000 across its stores), and our software imaged, configured, backed up, restored, and wiped them automatically.",
      highlights: [
        "Ran the engineering team as project manager and scrum master, with in-house and offshore developers, owning sprint planning, standups, releases, and QA at once, because a startup that size doesn't have separate people for those.",
        "It's where I learned to ship, and where I learned that I was fast at it.",
      ],
      image: "imprivata",
    },
  ],

  about: {
    teaser:
      "I build things: products, teams, and a life that took six countries to assemble. Today I'm a Staff PM at Meta working on AI and agentic systems, and on the side I built Yadegar end to end.",
    teaserCta: { label: "Read my story", href: "/about" },
    title: "I build things.",
    lede: "Products, teams, and a life that took six countries to assemble.",
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
    title: "Mahdis Rezaei · Product leader who builds",
    description:
      "Mahdis Rezaei is a Staff PM at Meta working on AI and agentic systems for trust and safety, and the solo builder of Yadegar, an AI journaling app. Product strategy and the ability to ship it.",
    ogImageAlt: "Mahdis Rezaei · Product leader who builds",
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
