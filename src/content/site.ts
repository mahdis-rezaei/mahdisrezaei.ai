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

export type WorkCard = {
  slug: string;
  title: string;
  outcome: string;
  tags: string[];
  featured: boolean;
};

export type Site = {
  name: string;
  role: string;
  location: string;
  openToWork: boolean;
  hero: {
    headline: string;
    subhead: string;
    proofChips: string[];
    ctas: { primary: Cta; secondary: Cta };
  };
  nav: NavItem[];
  selectedWork: WorkCard[];
  yadegar: {
    name: string;
    oneLiner: string;
    meaning: string;
    ctas: { primary: Cta; secondary: Cta };
    href: string;
  };
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

  // Home-page featured set (PRD §8.4 default): CS1, Yadegar, CS3.
  selectedWork: [
    {
      slug: "trusted-ai-review",
      title: "Scaling trusted AI review",
      outcome:
        "Moved high-stakes review from people to evaluated AI — without losing the trust those decisions depend on.",
      tags: ["AI platform", "Trust & Safety", "0→1"],
      featured: true,
    },
    {
      slug: "yadegar",
      title: "Yadegar — an AI product, built end to end",
      outcome:
        "Designed, built, and shipped a private AI journaling app, solo. Web and iOS.",
      tags: ["AI", "0→1", "Founder"],
      featured: true,
    },
    {
      slug: "enterprise-identity",
      title: "Enterprise identity from scratch",
      outcome:
        "Built a platform that secured enterprise access for one of the largest ad businesses in the world.",
      tags: ["Platform", "Enterprise", "0→1"],
      featured: true,
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

  about: {
    teaser:
      "I build things — products, teams, and a life that took six countries to assemble. Today I'm a Staff PM at Meta working on AI and agentic systems, and on the side I built Yadegar end to end.",
    teaserCta: { label: "Read my story", href: "/about" },
    title: "I build things.",
    lede: "Products, teams, and a life that took six countries to assemble.",
    paragraphs: [
      "I was born in a small town in northeast Iran and raised to fit inside lines someone else drew — my faith, my role, my future. Over twenty years I took those lines apart one at a time. I left at eighteen for India with three months of English and a dictionary, and earned a bachelor's and a master's in computer science. I did an MBA in Rome, interned in London, and landed in New York with two degrees and almost no work experience, figuring it out from scratch.",
      "From there I built a career the same way I'd learned everything else — one hard thing at a time. A fifteen-person startup. Blue Apron the year it went public. Amazon, where I shipped subscription products for Ring. And then Meta, where I finally crossed from program management into product, and into the work I care most about.",
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
