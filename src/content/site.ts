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

export type ExperienceRole = {
  title: string;
  period: string;
  location: string;
  summary: string;
  highlights?: string[];
};

export type ExperienceItem = {
  company: string;
  /** Overall span shown in the company header. */
  period: string;
  /** Key into careerImages, or null until a photo is added. */
  image: string | null;
  /** One entry per role held at the company, most recent first. */
  roles: ExperienceRole[];
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
  openToWork: false,
  portrait: "/photo.jpg",

  hero: {
    headline: "Product leader who builds.",
    subhead:
      "Staff PM at Meta, working on AI and agentic systems for trust and safety. On the side, I designed, built, and shipped Yadegar, a private AI journaling app, end to end.",
    proofChips: [
      "11 years · Meta, Amazon",
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
      slug: "ai-investigation",
      title: "Agentic Investigation Platform for Integrity Teams",
      outcome:
        "Built a multi-agent investigation platform that let integrity teams ask natural-language questions, retrieve evidence, invoke specialized agents, and review recommended actions from one trusted investigation surface.",
      tags: ["Agentic AI", "Trust & Safety", "0→1"],
      icon: "scan",
      group: "at-meta",
      featured: true,
    },
    {
      slug: "llm-lifecycle",
      title: "Safe LLM Deployment for Integrity Enforcement",
      outcome:
        "Built the production lifecycle for moving integrity enforcement from human review to evaluated LLMs, reducing scaled review by roughly 27% while holding enforcement quality flat.",
      tags: ["LLM lifecycle", "Evaluation", "0→1"],
      icon: "shield",
      group: "at-meta",
      featured: true,
    },
    {
      slug: "workflow-automation",
      title: "Agentic Workflow Automation for Integrity Escalations",
      outcome:
        "Built a governed agentic automation platform that turned manual escalation playbooks into automated, auditable workflows for triage, investigation, enforcement, response, and closure.",
      tags: ["Automation", "Platform", "Scale"],
      icon: "workflow",
      group: "at-meta",
    },
    {
      slug: "ai-eval-platform",
      title: "Evaluation Platform for Trustworthy AI Agents",
      outcome:
        "Built the benchmark and evaluation system that made high-stakes AI agents shippable through golden datasets, reusable rubrics, regression detection, and launch-quality gates.",
      tags: ["Evaluation", "AI infra", "Platform"],
      icon: "gauge",
      group: "at-meta",
    },
    {
      slug: "enterprise-identity",
      title: "Enterprise Identity Platform for Meta Business Tools",
      outcome:
        "Built a 0 to 1 enterprise identity platform that replaced personal-account-based access with secure, admin-managed identity for enterprise advertisers, agencies, IT teams, and business admins.",
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
      period: "Jun 2022 to present",
      image: "meta",
      roles: [
        {
          title: "Staff Product Manager · Central Integrity AI Platforms",
          period: "Jun 2024 to present",
          location: "Los Angeles · Remote",
          summary:
            "I own Meta's AI platform portfolio for high-stakes integrity work: the systems that help decide when content, accounts, businesses, or behaviors need review, enforcement, escalation, or automation. I turned fragmented human review and manual investigation workflows into evaluated AI systems with clear boundaries for when models act, recommend, or stay out.",
          highlights: [
            "Own the end-to-end LLM evaluation and deployment lifecycle for integrity enforcement, from offline hill-climbing and shadow mode through reverse shadow and production graduation. Reduced scaled human review by ~27% while holding enforcement quality flat across dozens of violation areas.",
            "Built and scaled a multi-agent investigation platform that turns a natural-language question into evidence-backed reasoning and recommended actions. Reached 94% accuracy, above human-expert performance, with 1,000+ weekly users and 7,000+ AI-led investigations a day.",
            "Shipped an agentic workflow automation platform that encodes human playbooks into governed workflows across 2,000+ escalation types, auto-actioning high-precision cases while preserving human review for ambiguous, high-risk, or policy-sensitive decisions. Cut triage time by ~65%, freeing 300K human hours a year and scaling toward 1M+ hours.",
            "Architected the centralized ground-truth platform underneath all of it, with versioning, staleness detection, reviewer-disagreement escalation, train/test/eval reuse controls, and health analytics, so models are judged against trustworthy, current, auditable data instead of spreadsheets.",
          ],
        },
        {
          title: "Senior Product Manager · Monetization and Advertiser Platforms",
          period: "Jun 2022 to Jun 2024",
          location: "Menlo Park · Remote",
          summary:
            "The work I was promoted to Staff on. I built the enterprise identity foundation behind Meta's ads business: the layer that lets large advertisers run their business securely instead of relying on personal Facebook logins shared across a company.",
          highlights: [
            "Took Meta's 0-to-1 enterprise SSO and identity platform from pre-beta to launch, reframing it from a login feature into enterprise trust as the product. Delivered $318M in advertiser revenue under protection, 165% over goal, and 11 gold- and platinum-tier advertisers onboarded, closing a real account-takeover gap.",
            "Migrated a revenue-critical advertiser ecosystem onto the new account type without breaking the businesses that depended on the old way. The hard part was not the auth flow; it was the trust, migration, and cross-org alignment across many teams.",
            "Drove the cross-app advertiser experience across Facebook, Instagram, WhatsApp, and Threads: a privacy-compliant re-architecture of how businesses link, manage, and consent to sharing accounts, standardized across 100+ entry points and 120+ teams.",
          ],
        },
      ],
    },
    {
      company: "Amazon",
      period: "Oct 2019 to Jun 2022",
      image: "ring",
      roles: [
        {
          title: "Principal Technical Program Manager · Ring",
          period: "Oct 2019 to Jun 2022",
          location: "Santa Monica",
          summary:
            "I owned Ring Protect, the subscription business behind the hardware. It was less a pricing page than a recurring-revenue platform spanning billing, tax, the Amazon sales channel, and a full portfolio of tiers. I held the P&L and roadmap for 14M+ customers across 20+ markets.",
          highlights: [
            "Launched Ring Protect Pro and Ring Protect Go across ring.com and Amazon, and shipped Ring's first subscription on Amazon's own devices platform.",
            "Led a global price increase worth +$49M in annual revenue, modeling installed-base economics and churn trade-offs across the device fleet.",
            "Drove the first hardware-plus-subscription integration between Amazon Astro and Ring Protect as product lead across two organizations, including a credit-card-free trial that saved ~18 dev-months and made the Astro line more profitable.",
            "Rebuilt subscription purchase and management flows to work across regions, currencies, and sales channels.",
          ],
        },
      ],
    },
    {
      company: "GoodRx",
      period: "Apr 2019 to Oct 2019",
      image: "goodrx",
      roles: [
        {
          title: "Senior Technical Program Manager",
          period: "Apr 2019 to Oct 2019",
          location: "Santa Monica",
          summary:
            "I owned the desktop price page, the most important page on a consumer healthcare marketplace with a 90+ NPS. It looked simple to users: a drug, a list of prices, a coupon. Underneath, it was a complex product system balancing user trust, conversion, SEO, drug taxonomy, pharmacy pricing, and edge-case behavior.",
          highlights: [
            "Turned the page from a pile of historically evolved special cases into a canonical product system: a clear taxonomy of drug and row types, documented behavior for each, and a QA matrix that became the foundation for simplifying the experience across platforms.",
            "Framed decisions around the tension that actually mattered: user trust, conversion, and SEO crawlability, which pulled against each other more than you might expect.",
          ],
        },
      ],
    },
    {
      company: "GlobeTax",
      period: "Nov 2017 to Apr 2019",
      image: "globetax",
      roles: [
        {
          title: "Senior Technical Program Manager",
          period: "Nov 2017 to Apr 2019",
          location: "New York",
          summary:
            "I owned eCerts, a self-service tool in one of the most complex regulated domains I've worked in: international withholding tax, the rules that govern how cross-border investment income gets taxed and reclaimed. eCerts walked users through generating and managing IRS tax-certification forms, including W-8 and W-9 workflows that determine treaty benefits.",
          highlights: [
            "Took something dense and error-prone and made it something a person could actually complete correctly.",
            "Moved from consumer products into regulated business software, which taught me a different way to think about feedback, testing, and trust. I learned to hold a genuinely complex product in my head and explain it plainly, which turned out to be one of the most portable skills I have.",
          ],
        },
      ],
    },
    {
      company: "Blue Apron",
      period: "Feb 2017 to Nov 2017",
      image: "blueapron",
      roles: [
        {
          title: "Technical Program Manager",
          period: "Feb 2017 to Nov 2017",
          location: "New York",
          summary:
            "I ran delivery on the internal systems every department relied on, including marketing, sales, finance, and engineering, through the company's IPO. I joined at around a thousand people, right as Blue Apron prepared to go public, and it IPO'd that June while I was there.",
          highlights: [
            "Brought real Agile practice to a team that did not have it yet: made the case to leadership, reconfigured JIRA around how the team actually worked, and moved everyone across locations onto weekly sprints.",
            "Rolled out a company-wide help-desk system and saw a high-growth consumer company scale through IPO from the inside.",
          ],
        },
      ],
    },
    {
      company: "Imprivata (formerly GroundControl)",
      period: "Feb 2015 to Feb 2017",
      image: "imprivata",
      roles: [
        {
          title: "Technical Program Manager",
          period: "Feb 2015 to Feb 2017",
          location: "New York",
          summary:
            "My first full-time role in the US was at a fifteen-person startup building deployment-automation software for fleets of shared Apple devices. Organizations were configuring tens of thousands of iPhones and iPads by hand. The product imaged, configured, backed up, restored, and wiped them automatically at scale. It lives on today inside Imprivata as Mobile Access Management.",
          highlights: [
            "Led in-house and offshore teams to build an enterprise provisioning and control product for iOS devices, improving deployment efficiency at scale.",
            "Improved customer-issue resolution and release execution, contributing to stronger customer retention.",
            "This is where I learned to ship, and where I learned that I am fast at it.",
          ],
        },
      ],
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
    heading: "Let's talk.",
    blurb: "Always happy to talk products, AI, or building.",
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
