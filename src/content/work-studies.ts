/**
 * Deep case studies for the Meta work, rendered at /work/[slug].
 * Meta is generalized per PRD §13: no internal codenames, rounded/qualitative
 * impact. Copy is dash-free to match the rest of the site.
 *
 * The four AI studies are the granular version of the integrity AI work: four
 * distinct products (LLM lifecycle, investigation platform, workflow
 * automation, evaluation platform) rather than one blended story.
 */
import type { CaseStudy } from "@/content/building";

export const workStudies: Record<string, CaseStudy> = {
  "llm-lifecycle": {
    title: "Deploying AI into high-stakes decisions",
    tagline:
      "The end-to-end lifecycle for moving integrity enforcement from scaled human review to evaluated LLMs, safely and without degrading quality.",
    meta: [
      { label: "Where", value: "Meta · Central Integrity" },
      { label: "Focus", value: "LLM lifecycle · Evaluation · 0 to 1" },
    ],
    links: [],
    blocks: [
      { type: "h2", text: "Context" },
      {
        type: "p",
        text: "I owned Meta's end-to-end LLM development and deployment lifecycle for integrity enforcement. The mandate was to safely move decisions from scaled human review to evaluated LLMs without degrading enforcement quality.",
      },
      {
        type: "p",
        text: "The product covered the full path from model development to production: offline hill-climbing, trusted ground truth, online shadow testing, experimentation, reverse shadow, production graduation, and post-launch monitoring.",
      },
      { type: "h2", text: "The problem" },
      {
        type: "p",
        text: "Integrity enforcement is a high-stakes decision system. Every automated decision has to balance accuracy, policy nuance, user impact, regulatory risk, and operational scale.",
      },
      {
        type: "p",
        text: "The existing path from model development to production was not reliable enough for broad automation. Offline certification could create false confidence, because real-world edge cases, distribution shifts, policy nuance, and adversarial behavior often only appeared in production. At the same time, spreadsheet-driven labeling made ground truth hard to govern: labels could become stale, policy changes were difficult to track, reviewer disagreement was hard to escalate, and teams risked reusing examples incorrectly across training, testing, and evaluation.",
      },
      {
        type: "p",
        text: "This was not just a model-quality problem. It was a trust, measurement, and governance problem.",
      },
      { type: "h2", text: "The insight" },
      {
        type: "p",
        text: "LLM automation could not be treated as a one-time launch. It needed to be treated as a governed product lifecycle. A model should not move directly from offline testing to production enforcement. It needs to earn trust through staged confidence-building: offline hill-climbing, online shadow mode, controlled experimentation, reverse shadow, production graduation, and continuous monitoring. Each stage answers a different risk question before humans are removed from the decision path.",
      },
      {
        type: "p",
        text: "The second insight was that model quality is only as strong as the ground truth system behind it. To evaluate LLMs reliably, humans, models, and evaluators needed to reason over the same facts, using current, auditable, policy-aligned labels and stable data snapshots.",
      },
      { type: "h2", text: "What I did" },
      {
        type: "p",
        text: "I defined the end-to-end product lifecycle for moving integrity LLMs from development to production. I led the product strategy across offline hill-climbing, online shadow evaluation, A/B testing, reverse shadow, full production deployment, and post-deployment lifecycle management.",
      },
      {
        type: "p",
        text: "I also architected the centralized ground-truth platform that replaced spreadsheet-driven labeling with governed infrastructure. The platform introduced label versioning, staleness detection, reviewer-disagreement escalation, authority and expert label workflows, train/test/eval reuse controls, health analytics, and mechanisms to ensure models were evaluated against trustworthy and current ground truth.",
      },
      {
        type: "p",
        text: "Beyond the core lifecycle, I helped define how LLM evaluation should work in complex integrity contexts, including multilingual performance, cultural nuance, market-level risk, disagreement analysis, escalation to policy experts, and launch holds for markets where model performance was not safe enough.",
      },
      { type: "h2", text: "Impact" },
      {
        type: "list",
        items: [
          "Enabled Meta to shift a meaningful share of scaled integrity decisions from humans to evaluated LLMs while keeping enforcement quality flat.",
          "Delivered a reliability-neutral reduction of roughly 27% in scaled human review across dozens of violation areas.",
          "Created the operating model for safe LLM enforcement: trusted labels, production-first evaluation, staged rollout, rollback paths, post-launch monitoring, and clear criteria for when humans could move from decision-makers to oversight.",
        ],
      },
      { type: "h2", text: "What I learned" },
      {
        type: "p",
        text: "In high-stakes AI products, the model is only one part of the product. The real product is the trust system around it: ground truth, evaluation, monitoring, escalation, governance, rollback, and human oversight.",
      },
      {
        type: "p",
        text: "I learned that safe automation requires more than strong model performance. It requires a lifecycle that helps teams understand when a model is ready, where it is still risky, how quality will be measured, and what humans should continue to own. The hardest part was building enough confidence across policy, operations, engineering, and leadership that automation could scale without weakening enforcement quality.",
      },
    ],
  },

  "ai-investigation": {
    title: "An AI investigation platform people actually trust",
    tagline:
      "I led a multi-agent investigation platform that reached above-human-expert accuracy, by refusing to build a chatbot.",
    meta: [
      { label: "Where", value: "Meta · Central Integrity" },
      { label: "Focus", value: "Agentic AI · Trust & Safety · 0 to 1" },
    ],
    links: [],
    blocks: [
      { type: "h2", text: "Context" },
      {
        type: "p",
        text: "Specialized teams (investigations, policy, enforcement) did careful, judgment-heavy work spread across a dozen tools. Leadership wanted “AI for this,” and every team was about to build its own agent.",
      },
      { type: "h2", text: "The problem" },
      {
        type: "p",
        text: "The easy answer was an AI copilot that answers questions. I argued against it. In high-stakes investigation, a fluent answer is worse than useless if it isn't grounded. It has to be evidence-backed, auditable, and safe to act on, with a human owning the decision.",
      },
      { type: "h2", text: "What I did" },
      {
        type: "p",
        text: "I defined the product as an evidence-grounded investigation layer, not a general assistant: a person starts from a natural-language question, and the system handles intent, entity extraction, case-context retrieval, source-of-truth invocation, specialized agent orchestration, and evidence synthesis, then drafts a valid, workflow-ready recommendation the human confirms. I set the trust bar deliberately high: source-backed reasoning, human confirmation, safe failure, and clear lines between where AI recommends and where a person stays accountable.",
      },
      {
        type: "quote",
        text: "She turned a complex, ambiguous agentic AI opportunity into a trusted investigation platform with measurable adoption, accuracy, and operational leverage.",
        cite: "Her manager",
      },
      { type: "h2", text: "Impact" },
      {
        type: "list",
        items: [
          "Reached above-human-expert investigation accuracy.",
          "Scaled to a thousand-plus weekly reviewers running thousands of AI-led investigations a day.",
        ],
      },
      { type: "h2", text: "What I learned" },
      {
        type: "p",
        text: "The interface is not the product. Because people worked through this conversationally, a chat surface felt right, but the contract underneath had to be grounded and auditable, or the trust collapses the first time the system is confidently wrong.",
      },
    ],
  },

  "workflow-automation": {
    title: "Automating the operational first mile",
    tagline:
      "I turned thousands of fragmented, manual integrity workflows into a governed automation platform, and kept humans exactly where the risk was.",
    meta: [
      { label: "Where", value: "Meta · Central Integrity" },
      { label: "Focus", value: "Workflow automation · Platform · Scale" },
    ],
    links: [],
    blocks: [
      { type: "h2", text: "Context" },
      {
        type: "p",
        text: "A huge amount of integrity operations was repetitive, manual, and spread across one-off scripts: routing, deduplication, summarization, prioritization, case creation. Slow, hard to measure, and impossible to scale with the threat.",
      },
      { type: "h2", text: "The problem" },
      {
        type: "p",
        text: "“Add AI to operations” was the wrong frame. The real job was to encode human playbooks into something reusable and safe: auto-action the high-precision cases, route intelligently, and keep people in the loop wherever risk or ambiguity remained.",
      },
      { type: "h2", text: "What I did" },
      {
        type: "p",
        text: "Instead of letting teams build disconnected agents, I defined reusable workflow primitives: triggers, workflow context, branching logic, tool invocation, source-of-truth binding, modular capabilities, audit logs, monitoring, exception handling, and launch governance. High-volume, low-risk steps became deterministic modules; higher-risk workflows kept human-in-the-loop and human-on-the-loop controls, gated by staged rollout and benchmarks.",
      },
      {
        type: "quote",
        text: "Her product judgment was strongest in distinguishing where AI should act, where it should recommend, and where it should stay out.",
        cite: "Her manager",
      },
      { type: "h2", text: "Impact" },
      {
        type: "list",
        items: [
          "Built to span thousands of escalation workflows across every harm type, auto-actioning the high-precision cases with broader automation still expanding.",
          "Cut triage and investigation time by roughly two-thirds and freed hundreds of thousands of human hours a year, with a path toward a million-plus.",
        ],
      },
      { type: "h2", text: "What I learned" },
      {
        type: "p",
        text: "The leverage was in the primitives, not the individual automations. A platform of reusable, governed parts scales; a pile of clever one-off scripts doesn't. And the judgment that mattered most was knowing where not to automate.",
      },
    ],
  },

  "ai-eval-platform": {
    title: "The evaluation platform behind all of it",
    tagline:
      "None of it ships safely without evaluation, so I built the benchmark and eval platform that made it trustworthy to scale.",
    meta: [
      { label: "Where", value: "Meta · Central Integrity" },
      { label: "Focus", value: "Evaluation · AI infra · Platform" },
    ],
    links: [],
    blocks: [
      { type: "h2", text: "Context" },
      {
        type: "p",
        text: "LLMs, agents, and automated workflows all shared one dependency: you cannot scale high-stakes AI on demos, anecdotes, or final-answer accuracy. They need real evaluation infrastructure.",
      },
      { type: "h2", text: "The problem" },
      {
        type: "p",
        text: "“Better evals” is vague, and most evaluation stops at whether the model's answer looks right. That misses how the system behaves, and in high-stakes AI, the system is what fails.",
      },
      { type: "h2", text: "What I did" },
      {
        type: "p",
        text: "I expanded evaluation from answer quality to end-to-end system behavior. For enforcement models, that meant judging against healthy, current, auditable ground truth. For the investigation platform, whether answers were grounded, complete, useful, safe, and source-backed. For automation, node-level behavior, path efficiency, tool use, evidence usage, human confirmation, and safe failure, not just the final outcome. I turned a vague ask into concrete primitives: benchmark creation and versioning, golden sets, partial-credit rubrics, AI-judge scoring, result inspection, regression alerting, data freezing and time travel, and reviewer-disagreement handling. Evaluation became a launch gate, a monitoring system, and a trust mechanism.",
      },
      {
        type: "quote",
        text: "She translated a vague need for better evals into concrete platform primitives and production requirements.",
        cite: "Her manager",
      },
      { type: "h2", text: "Impact" },
      {
        type: "list",
        items: [
          "Gave every AI product a shared, reusable way to prove it was safe to ship, and to keep proving it in production.",
          "Made the jump from prototype to production, and from human-in-the-loop to human-on-the-loop, a decision teams could make on evidence.",
        ],
      },
      { type: "h2", text: "What I learned" },
      {
        type: "p",
        text: "In high-stakes AI, the product is the system that proves the model is right and keeps it right. Evaluation isn't a step before launch, it's the backbone of every rollout decision.",
      },
    ],
  },
  "enterprise-identity": {
    title: "Enterprise identity from scratch",
    tagline:
      "A 0 to 1 enterprise identity and trust platform: I took Managed Meta Accounts from ideation through Closed Beta launch and GA-readiness planning.",
    meta: [
      { label: "Where", value: "Meta · Monetization" },
      { label: "Focus", value: "Enterprise identity · Platform · 0 to 1" },
    ],
    links: [],
    blocks: [
      { type: "h2", text: "Context" },
      {
        type: "p",
        text: "I owned Managed Meta Accounts (MMA) from ideation through Closed Beta launch and GA-readiness planning. The product replaced fragile, personal-account-based business access with a managed, secure, admin-controlled identity model for enterprise advertisers, agencies, IT admins, and business admins.",
      },
      { type: "h2", text: "The problem" },
      {
        type: "p",
        text: "Enterprise customers were running critical business operations on Meta, but the identity model did not meet enterprise expectations. Access depended too heavily on personal accounts, fragmented admin workflows, and limited top-down security controls.",
      },
      {
        type: "p",
        text: "For large advertisers and agencies, this created real business risk: account compromise, operational disruption, brand damage, client escalation, and declining trust in Meta as an enterprise platform. This was not just an account-management problem. It was a trust problem.",
      },
      { type: "h2", text: "The insight" },
      {
        type: "p",
        text: "Enterprise customers were not asking for another login system. They were asking for confidence. IT and security leaders needed single sign-on, two-factor authentication, identity-provider integration, lifecycle controls, visibility, and access governance. Business admins needed a safer way to manage users and business assets. Agencies needed support for complex cross-company collaboration.",
      },
      {
        type: "p",
        text: "Closed Beta also revealed that the migration model was too manual to scale. Early onboarding required heavy support, long lead times, and frequent engineering involvement. To reach GA, we needed to move from white-glove onboarding to a productized, repeatable enterprise platform.",
      },
      { type: "h2", text: "What I did" },
      {
        type: "p",
        text: "I defined MMA as an enterprise identity platform, not a standalone account feature. I led the product strategy, roadmap, launch sequencing, and cross-functional execution across identity, security, privacy, legal, engineering, product marketing, enterprise support, and go-to-market teams. The scope included Admin Center setup, migration flows, single sign-on and two-factor authentication, identity-provider integration, business-account claiming, agency and external-user support, compatibility with existing business tools, and operational readiness for scale.",
      },
      {
        type: "p",
        text: "I also built the launch operating model: Closed Beta waves, customer feedback loops, GA-readiness criteria, documentation, monitoring, support processes, resourcing asks, and metrics across adoption, trust, risk reduction, onboarding friction, and revenue protection.",
      },
      { type: "h2", text: "Impact" },
      {
        type: "list",
        items: [
          "Launched to Closed Beta with enterprise advertisers and agencies, laying the foundation for a broader managed identity rollout across Meta business tools.",
          "Helped shift the enterprise story from reactive account recovery to proactive, admin-managed identity control, with a clearer path to scale adoption, reduce compromise risk, and protect high-value business relationships.",
          "Turned an ambiguous customer-trust problem into a concrete platform roadmap, launch motion, and measurable path to GA.",
        ],
      },
      { type: "h2", text: "What I learned" },
      {
        type: "p",
        text: "Enterprise trust is not created by one feature. It comes from the full system: product controls, migration experience, admin visibility, security posture, support model, documentation, monitoring, and go-to-market readiness.",
      },
      {
        type: "p",
        text: "I learned that enterprise platform work requires turning many disconnected problems into one coherent product system. The hardest part was not identifying that customers needed managed accounts or single sign-on. It was aligning customer pain, legacy product surfaces, privacy and security requirements, migration complexity, resourcing, and launch sequencing into a path that customers and internal teams could trust.",
      },
    ],
  },
};
