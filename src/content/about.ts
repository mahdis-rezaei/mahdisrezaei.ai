/**
 * About-page content (Personal hub tabs + closing band), from the approved spec.
 * Rendered in the site's existing design system (neutral + indigo + Space
 * Grotesk / Geist / mono) rather than the reference's parchment-serif look,
 * per the spec's "honor the existing system over the reference" instruction.
 *
 * Meta specifics follow PRD §13: internal codenames and level/rating jargon are
 * omitted; figures are included per the owner's explicit spec.
 */

export type Chapter = {
  n: string;
  place: string;
  years: string;
  caption: string;
  /** One or more narrative paragraphs. */
  narrative: string[];
  /** The recurring "the thread" motif line. */
  thread: string;
  /** Key into journeyImages, or null. */
  image: string | null;
};

export type Metric = { value: string; label: string };

export type Principle = {
  title: string;
  body: string;
};

/**
 * A poem she keeps close. Only a short, attributed excerpt lives here; the
 * full text stays at `href` on an authoritative source (the poems are under
 * copyright, so we quote a few lines and link out rather than reproduce them).
 */
export type Poem = {
  title: string;
  poet: string;
  /** A few lines, rendered as-is. Kept short on purpose. */
  excerpt: string[];
  /** Excerpt reading direction; defaults to English/LTR. */
  lang?: "en" | "fa";
  /** Where to read the whole poem. */
  href: string;
};

/** An expandable, region-grouped list of places visited. */
export type Places = {
  /** Always-visible headline, e.g. "Four continents, one suitcase." */
  lead: string;
  /** Summary label on the collapsed row. */
  summary: string;
  /** Total place count shown beside the summary. */
  count: number;
  groups: { region: string; places: string[] }[];
};

export type Practice = {
  title: string;
  body: string;
  why: string;
  /** Optional link applied to a single word inside `why`. */
  whyLink?: { word: string; href: string };
  /** Optional photo key into practiceImages. */
  image?: string;
  /** Overlay caption for the photo. */
  imageCaption?: string;
  /** Optional expandable reading list (used by the poetry practice). */
  poems?: Poem[];
  /** Optional expandable places list (used by the travel practice). */
  places?: Places;
};

export type Belief = { lead: string; rest: string };

export const aboutPage = {
  personal: {
    eyebrow: "The journey",
    title: "Six countries, one through-line",
    thesisLead: "Six countries. Four languages.",
    thesis:
      "One person who keeps doing the same thing in each of them: taking something ambiguous and hard and turning it into something real that people can trust. This is the long way around to that sentence.",
    closeLead: "Read it back and it's one person the whole time.",
    closeEmph: "That's the job. It's also the story.",
    chapters: [
      {
        n: "01",
        place: "Esfarāyen, Iran",
        years: "1987 to 2006",
        caption: "Esfarāyen · a family of builders",
        narrative: [
          "Born in a small town in northeast Iran, into a family of builders. My parents had little formal schooling, and my mother never learned to read, yet they started business after business from nothing. I grew up at the kitchen table while they sketched the next one, and I understood early that the map I'd been handed was smaller than the one I wanted.",
        ],
        thread: "Learning to bet on an idea before anyone hands you permission.",
        image: "iran",
      },
      {
        n: "02",
        place: "New Delhi, India",
        years: "2006 to 2012",
        caption: "New Delhi · CS, from scratch",
        narrative: [
          "I left at eighteen with three months of English and a dictionary, and came back with a bachelor's and a master's in computer science. I learned the language the way I'd later learn products: not from the textbook, but by listening for how people actually talk and what they're really asking for underneath it.",
        ],
        thread: "Fluency is listening, not vocabulary.",
        image: "india",
      },
      {
        n: "03",
        place: "Rome, Italy",
        years: "2012 to 2014",
        caption: "Rome · MBA, on scholarship",
        narrative: [
          "An MBA on a full scholarship. I already knew how to build the thing; I went to Rome to learn the half they don't teach engineers: how a product earns its market, and why the best idea still loses if no one can find the people it's for.",
        ],
        thread: "The engineer learning to think like the business.",
        image: "italy",
      },
      {
        n: "04",
        place: "London, UK",
        years: "2014",
        caption: "London · first taste of the working world",
        narrative: [
          "Six months as a marketing intern, and my first real taste of the working world, in a city that runs on a hundred languages at once. It settled a question I'd been circling for years: I didn't want to study products from the outside. I wanted to build them.",
        ],
        thread: "Studying products turned into needing to build them.",
        image: "london",
      },
      {
        n: "05",
        place: "New York, USA",
        years: "2014 to 2019",
        caption: "New York · found product management",
        narrative: [
          "I arrived with two degrees and almost no experience, and built a career the only way I know how: one hard thing at a time. A fifteen-person startup where everyone did everything. A company through the chaos of its IPO year. Then platforms for international tax, where a wrong answer is expensive. New York is where I found product management and made it mine.",
        ],
        thread: "Ambiguity stopped being the scary part and became the job.",
        image: "new-york",
      },
      {
        n: "06",
        place: "Los Angeles, USA",
        years: "2019 to now",
        caption: "Los Angeles · family, the ocean, the work",
        narrative: [
          "I moved west for family and the ocean, and did the work that finally pointed straight at what I care about. Subscription products at Amazon for Ring. Then Meta, where I crossed fully into product, and into AI and agentic systems that help decide what's safe at the scale of billions of people. Ambiguous, high-stakes, the kind where a confident wrong answer is worse than none. Exactly my kind of problem.",
          "On the side, I built Yadegar. I'd journaled for twenty years in three languages, and when I read it all back I didn't find a list of events; I found a handful of things that kept being true. So I built the tool I wished I'd had, and shipped it, web and iOS, on my own.",
        ],
        thread: "The whole line coming into focus.",
        image: "los-angeles",
      },
    ] satisfies Chapter[],
  },

  career: {
    eyebrow: "The work",
    title: "Building trusted AI at scale",
    lede: "I'm a product leader at Meta, building the AI and agentic systems that help decide what's safe for billions of people. The common thread: I don't ship the model. I build the trust around it.",
    metrics: [
      {
        value: "~27%",
        label: "less scaled human review, with enforcement quality held flat",
      },
      {
        value: "94%",
        label: "investigation accuracy, above human expert",
      },
      {
        value: "65%",
        label: "faster triage, and roughly 300,000 human hours freed a year",
      },
    ] satisfies Metric[],
  },

  howIWork: {
    eyebrow: "How I work",
    title: "The principles I work by",
    lede: "Six rules I've earned the hard way, building high-stakes systems where a confident wrong answer is worse than none.",
    principles: [
      {
        title: "Trust is the product.",
        body: "In high-stakes systems, the model or the feature isn't what I'm really shipping. The trust around it is. I spend most of my time on the part nobody claps for: the ground truth, the gates, the way a wrong answer gets caught before it matters.",
      },
      {
        title:
          "I'd rather kill the wrong approach than ship a confident wrong answer.",
        body: "The most useful thing I do some weeks is stop something, and say so early, out loud, before it's expensive.",
      },
      {
        title: "The engineers have to want to build it.",
        body: "I don't hand down specs. I bring skeptical engineers along until it's their idea too, and I earn that room by understanding the system, not just the roadmap.",
      },
      {
        title: "Start from what people actually need, not what they ask for.",
        body: "I learned a language at eighteen by listening for the meaning under the words. I've built products the same way ever since: find the real gap first.",
      },
      {
        title: "I write it down with a date, and then I go collect it.",
        body: "I make the goal a promise with a deadline: a title, a launch, a platform. And I keep it. That record is why I trust myself with ambiguous, high-stakes work, and it's how I operated above my level long before the title caught up.",
      },
      {
        title: "I build with AI. I don't just manage people who do.",
        body: "I shipped Yadegar end to end, design and code, web and iOS, on my own, with AI as my team. I know where these tools are sharp and where they quietly lie, because I use them to make real things.",
      },
    ] satisfies Principle[],
  },

  offClock: {
    eyebrow: "Off the clock",
    title: "I don't have hobbies. I have practices.",
    lede: "Things I've kept up for a decade or more, the way some people keep up a faith.",
    practices: [
      {
        title: "Stillness",
        body: "I've meditated for over ten years, skeptically, complaining the whole way through, and showing up anyway. A silent week at a Zen monastery with 3:50 a.m. wake-ups taught me more about my own mind than any book did.",
        why: "It's how I stay calm owning systems where a confident wrong answer is worse than no answer.",
        image: "stillness",
        imageCaption: "A silent week at a Zen monastery",
      },
      {
        title: "Journaling",
        body: "I've journaled since childhood, and almost every morning as an adult. Not a diary, a conversation. I interview myself, argue with my own fear, and get to the actual question under the noise.",
        why: "Same muscle as finding the real problem under what a user says they want. It's also why Yadegar exists: I finally built the journaling tool I'd always wanted.",
        whyLink: { word: "Yadegar", href: "https://yadegarjournal.com/login" },
      },
      {
        title: "Early mornings and long runs",
        body: "4:30 alarms, coffee in the dark, then the Hudson and later the Pacific. Motion is how I think.",
        why: "The discipline that ships things is built before 9 a.m.",
      },
      {
        title: "Poetry, in two languages",
        body: "I collect poems and translate the ones that matter into Farsi. A poem isn't fully mine until it lives in both my languages.",
        why: "I learned English by listening for meaning under words; I've built products the same way ever since.",
        poems: [
          {
            title: "Clearing",
            poet: "Martha Postlethwaite",
            excerpt: ["Do not try to save", "the whole world", "or do anything grandiose."],
            href: "https://www.mindfulnessassociation.net/words-of-wonder/clearing-martha-postlethwaite/",
          },
          {
            title: "صدای پای آب (The Sound of Water's Footsteps)",
            poet: "Sohrab Sepehri",
            excerpt: ["چشم‌ها را باید شست", "جور دیگر باید دید"],
            lang: "fa",
            href: "https://sohrabsepehri.org/poems/sedaye-paye-ab/",
          },
          {
            title: "Start Close In",
            poet: "David Whyte",
            excerpt: ["Start close in,", "don't take the second step", "or the third,"],
            href: "https://davidwhyte.substack.com/p/start-close-in-78b",
          },
        ],
      },
      {
        title: "Going where there's no map",
        body: "Six countries, a year lived out of a single suitcase, and once a solo drive into the Mojave with no plan and no signal. I don't travel to see places. I travel to meet the next version of myself.",
        why: "I'm most at home in the unknown, which happens to be where 0→1 product work lives.",
        places: {
          lead: "Four continents, one suitcase.",
          summary: "Where I've wandered",
          count: 22,
          groups: [
            {
              region: "Asia & Middle East",
              places: [
                "Iran",
                "India",
                "Malaysia",
                "Thailand",
                "Indonesia",
                "Saudi Arabia",
                "Dubai",
                "Turkey",
              ],
            },
            {
              region: "Europe",
              places: [
                "Italy",
                "Spain",
                "France",
                "Germany",
                "Poland",
                "Denmark",
                "Scotland",
                "England",
              ],
            },
            {
              region: "Americas",
              places: [
                "USA",
                "Canada",
                "Mexico",
                "Costa Rica",
                "Peru",
                "Puerto Rico",
              ],
            },
          ],
        },
      },
    ] satisfies Practice[],
  },

  beliefs: {
    eyebrow: "What I believe",
    title: "A few things I hold to be true",
    lede: "Not slogans. These are the beliefs that quietly shape how I plan, how I debug, and how I treat the people I build with.",
    items: [
      {
        lead: "Think bigger, as policy, not a poster.",
        rest: "Whatever I'm planning, the honest question is whether I've sized it too small.",
      },
      {
        lead: "Identity is a draft, not a possession.",
        rest: "I hold no version of my own conclusions so tightly that I can't set it down when the evidence changes, which is how I treat a roadmap.",
      },
      {
        lead: "Don't blame the lotus. Look into the reasons.",
        rest: "When something fails, the useful move is root cause, not fault. I built that into how I debug models and how I work with people.",
      },
      {
        lead: "Build your own castle.",
        rest: "I stopped waiting for someone to hand me the plan a long time ago. I'd rather build the thing than wait for permission.",
      },
    ] satisfies Belief[],
  },
};
