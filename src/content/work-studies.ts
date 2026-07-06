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
      "I turned the messy first mile of integrity operations into a governed automation platform, and kept humans exactly where the judgment lives.",
    meta: [
      { label: "Where", value: "Meta · Central Integrity" },
      { label: "Focus", value: "Workflow automation · Platform · Scale" },
    ],
    links: [],
    blocks: [
      { type: "h2", text: "Context" },
      {
        type: "p",
        text: "I owned the product strategy and execution for workflow automation across Meta's global integrity escalation workflows. The work started with the central triage workflow, the front door for many high-priority escalations, and expanded from triage into investigation, enforcement, response, and case closure.",
      },
      {
        type: "p",
        text: "Over time, it became a broader automation platform where operations teams could build, manage, monitor, and improve workflows through a governed lifecycle.",
      },
      { type: "h2", text: "The problem" },
      {
        type: "p",
        text: "Integrity escalation volume was growing faster than operational capacity. Analysts were manually reading incoming cases, filling structured fields, determining priority, routing cases to downstream teams, investigating across fragmented tools, coordinating handoffs, taking enforcement action, updating cases, sending responses, and closing the loop.",
      },
      {
        type: "p",
        text: "This work was repetitive, time-sensitive, and difficult to scale. For the front-door triage workflow it was especially acute, because it required fast triage, around-the-clock coverage, and consistent intake quality for high-priority escalations. This was not just a workflow-efficiency problem. It was an operational scale, quality, and risk-management problem.",
      },
      { type: "h2", text: "The insight" },
      {
        type: "p",
        text: "The opportunity was not to automate one workflow at a time. It was to turn a messy operational universe into a product portfolio. The global integrity operations org had thousands of escalation workflows, but they varied widely in ownership, volume, maturity, policy complexity, tooling, risk, and automation readiness. A large workflow surface did not automatically create a clear automation roadmap.",
      },
      {
        type: "p",
        text: "We needed a way to identify which workflows were high-value, automatable, safe, and repeatable, then move them through a lifecycle of scoping, building, testing, shadow mode, human oversight, and operational monitoring.",
      },
      { type: "h2", text: "What I did" },
      {
        type: "p",
        text: "I worked with the global integrity operations org to prioritize the highest-value workflows based on volume, business criticality, risk, and feasibility.",
      },
      {
        type: "p",
        text: "I first focused on the central triage workflow, building automation for repeatable intake work: custom field filling, routing, duplicate detection, subcase updates, case summaries, and reviewer context. The system documented what it did and why directly in the case, creating an auditable trail for reviewers, operations teams, and quality measurement.",
      },
      {
        type: "p",
        text: "I then expanded the product from triage to end-to-end workflow automation across investigation, enforcement, response generation, and closure. This required orchestrating multiple systems so that low-risk, high-precision work could be automated while judgment-heavy work stayed with humans.",
      },
      {
        type: "p",
        text: "To scale beyond bespoke builds, I drove the creation of a workflow inventory and prioritization model across the broader workflow surface, then ran an eight-week co-location sprint with operations owners and forward-deployed engineers to convert priority workflows into reusable automation patterns.",
      },
      {
        type: "p",
        text: "I also shaped the self-serve automation hub: a central place to register workflows, track lifecycle phase, test cases safely, run shadow mode, manage launch approval, monitor human oversight, graduate workflows to live operation, and track portfolio-level health, failures, alerts, and automation opportunities.",
      },
      { type: "h2", text: "Impact" },
      {
        type: "list",
        items: [
          "Launched triage automation for the central intake workflows, automating the first mile of case handling and cutting repetitive manual intake work. Early launches triaged thousands of cases and opened a path to expand automation across a much larger escalation surface.",
          "Expanded from triage to end-to-end automation for high-volume workflows across investigation, enforcement, response, and closure. One sprint launched end-to-end automation for 20 high-volume workflows, projected to save 1.4M content reviews, 140K cases, and 95K hours a year.",
          "Helped shift integrity operations from fragmented manual execution to governed automation, where workflows can be built, tested, launched, monitored, and improved through a repeatable lifecycle.",
        ],
      },
      { type: "h2", text: "What I learned" },
      {
        type: "p",
        text: "Workflow automation is not just about replacing manual steps. It is about understanding where judgment, risk, policy, and operational context sit inside a process.",
      },
      {
        type: "p",
        text: "The hardest part of automation is often not the agent or the workflow builder. It is turning undocumented human behavior into structured, measurable, auditable systems that teams can trust.",
      },
      {
        type: "p",
        text: "A durable automation platform needs more than one successful launch. It needs prioritization, reusable patterns, launch gates, quality guardrails, monitoring, ownership, and a way for workflow owners to keep improving without depending on custom engineering every time.",
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
