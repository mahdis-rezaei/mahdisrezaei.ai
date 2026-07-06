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
    title: "Safe LLM Deployment for Integrity Enforcement",
    tagline:
      "Built the end-to-end lifecycle for moving integrity enforcement from scaled human review to evaluated LLMs through hill-climbing, shadow mode, experimentation, reverse shadow, and production monitoring.",
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
    title: "Agentic Investigation Platform for Integrity Teams",
    tagline:
      "Built a trusted multi-agent investigation platform that turned fragmented cases, signals, runbooks, and specialized agents into one evidence-backed investigation experience.",
    meta: [
      { label: "Where", value: "Meta · Central Integrity" },
      {
        label: "Focus",
        value:
          "Agentic AI · Investigation platform · Multi-agent orchestration · Trust & Safety",
      },
    ],
    links: [],
    blocks: [
      { type: "h2", text: "Context" },
      {
        type: "p",
        text: "I owned the product strategy and execution for Meta's agentic investigation platform for integrity teams.",
      },
      {
        type: "p",
        text: "The platform gave reviewers, investigators, policy teams, enforcement teams, and cross-functional partners a single investigation surface. Instead of forcing users to know which case tool, signal dashboard, runbook, source-of-truth system, or specialized agent to use, it let them start from a natural-language question and receive evidence-backed reasoning, summaries, recommendations, and next steps.",
      },
      { type: "h2", text: "The problem" },
      {
        type: "p",
        text: "Integrity investigations were highly fragmented. Investigators had to inspect cases and objects, extract IDs, look up enforcement history, interpret signals, follow workflow-specific runbooks, query specialized tools, draft notes, write responses, and maintain evidence trails. This created too much tool-hopping, too much reliance on tribal knowledge, and inconsistent investigation quality.",
      },
      {
        type: "p",
        text: "At the same time, many teams were building specialized AI agents for narrow domains. That created a new platform risk: agent sprawl. Users still had to know which agent to use, what input it needed, whether its output was authoritative, and how to combine results across systems.",
      },
      {
        type: "p",
        text: "This was not just an investigation-speed problem. It was a trust, orchestration, and platform-governance problem.",
      },
      { type: "h2", text: "The insight" },
      {
        type: "p",
        text: "The opportunity was not to build a generic investigation chatbot. It was to build the orchestration layer for agentic integrity work. Open-ended investigations need augmentation, not blind automation. The system had to understand intent, extract entities, identify the right capability, invoke source-of-truth systems where required, synthesize evidence, support follow-up questions, and preserve human control.",
      },
      {
        type: "p",
        text: "The second insight was that agentic investigation work has multiple modes. Some work should remain human-owned. Some should be agent-assisted. Some can become procedural runbook execution. Some can eventually become autonomous where the risk is low and the evidence is strong. That product distinction shaped the platform, the user experience, evaluation, launch model, and metrics.",
      },
      { type: "h2", text: "What I did" },
      {
        type: "p",
        text: "I defined the product as an agentic investigation platform, not a chatbot.",
      },
      {
        type: "p",
        text: "I built the core investigation experience: natural-language intake, intent understanding, entity extraction, object inspection, case and asset lookup, signal summarization, runbook loading, source-of-truth invocation, evidence synthesis, follow-up questions, investigation summaries, draft notes, draft responses, recommendations, and safe failure behavior when the system lacked enough evidence.",
      },
      {
        type: "p",
        text: "I also defined it as the orchestration layer for the broader integrity AI ecosystem. Instead of replacing specialized agents, the platform routed to them. I shaped the model for agent registration, input and output contracts, capability routing, multi-agent planning, evidence aggregation, quality tiers, ownership, monitoring, and governance. The operating principle was simple: domain teams own the expertise; the platform owns orchestration, routing, user experience, governance, and the end-to-end investigation experience.",
      },
      {
        type: "p",
        text: "For the first hero workflow, I helped reframe an account-compromise investigation from open-ended AI chat into procedural investigation support. The system needed to follow runbooks, resolve entities, detect duplicates, classify issues, check compromise signals, distinguish recommend from execute, ask for clarification when identifiers conflicted, and stop safely when evidence was incomplete.",
      },
      {
        type: "p",
        text: "I also shaped the measurement model. Instead of optimizing only for usage, I pushed the team toward metrics that reflected the actual product vision: human-only investigations, human-plus-agent investigations, autonomous investigations, investigation accuracy, task completion, routing quality, reliability, usefulness, and whether the system helped investigators complete work faster with stronger evidence.",
      },
      { type: "h2", text: "Impact" },
      {
        type: "list",
        items: [
          "Reached 94% investigation accuracy, above human-expert performance, with 1,000+ weekly active users and 7,000+ AI-led investigations a day.",
          "Reduced investigation friction by giving teams one place to ask questions, inspect evidence, understand signals, invoke specialized capabilities, and draft next steps.",
          "Created the platform model for trusted agentic investigation: intent understanding, entity extraction, capability routing, source-of-truth integration, evidence synthesis, human confirmation, evaluation, monitoring, and governance.",
          "Moved the platform from a single-use-case investigation assistant toward an investigation operating system, where specialized agents could keep improving independently while users experienced one coherent investigation surface.",
        ],
      },
      { type: "h2", text: "What I learned" },
      {
        type: "p",
        text: "In high-trust investigation workflows, fluency is not enough. The product has to know what workflow it is in, what evidence is required, which source system is authoritative, what it is allowed to recommend, when it needs human confirmation, and when it must stop.",
      },
      {
        type: "p",
        text: "Agentic products need clear product contracts. An investigation copilot, a runbook executor, and an automation engine can all use AI, but they should not be designed, measured, or launched the same way.",
      },
      {
        type: "p",
        text: "Platform governance is product quality. If an agent is unsupported, poorly evaluated, or unclear about its limitations, users blame the platform. For agentic systems to scale, quality has to be earned through evidence, ownership, monitoring, and clear boundaries.",
      },
    ],
  },

  "workflow-automation": {
    title: "Agentic Workflow Automation for Integrity Escalations",
    tagline:
      "Built a governed agentic automation platform that turned manual escalation playbooks into automated, auditable workflows for triage, investigation, enforcement, response, and closure.",
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
    title: "Evaluation Platform for Trustworthy AI Agents",
    tagline:
      "Built the benchmark and evaluation platform that made high-stakes AI agents measurable, governable, and safe to scale through reusable benchmarks, rubrics, regression detection, and launch gates.",
    meta: [
      { label: "Where", value: "Meta · Central Integrity" },
      {
        label: "Focus",
        value:
          "AI evaluation · Benchmarking · Agent quality · Trust infrastructure",
      },
    ],
    links: [],
    blocks: [
      { type: "h2", text: "Context" },
      {
        type: "p",
        text: "I owned the product strategy for a generalized benchmark and evaluation platform for internal AI agents, starting with integrity investigation agents.",
      },
      {
        type: "p",
        text: "The platform was designed to help teams create reusable benchmarks, evaluate agents, compare versions, detect regressions, analyze failures, and enforce quality gates before and after launch. The long-term vision was to become the CI/CD system for AI quality: a shared way to measure whether agents could be trusted in production, not just whether they could answer prompts.",
      },
      { type: "h2", text: "The problem" },
      {
        type: "p",
        text: "Agent evaluation was fragmented and manual. Teams were creating benchmarks through spreadsheets, custom scripts, one-off graders, manually collected examples, and agent-specific execution workflows. That made evaluation expensive, inconsistent, hard to reproduce, and difficult to compare across teams.",
      },
      {
        type: "p",
        text: "For high-stakes integrity work, this was especially risky. A single general agent could sound fluent while hallucinating, skipping required evidence, using the wrong source system, or producing an answer that looked plausible but was not safe to rely on. This was not just a testing problem. It was a trust infrastructure problem.",
      },
      { type: "h2", text: "The insight" },
      {
        type: "p",
        text: "The core insight was that benchmarks had to become reusable product assets, not one-off test runs. A good evaluation system needed versioned datasets, explicit rubrics, trusted golden examples, repeatable execution, failure analysis, benchmark health, and governance. It also needed to evaluate more than final-answer accuracy. For agents, the platform had to measure tool use, reasoning quality, source grounding, hallucination, robustness, latency, and whether the agent followed the right path to the answer.",
      },
      {
        type: "p",
        text: "The second insight was that evaluation could not be a final pre-launch checkbox. It had to be part of the product lifecycle: used during development, before launch, during regression testing, and eventually as part of deployment gates and continuous monitoring.",
      },
      { type: "h2", text: "What I did" },
      {
        type: "p",
        text: "I defined the product vision for a generalized agent evaluation platform: a centralized place where teams could create benchmarks, manage datapoints, write rubrics, version datasets, run evaluations, compare agent versions, and analyze failures.",
      },
      {
        type: "p",
        text: "I personally created the first golden dataset and rubric for the integrity investigation use case, turning real investigator questions into structured benchmark cases with expected answers, grading criteria, and failure modes. That became the template other agent teams could follow.",
      },
      {
        type: "p",
        text: "I shaped the core platform model around reusable objects: agents, benchmarks, benchmark versions, datapoints, rubrics, runs, graders, results, and trust dimensions. Each benchmark could measure one or more dimensions such as hallucination, robustness, bias and fairness, UX trust, and latency and performance.",
      },
      {
        type: "p",
        text: "I also defined the evaluation workflow: select an agent, attach a benchmark, run it through a shared execution engine, grade outputs with deterministic or LLM-based rubrics, inspect failed examples, compare results across versions, and convert production failures back into benchmark cases over time.",
      },
      {
        type: "p",
        text: "Finally, I pushed the product from raw eval outputs toward a product-facing quality system: dashboards, score breakdowns, regression alerts, failure clustering, category performance, benchmark health, ownership, review status, and approval gates that PMs, engineers, and safety teams could actually use.",
      },
      { type: "h2", text: "Impact" },
      {
        type: "list",
        items: [
          "Created the evaluation foundation that made high-stakes agent launches defensible: teams could measure quality through versioned benchmarks, explicit rubrics, reproducible runs, and actionable failure analysis instead of relying on anecdotes or ad hoc testing.",
          "Established a reusable benchmark framework for investigation agents, with a path to broader AI-agent evaluation across Meta.",
          "Helped teams move faster without silently breaking trust by making regressions visible, benchmark quality trackable, and agent performance comparable across versions.",
          "Turned evaluation from a fragmented engineering task into a shared product system for agent quality, governance, and launch confidence.",
        ],
      },
      { type: "h2", text: "What I learned" },
      {
        type: "p",
        text: "Evaluation is not just a quality gate. It is the product infrastructure that determines whether an AI system can be trusted.",
      },
      {
        type: "p",
        text: "A benchmark is only useful if the ground truth is current, the rubric is explicit, the inputs are stable, and failures are explainable. A single score can hide the most important issues; teams need to know whether a failure came from hallucination, missing evidence, wrong tool use, bad grounding, rubric ambiguity, or dataset drift.",
      },
      {
        type: "p",
        text: "Agent evaluation is harder than model evaluation because the path matters. A final answer may be correct, but the agent may have used the wrong tool, skipped a required source, taken an unsafe action, or relied on evidence it should not have trusted. For agentic systems, evaluation has to measure the trajectory, not just the response.",
      },
    ],
  },

  "enterprise-identity": {
    title: "Enterprise Identity Platform for Meta Business Tools",
    tagline:
      "Built a 0 to 1 enterprise identity platform that replaced personal-account-based access with secure, admin-managed identity for enterprise advertisers, agencies, IT teams, and business admins.",
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
