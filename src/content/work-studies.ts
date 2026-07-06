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
      "I built the lifecycle that lets AI take over high-stakes enforcement decisions, and keeps proving, continuously, that it's safe to.",
    meta: [
      { label: "Where", value: "Meta · Central Integrity" },
      { label: "Focus", value: "LLM lifecycle · Evaluation · 0 to 1" },
    ],
    links: [],
    blocks: [
      { type: "h2", text: "Context" },
      {
        type: "p",
        text: "A large platform wanted to move most of its high-volume human review onto AI. The prize was enormous. The risk was that a model can look excellent offline and still fail in the real world, and in enforcement a quiet drop in quality does real harm to real people.",
      },
      { type: "h2", text: "The problem" },
      {
        type: "p",
        text: "The tempting framing was “train a better model and certify it once.” That's the wrong mental model. Deploying AI into decisions this consequential can't be a one-time gate, it has to be a lifecycle. And the product isn't the model. It's the system around it: the labels you judge it by, the proof it's ready, and the measurement that never stops.",
      },
      { type: "h2", text: "What I did" },
      {
        type: "p",
        text: "I built the end-to-end path a model travels before it's allowed to act: offline hill-climbing, shadow evaluation on live traffic, experimentation, reverse shadow, and production graduation, advancing only on evidence, never on optimism. Underneath it I replaced spreadsheet labeling with governed ground truth: dataset versioning, staleness detection, reviewer-disagreement escalation, train/test/eval reuse controls, and health analytics. That foundation is what stops teams from optimizing against stale, inconsistent, or unauditable labels.",
      },
      {
        type: "quote",
        text: "She knew when AI was ready to act, when it needed human oversight, and what evidence was required before production.",
        cite: "Her manager",
      },
      { type: "h2", text: "Impact" },
      {
        type: "list",
        items: [
          "Moved the right decisions from people to evaluated models while holding reliability flat, and cut scaled human review by about a quarter across dozens of violation areas.",
          "Turned one-off model launches into a repeatable, governed path other teams could reuse.",
        ],
      },
      { type: "h2", text: "What I learned" },
      {
        type: "p",
        text: "The hardest part wasn't the model, it was holding the line that you cut human review after quality is proven, not before, even under pressure to bank the savings sooner. And evaluation is only as honest as its inputs: models and people looked like they disagreed until I made freezing the data a precondition for every comparison.",
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
          "Scaled to thousands of escalation workflows spanning every harm type.",
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
    title: "Managed Meta Accounts for Business Tools",
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
        text: "I also learned that Staff PM impact is about creating clarity in ambiguity. The hardest part was not identifying the need for managed accounts. It was aligning customer pain, platform constraints, privacy and security requirements, legacy systems, resourcing, and business outcomes into one coherent product strategy.",
      },
    ],
  },
};
