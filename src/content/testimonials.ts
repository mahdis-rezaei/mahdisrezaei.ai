/**
 * Peer feedback shown on the Professional page ("What others say" tab).
 * All quotes are real, drawn from the Meta review corpus, lightly edited for
 * readability and anonymized to role. Each is tagged with the PM strength it
 * speaks to; `featured` leads the wall, `accent` renders as an indigo card.
 */
export type Testimonial = {
  quote: string;
  cite: string;
  theme: string;
  featured?: boolean;
  accent?: boolean;
};

export const testimonials = {
  eyebrow: "What others say",
  title: "The people I've built with, in their words",
  lede: "Real feedback from the engineers, managers, and partners I've shipped with, anonymized to each person's role and tagged by the strength it speaks to.",
  items: [
    {
      quote:
        "She goes deep in technically hairy areas. I'm comfortable sending her in with partners to get to an aligned technical plan, instead of an engineer.",
      cite: "Senior Engineering Leader",
      theme: "Technical depth",
      featured: true,
    },
    {
      quote: "One of the most technical PMs I've worked with.",
      cite: "Software Engineer",
      theme: "Technical depth",
      accent: true,
    },
    {
      quote:
        "She always has good insight into which technical components might go wrong. Very impressive for a non-engineering role.",
      cite: "Software Engineer",
      theme: "Technical depth",
    },
    {
      quote:
        "She started with plans she was only twenty percent sure of, and kept driving toward clarity until it was there. She shined throughout.",
      cite: "Software Engineer",
      theme: "Ambiguity and 0 to 1",
    },
    {
      quote:
        "She consistently demonstrated skills that exceeded a high-performing PM.",
      cite: "Product Marketing Lead",
      theme: "Operating above level",
    },
    {
      quote:
        "She brought a much-needed rigor and the ability to connect people, process, and technical capability to the product. She spots gaps almost immediately.",
      cite: "Product Marketing Lead",
      theme: "Rigor and gap-spotting",
    },
    {
      quote:
        "This would not have been feasible with just the engineering team.",
      cite: "Director of Engineering",
      theme: "Influence at scale",
      accent: true,
    },
    {
      quote:
        "Her leadership in rallying every stakeholder had an outsized impact.",
      cite: "Software Engineer",
      theme: "Influence at scale",
    },
    {
      quote:
        "An exceptional partner who consistently delivers results and earns my full trust.",
      cite: "Engineering Manager",
      theme: "Trust",
    },
    {
      quote:
        "She doesn't shy away from the elephant in the room. She asks the hard questions and holds everyone accountable, and brings an energy no one else can.",
      cite: "Engineering Manager",
      theme: "Candor",
    },
    {
      quote:
        "Her documentation cut our testing time to half a day and let my team get back to building.",
      cite: "Web Engineering Manager",
      theme: "Communication",
    },
    {
      quote:
        "Mahdis is one of the best things that happened to this program. We felt the gap when she left. I hope she comes back.",
      cite: "Senior Engineer",
      theme: "Impact",
      accent: true,
    },
  ] satisfies Testimonial[],
};
