/**
 * Deep case studies for the Meta work, rendered at /work/[slug].
 * Meta is generalized per PRD §13: no internal codenames, rounded/qualitative
 * impact. Copy is dash-free to match the rest of the site.
 */
import type { CaseStudy } from "@/content/building";

export const workStudies: Record<string, CaseStudy> = {
  "trusted-ai-review": {
    title: "Scaling trusted AI review",
    tagline:
      "I led product for an AI platform that shifted high-stakes review from people to evaluated AI, without losing the trust those decisions depend on.",
    meta: [
      { label: "Where", value: "Meta · Central Integrity" },
      { label: "Focus", value: "AI platform · Trust & Safety · 0 to 1" },
    ],
    links: [],
    blocks: [
      { type: "h2", text: "Context" },
      {
        type: "p",
        text: "At a large social platform, the teams that investigate and enforce against abuse were doing careful, judgment-heavy work spread across a dozen tools. The work was slow, and a lot of it was repetitive. Leadership wanted “AI for this,” and every team was about to build its own agent.",
      },
      { type: "h2", text: "The problem" },
      {
        type: "p",
        text: "The tempting answer was “build an AI copilot.” I argued against it. The real problem was that this kind of work isn't one kind of work, so a single AI product would serve none of it well. Some of it is open-ended judgment where a human has to stay accountable. Some of it is repetitive, rule-bound steps a system can run on its own. Treat them the same and you erode trust the first time the system is confidently wrong.",
      },
      { type: "h2", text: "The insight" },
      {
        type: "p",
        text: "The useful distinction wasn't “automation versus augmentation,” because both use automation. It was trigger and user experience. Work that's triggered by a case and runs headless should be automated. Work a person starts and reasons through, interactively, should be augmented, with the human owning the decision. Same technology, opposite contracts.",
      },
      { type: "h2", text: "What I did" },
      {
        type: "p",
        text: "I defined that product taxonomy and built two surfaces on a shared foundation: an automation layer for the repetitive first-mile work, and an investigation-augmentation layer for the judgment work. I launched on a ladder, read-only, then draft, then shadow, then partial automation, so trust was earned one rung at a time. And I built the layer underneath that made it scalable: turning thousands of messy, half-documented workflows into something structured enough to automate safely.",
      },
      { type: "h2", text: "Impact" },
      {
        type: "list",
        items: [
          "Cut scaled human review by roughly a quarter while holding enforcement quality flat.",
          "The investigation assistant reached above-human-expert accuracy and was used by a thousand-plus reviewers, running thousands of AI-led investigations a day.",
          "The automation layer took the highest-volume workflows end to end and multiplied throughput several times over.",
        ],
      },
      { type: "h2", text: "What I learned" },
      {
        type: "p",
        text: "The hardest lesson came from a workflow I scoped wrong. I built it as a free-form chat assistant because people worked through it conversationally, but it was actually a strict procedure with a right answer. The evaluation caught it before it shipped broadly, and I rebuilt it as a procedure with a checklist and safe failure. The lesson stuck: a conversational interface is not a conversational product. In high-trust work, the product contract matters more than how smart the model sounds.",
      },
    ],
  },

  "ai-eval-platform": {
    title: "The eval platform behind safe AI",
    tagline:
      "I built the evaluation and deployment platform that let a large platform move high-stakes review from people to AI, and prove, continuously, that it was safe to.",
    meta: [
      { label: "Where", value: "Meta · Central Integrity" },
      { label: "Focus", value: "Evaluation · AI infra · 0 to 1" },
    ],
    links: [],
    blocks: [
      { type: "h2", text: "Context" },
      {
        type: "p",
        text: "A large platform wanted to shift most of its high-volume human review to AI models. The prize was huge; the risk was that a model can look excellent on a benchmark and still fail in the real world, and in high-stakes review, a quiet drop in quality does real harm.",
      },
      { type: "h2", text: "The problem" },
      {
        type: "p",
        text: "The tempting answer was “train a better model and certify it once.” That's the wrong mental model. Offline benchmarks don't predict live behavior: the real world has edge cases, shifting content, and policy nuance a static test never sees. The actual problem was trust: how do you prove a model is safe to put in the critical path, and keep proving it?",
      },
      { type: "h2", text: "The insight" },
      {
        type: "p",
        text: "Deploying AI into high-stakes decisions has to be a lifecycle, not a one-time gate. And the product isn't the model, it's the system around it: the labels you judge it by, making sure people and models evaluate the same facts, a way to debug why it was wrong, and measurement that never stops.",
      },
      { type: "h2", text: "What I did" },
      {
        type: "p",
        text: "I defined a staged rollout where a model earns trust one step at a time: running silently on live traffic first, then affecting a small slice, then becoming primary while people watch, then full production, advancing only on evidence. Underneath it I built the trust infrastructure: governed, versioned ground truth instead of spreadsheets; frozen data snapshots so people and models judge identical facts; a surface to inspect a model's reasoning and classify why it failed; and continuous, calibrated measurement as the backbone of every rollout decision.",
      },
      { type: "h2", text: "Impact" },
      {
        type: "list",
        items: [
          "Moved roughly a quarter of scaled human review to evaluated models early on, while holding quality flat, a reliability-neutral reduction.",
          "Turned one-off model launches into a repeatable path many teams could reuse.",
        ],
      },
      { type: "h2", text: "What I learned" },
      {
        type: "p",
        text: "Two things. The hardest part wasn't the model; it was holding the line that you cut human review after quality is proven, not before, even under pressure to capture the savings sooner. And evaluation is only as honest as its inputs: for a while, models and people looked like they disagreed when they'd actually seen different facts, until I made freezing the data a precondition for every comparison. In high-stakes AI, the product is the system that proves the model is right and keeps it right.",
      },
    ],
  },

  "detection-at-scale": {
    title: "Detection at scale",
    tagline:
      "I helped turn fragmented, expert-driven threat investigation into a connected, AI-assisted, measurable detection system: faster, broader, and governed.",
    meta: [
      { label: "Where", value: "Meta · Central Integrity" },
      { label: "Focus", value: "Detection · ML · Platform" },
    ],
    links: [],
    blocks: [
      { type: "h2", text: "Context" },
      {
        type: "p",
        text: "At a large platform, finding emerging abuse (coordinated networks, impersonation, inauthentic behavior) leaned on expert investigators and a pile of one-off tools. It was slow, hard to measure, and didn't scale with the threat.",
      },
      { type: "h2", text: "The problem" },
      {
        type: "p",
        text: "Find more of the problem, faster, without drowning the investigators who have to act on it, and do it responsibly, not “AI because we can.”",
      },
      { type: "h2", text: "The insight" },
      {
        type: "p",
        text: "Increase recall first, then rank and triage, so broader coverage doesn't overwhelm already saturated teams. And match the level of automation to the stakes: full automation where it's safe, humans firmly in the loop where the action is high-risk.",
      },
      { type: "h2", text: "What I did" },
      {
        type: "p",
        text: "Shipped AI-assisted detection and labeling infrastructure: LLM-based labeling and scoring that investigators could call from across their tools, near-real-time monitoring, and workflow automation that turned expert investigation playbooks into scheduled, measurable detection.",
      },
      { type: "h2", text: "Impact" },
      {
        type: "list",
        items: [
          "Cut investigation triage time by roughly two-thirds and multiplied the volume of assets a team could review.",
          "Drove automated detection at high precision, and surfaced large amounts of additional violating content from a handful of intelligence reports.",
        ],
      },
      { type: "h2", text: "What I learned" },
      {
        type: "p",
        text: "Detection only matters if it connects to action: a better signal that no one acts on is worth nothing. And responsible AI means having the discipline to know when not to use a model. The goal is faster, safer, higher-quality detection, not AI adoption for its own sake.",
      },
    ],
  },

  "enterprise-identity": {
    title: "Enterprise identity from scratch",
    tagline:
      "I built a platform that let enterprises securely access one of the world's largest ad businesses, and closed a real security and revenue gap doing it.",
    meta: [
      { label: "Where", value: "Meta · Monetization" },
      { label: "Focus", value: "Platform · Enterprise · 0 to 1" },
    ],
    links: [],
    blocks: [
      { type: "h2", text: "Context" },
      {
        type: "p",
        text: "Large advertisers were running their business on personal accounts, a single person's login shared around a company. It was a privacy and security problem, and when those accounts got compromised, it was an expensive one. Every other major platform already had a proper enterprise tier. We didn't.",
      },
      { type: "h2", text: "The problem" },
      {
        type: "p",
        text: "Build the enterprise identity layer that lets a company bring its own identity provider and single sign-on, provision and de-provision access cleanly, the way enterprise software is supposed to work, without breaking the advertiser ecosystem that depended on the old way.",
      },
      { type: "h2", text: "What I did" },
      {
        type: "p",
        text: "I took this from pre-beta to general availability: mapped the first-party and third-party dependencies, worked with the developer-platform teams so partners kept working through the migration, and sequenced a rollout that didn't strand existing advertisers. The hard part wasn't the auth flow. It was the migration and the trust, across a lot of teams that each owned a piece.",
      },
      { type: "h2", text: "Impact" },
      {
        type: "list",
        items: [
          "Shipped enterprise identity and SSO that secured access for major advertisers and closed a significant fraud and account-takeover gap.",
          "Protected a large, ongoing share of ad revenue that depended on those accounts staying safe.",
        ],
      },
      { type: "h2", text: "What I learned" },
      {
        type: "p",
        text: "Platform work from scratch is mostly dependency-mapping and trust-building, not the core build. The teams who own the pieces you need have their own roadmaps; you move them by making the shared win legible, not by escalating.",
      },
    ],
  },
};
