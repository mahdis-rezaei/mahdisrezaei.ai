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
      slug: "yadegar",
      title: "Yadegar",
      outcome:
        "A private AI journaling app that hands you back one page worth returning to, in your own words: the thread that endured, not the noise of the day.",
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
        "Moved high-stakes review from people to evaluated AI, without losing the trust those decisions depend on.",
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
      featured: true,
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
      primary: { label: "See how I built it", href: "/building" },
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
        "Earlier, in Monetization: took Meta's enterprise identity and SSO platform from pre-beta to general availability, migrating billions of users and securing a large share of ad revenue.",
      ],
      image: null,
    },
    {
      company: "Amazon",
      role: "Principal Technical Program Manager · Ring",
      period: "Oct 2019 to Jun 2022",
      location: "Santa Monica",
      summary:
        "Owned product strategy, roadmap, and P&L for Ring's subscription business: 14M+ customers across 20+ markets, spanning pricing, the subscription platform, and device-service integrations.",
      highlights: [
        "Launched Ring Protect Pro and Ring Protect Go across ring.com and Amazon, and shipped Ring's first multi-tenant offering on Amazon's Devices subscription platform.",
        "Led a global price increase worth tens of millions in annual revenue, modeling installed-base economics and churn trade-offs across the device fleet.",
        "Drove the first hardware-plus-subscription integration of the Amazon Astro robot with Ring Protect, as product lead across two organizations.",
      ],
      image: null,
    },
    {
      company: "GoodRx",
      role: "Senior Technical Program Manager",
      period: "Apr 2019 to Oct 2019",
      location: "Santa Monica",
      summary:
        "Led cross-functional delivery for web, iOS, and Android on a healthcare marketplace that helps people afford medication without insurance, obsessing over usability for older users.",
      highlights: [
        "Led eight scrum teams across engineering, DevOps, and delivery, improving sprint velocity by 30% and cutting release times by 40%.",
        "Ran A/B testing across web and mobile with product and analytics, lifting engagement by 25%.",
      ],
      image: null,
    },
    {
      company: "GlobeTax",
      role: "Senior Technical Program Manager",
      period: "Nov 2017 to Apr 2019",
      location: "New York",
      summary:
        "Led digital transformation for fintech tax platforms: complex, regulated, multi-country software, modernizing delivery, mobile, and release governance.",
      highlights: [
        "Directed a React Native mobile app with architects, designers, and engineers, lifting mobile engagement by 15%.",
        "Led an Agile transformation and release governance across product and engineering, cutting delivery time by 50% and improving release reliability by 20%.",
      ],
      image: null,
    },
    {
      company: "Blue Apron",
      role: "Technical Program Manager",
      period: "Feb 2017 to Nov 2017",
      location: "New York",
      summary:
        "Led product delivery and cross-functional execution for e-commerce platform teams during a period of rapid growth and IPO preparation.",
      highlights: [
        "Moved three teams from siloed execution to cross-functional delivery, increasing delivery speed by 25% and reducing backlogs by 30%.",
        "Improved defect tracking and release-readiness for global deployments, cutting post-release issues by 20%.",
      ],
      image: null,
    },
    {
      company: "Imprivata (formerly Ground Control)",
      role: "Technical Program Manager",
      period: "Feb 2015 to Feb 2017",
      location: "New York",
      summary:
        "My first product role, at a startup building enterprise mobility products for healthcare: mobile device management that let hospitals provision and reset iPads in minutes instead of by hand.",
      highlights: [
        "Led in-house and offshore teams to build an enterprise provisioning and control product for iOS devices, increasing deployment efficiency by 30%.",
        "Improved customer-issue resolution and release execution, contributing to a 15% lift in customer retention.",
      ],
      image: null,
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
