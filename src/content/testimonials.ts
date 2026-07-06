/**
 * Peer feedback shown on the Professional page ("What others say" tab) as a
 * swappable carousel. All quotes are real, from the Meta review corpus, lightly
 * edited for readability and anonymized to role. Each is tagged with the PM
 * strength it speaks to, which also drives the jump-to-theme chip nav.
 */
export type Testimonial = { quote: string; cite: string; theme: string };

export const testimonials = {
  eyebrow: "What others say",
  title: "The people I've built with, in their words",
  lede: "Real feedback from the engineers, product leaders, managers, and cross-functional partners I've shipped with. Names are removed, but the work is real.",
  items: [
    {
      quote:
        "She turns ambiguous AI capability into production systems people can trust, with launch gates, trusted data, human oversight, and measurable impact.",
      cite: "ML Engineer",
      theme: "Trusted AI at scale",
    },
    {
      quote:
        "Mahdis is one of the most technical PMs I've worked with. She understands the architecture deeply enough to draft accurate technical content, ask the right questions, and unblock engineers.",
      cite: "Senior Engineer",
      theme: "Technical depth",
    },
    {
      quote:
        "She accepted the ambiguity, started with 20% confidence plans, and kept driving clarity until the team could execute.",
      cite: "Director of Engineering",
      theme: "Ambiguity to clarity",
    },
    {
      quote:
        "She brought much-needed rigor and the ability to connect people, process, and technical capability to the product.",
      cite: "Product Marketing Lead",
      theme: "Systems thinking",
    },
    {
      quote:
        "Her product judgment was especially strong in distinguishing where AI should act, where it should recommend, and where it should stay out.",
      cite: "Product Manager",
      theme: "Human judgment in AI",
    },
    {
      quote:
        "She does not shy away from the elephant in the room. She asks hard questions, holds stakeholders accountable, and drives decisions to closure.",
      cite: "Engineering Manager",
      theme: "Candor",
    },
    {
      quote:
        "She understood this should not be a generic chatbot. She defined it as an evidence-grounded investigation layer with source-of-truth discipline, human control, and recommended actions.",
      cite: "Senior Engineer",
      theme: "Agentic product strategy",
    },
    {
      quote:
        "With her on the project, engineers could focus on the technical work. We could rely on her to drive alignment, timelines, milestones, and everything around execution.",
      cite: "Senior Engineer",
      theme: "Engineering leverage",
    },
    {
      quote:
        "She showed leadership, ownership, and influence across 16+ organizations, experimenting with different tactics to get commitment and drive execution.",
      cite: "Engineering Manager",
      theme: "Influence at scale",
    },
    {
      quote:
        "She expanded evals from model response quality to end-to-end system behavior: grounding, tool use, evidence quality, human confirmation, safe failure, and regression detection.",
      cite: "ML Engineer",
      theme: "Evaluation",
    },
    {
      quote:
        "I asked her to support two workstreams. Instead, she supported all six and created team-level tracking no one had even asked for.",
      cite: "Engineering Manager",
      theme: "Operating above level",
    },
    {
      quote:
        "Rather than letting teams build one-off scripts or disconnected agents, she helped define reusable workflow primitives, launch governance, monitoring, audit logs, and exception handling.",
      cite: "Engineering Partner",
      theme: "Platform thinking",
    },
    {
      quote:
        "She applies a critical lens and identifies gaps almost immediately, especially in reporting, data quality, launch readiness, and ownership.",
      cite: "Product Marketing Lead",
      theme: "Rigor and gap-spotting",
    },
    {
      quote:
        "She dove headfirst into a technically and regulatorily complex workstream, created the documentation needed for review, and brought order to an ambiguous process.",
      cite: "Privacy Program Partner",
      theme: "High-stakes execution",
    },
    {
      quote:
        "Her strongest contribution was the product judgment she brought to agentic investigation: separating open-ended investigation, procedural runbook execution, and deterministic automation.",
      cite: "AI Platform Partner",
      theme: "Multi-agent systems",
    },
    {
      quote:
        "She turned scattered technical information into the de facto ramp-up resource for others.",
      cite: "Engineering Partner",
      theme: "Communication",
    },
    {
      quote:
        "She takes her area of work to heart and holds herself deeply accountable for the outcome.",
      cite: "Engineering Manager",
      theme: "Ownership",
    },
    {
      quote:
        "She is one of the best things that happened to this program. She understands the architecture, tracks blockers, resolves open questions, and steps in when the team needs her.",
      cite: "Senior Engineer",
      theme: "Team impact",
    },
    {
      quote:
        "She brings order, organization, excellent documentation, and clarity to ambiguous and complex work.",
      cite: "Privacy Program Partner",
      theme: "Trust",
    },
  ] satisfies Testimonial[],
};
