/**
 * Deep case studies for the Meta work, rendered at /work/[slug].
 * Meta is generalized per PRD §13: no internal codenames, rounded/qualitative
 * impact. Copy is dash-free to match the rest of the site.
 *
 * Order here drives the "By company" list on the Professional page.
 */
import type { CaseStudy } from "@/content/building";

export const workStudies: Record<string, CaseStudy> = {
  "ai-investigation": {
    title: "Agentic Investigation Platform for Integrity Teams",
    tagline:
      "Built a multi-agent investigation platform that let integrity teams ask natural-language questions, retrieve evidence, invoke specialized agents, and review recommended actions from one trusted investigation surface.",
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
        text: "The product gave reviewers, investigators, policy teams, enforcement teams, and cross-functional partners a single place to investigate complex cases. Instead of forcing users to jump across case tools, signal dashboards, runbooks, source-of-truth systems, and specialized agents, the platform let them start with a natural-language question and receive grounded reasoning, evidence, summaries, and recommended next steps.",
      },
      { type: "h2", text: "The problem" },
      {
        type: "p",
        text: "Integrity investigations were becoming too fragmented to scale. Investigators had to inspect cases and objects, extract IDs, look up enforcement history, interpret signals, follow workflow-specific runbooks, query specialized tools, draft notes, write responses, and maintain evidence trails. Too much of this work depended on tool knowledge, tribal knowledge, and manual synthesis.",
      },
      {
        type: "p",
        text: "At the same time, teams across integrity were building specialized AI agents for narrow domains such as account compromise, URL analysis, enforcement history, phishing, paid compromise, and policy interpretation. That created a new platform problem: even with more agents, users still had to know which one to use, what input it required, whether its output was authoritative, and how to combine results across tools.",
      },
      { type: "h2", text: "The insight" },
      {
        type: "p",
        text: "The opportunity was not to build a chatbot. It was to build the orchestration layer for agentic investigation. Investigators should investigate problems, not tools. The platform needed to understand the user's intent, resolve the right entities, retrieve the right evidence, invoke the right source system or specialized agent, and synthesize the result into an investigation workflow the human could trust.",
      },
      {
        type: "p",
        text: "The key product decision was to separate investigation modes. Open-ended investigations should stay human-led. Strict workflows should become procedural runbook execution. Low-risk, high-confidence steps could move toward automation. Each mode needed a different user experience, launch bar, evaluation method, and governance model.",
      },
      { type: "h2", text: "What I did" },
      {
        type: "p",
        text: "I built the core investigation loop: understand the question, resolve the relevant entities, retrieve case and object context, invoke the right capability, synthesize evidence, and preserve follow-up state so the investigation could continue naturally.",
      },
      {
        type: "p",
        text: "I defined the platform as an orchestration layer, not a replacement for domain agents. Specialized teams continued to own their expertise; the platform owned routing, user experience, evidence synthesis, governance, and the end-to-end investigation experience.",
      },
      {
        type: "p",
        text: "I shaped the agent ecosystem model: registration, input and output contracts, capability routing, multi-agent planning, quality tiers, ownership, monitoring, and removal criteria. That allowed the platform to grow without becoming an uncurated list of unsupported tools.",
      },
      {
        type: "p",
        text: "For the first hero workflow, I helped reframe account-compromise investigation from open-ended AI chat into procedural investigation support. The system needed to follow runbooks, resolve entities, detect duplicates, classify issues, check compromise signals, distinguish recommendations from actions, ask for clarification when identifiers conflicted, and stop safely when evidence was incomplete.",
      },
      {
        type: "p",
        text: "I also changed how we measured success. Usage alone was not enough. The product needed to show whether investigations were shifting from human-only work to human-plus-agent work, whether some workflows could become autonomous, whether accuracy improved, and whether investigators completed work faster with stronger evidence.",
      },
      { type: "h2", text: "Impact" },
      {
        type: "list",
        items: [
          "Reached 94% investigation accuracy, above human-expert performance, with 1,000+ weekly active users and 7,000+ AI-led investigations a day.",
          "Reduced investigation friction by giving teams one place to ask questions, inspect evidence, understand signals, invoke specialized capabilities, and draft next steps.",
          "Created the platform model for trusted agentic investigation: intent understanding, entity resolution, capability routing, source-of-truth integration, evidence synthesis, human confirmation, evaluation, monitoring, and governance.",
          "Moved the product from a single-use-case assistant toward an investigation operating system, where specialized agents could improve independently while users experienced one coherent investigation surface.",
        ],
      },
      { type: "h2", text: "What I learned" },
      {
        type: "p",
        text: "In high-trust investigation workflows, fluency is not enough. The product has to know what workflow it is in, what evidence is required, which source system is authoritative, what it can recommend, when it needs human confirmation, and when it must stop.",
      },
      {
        type: "p",
        text: "Agentic products need clear product contracts. A copilot, a runbook executor, and an automation engine can all use AI, but they should not be designed, measured, or launched the same way.",
      },
      {
        type: "p",
        text: "Platform governance is product quality. If an agent is unsupported, poorly evaluated, or unclear about its limitations, users blame the platform. For agentic systems to scale, quality has to be earned through evidence, ownership, monitoring, and clear boundaries.",
      },
    ],
  },

  "llm-lifecycle": {
    title: "Safe LLM Deployment for Integrity Enforcement",
    tagline:
      "Built the production lifecycle for moving integrity enforcement from human review to evaluated LLMs, reducing scaled review by roughly 27% while holding enforcement quality flat.",
    meta: [
      { label: "Where", value: "Meta · Central Integrity" },
      {
        label: "Focus",
        value: "LLM lifecycle · Evaluation · Production AI · Governance",
      },
    ],
    links: [],
    blocks: [
      { type: "h2", text: "Context" },
      {
        type: "p",
        text: "I owned Meta's end-to-end LLM development and deployment lifecycle for integrity enforcement.",
      },
      {
        type: "p",
        text: "The mandate was to safely move enforcement decisions from scaled human review to evaluated LLMs without degrading quality. The lifecycle covered model development, trusted ground truth, offline hill-climbing, online shadow testing, experimentation, reverse shadow, production graduation, and post-launch monitoring.",
      },
      { type: "h2", text: "The problem" },
      {
        type: "p",
        text: "Integrity enforcement is a high-stakes decision system. Every automated decision has to balance accuracy, policy nuance, user impact, regulatory risk, and operational scale.",
      },
      {
        type: "p",
        text: "The existing path from model development to production was not reliable enough for broad automation. Offline certification created false confidence because distribution shifts, policy edge cases, adversarial behavior, and real-world ambiguity often only appeared in production.",
      },
      {
        type: "p",
        text: "The ground truth system was also too fragile. Labeling workflows were spreadsheet-driven, labels could become stale, policy changes were hard to track, reviewer disagreement was difficult to escalate, and teams risked reusing examples incorrectly across training, testing, and evaluation.",
      },
      { type: "h2", text: "The insight" },
      {
        type: "p",
        text: "LLM quality could not be proven in one offline certification step. The model had to earn trust progressively.",
      },
      {
        type: "p",
        text: "The lifecycle needed to answer a different risk question at each stage: can the model improve offline? Does it match human decisions on live traffic? Does it preserve ecosystem quality in an experiment? Can it operate as the primary decision-maker while humans monitor? Is it stable enough for production graduation?",
      },
      {
        type: "p",
        text: "The other unlock was treating ground truth as a product. Evaluation only works if humans, models, and reviewers are judging against current, auditable, policy-aligned labels and stable snapshots of the same facts.",
      },
      { type: "h2", text: "What I did" },
      {
        type: "p",
        text: "I defined the end-to-end product lifecycle for moving integrity LLMs from development to production: offline hill-climbing, online shadow evaluation, A/B testing, reverse shadow, production deployment, and post-deployment lifecycle management.",
      },
      {
        type: "p",
        text: "I architected the centralized ground-truth platform that replaced spreadsheet-driven labeling with governed infrastructure. The platform introduced label versioning, staleness detection, reviewer-disagreement escalation, authority and expert label workflows, train/test/eval reuse controls, and health analytics.",
      },
      {
        type: "p",
        text: "I also shaped evaluation for complex integrity contexts, including multilingual performance, cultural nuance, market-level risk, disagreement analysis, escalation to policy experts, and launch holds for markets where model performance was not safe enough.",
      },
      { type: "h2", text: "Impact" },
      {
        type: "list",
        items: [
          "Delivered a reliability-neutral reduction of roughly 27% in scaled human review across dozens of violation areas.",
          "Enabled Meta to shift a meaningful share of integrity decisions from humans to evaluated LLMs while keeping enforcement quality flat.",
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
        text: "I learned that safe automation requires more than strong model performance. It requires a lifecycle that helps teams understand when a model is ready, where it is still risky, how quality will be measured, and what humans should continue to own.",
      },
      {
        type: "p",
        text: "The hardest part was not proving that LLMs could make decisions. It was building enough confidence across policy, operations, engineering, and leadership that automation could scale without weakening enforcement quality.",
      },
    ],
  },

  "workflow-automation": {
    title: "Agentic Workflow Automation for Integrity Escalations",
    tagline:
      "Built a governed agentic automation platform that turned manual escalation playbooks into automated, auditable workflows for triage, investigation, enforcement, response, and closure.",
    meta: [
      { label: "Where", value: "Meta · Central Integrity" },
      {
        label: "Focus",
        value: "Workflow automation · Agentic systems · Operations platform · Scale",
      },
    ],
    links: [],
    blocks: [
      { type: "h2", text: "Context" },
      {
        type: "p",
        text: "I owned the product strategy and execution for workflow automation across Meta's global integrity escalation workflows.",
      },
      {
        type: "p",
        text: "The work started with the central triage workflow, the front door for many high-priority escalations, and expanded from triage into investigation, enforcement, response, and case closure. Over time, it became a broader automation platform where operations teams could build, manage, monitor, and improve workflows through a governed lifecycle.",
      },
      { type: "h2", text: "The problem" },
      {
        type: "p",
        text: "Integrity escalation volume was growing faster than operational capacity. Analysts were manually reading incoming cases, filling structured fields, determining priority, routing cases to downstream teams, investigating across fragmented tools, coordinating handoffs, taking enforcement action, updating cases, sending responses, and closing the loop.",
      },
      {
        type: "p",
        text: "This work was repetitive, time-sensitive, and difficult to scale. For front-door triage, the pressure was especially high because the workflow required fast response, around-the-clock coverage, and consistent intake quality for high-priority escalations.",
      },
      { type: "h2", text: "The insight" },
      {
        type: "p",
        text: "The unlock was portfolio thinking. The global integrity operations org had thousands of escalation workflows, but not every workflow was ready for automation. Some were high-volume and rule-bound. Some were low-volume but high-risk. Some had mature runbooks. Others depended on expert judgment. Some had clean systems of record. Others were stitched together through manual workarounds.",
      },
      {
        type: "p",
        text: "Before we could scale automation, we had to turn the workflow universe into a prioritized product portfolio: which workflows were valuable, automatable, safe, repeatable, and ready to move through scoping, building, testing, shadow mode, human oversight, and operational monitoring.",
      },
      { type: "h2", text: "What I did" },
      {
        type: "p",
        text: "I worked with global integrity operations to prioritize the highest-value workflows based on volume, business criticality, risk, and feasibility.",
      },
      {
        type: "p",
        text: "I first focused on central triage, building automation for repeatable intake work: custom field filling, routing, duplicate detection, subcase updates, case summaries, and reviewer context. The system documented what it did and why directly in the case, creating an auditable trail for reviewers, operations teams, and quality measurement.",
      },
      {
        type: "p",
        text: "I then expanded the product from triage to end-to-end workflow automation across investigation, enforcement, response generation, and closure. Low-risk, high-precision work could be automated; judgment-heavy work stayed with humans.",
      },
      {
        type: "p",
        text: "To scale beyond bespoke builds, I drove the workflow inventory and prioritization model across the broader workflow surface, then ran an eight-week co-location sprint with operations owners and forward-deployed engineers to convert priority workflows into reusable automation patterns.",
      },
      {
        type: "p",
        text: "I also shaped the self-serve automation hub: a central place to register workflows, track lifecycle phase, test cases safely, run shadow mode, manage launch approval, monitor human oversight, graduate workflows to live operation, and track portfolio-level health, failures, alerts, and automation opportunities.",
      },
      { type: "h2", text: "Impact" },
      {
        type: "list",
        items: [
          "Launched triage automation for central intake workflows, cutting repetitive manual intake work and creating the first reusable pattern for escalation automation.",
          "Expanded from triage to end-to-end automation across investigation, enforcement, response, and closure. One sprint launched automation for 20 high-volume workflows, projected to save 1.4M content reviews, 140K cases, and 95K hours a year.",
          "Helped shift integrity operations from fragmented manual execution to governed automation, where workflows could be built, tested, launched, monitored, and improved through a repeatable lifecycle.",
        ],
      },
      { type: "h2", text: "What I learned" },
      {
        type: "p",
        text: "Workflow automation is not just about replacing manual steps. It is about understanding where judgment, risk, policy, and operational context sit inside a process.",
      },
      {
        type: "p",
        text: "The hardest part is often not the agent or the builder. It is turning undocumented human behavior into structured, measurable, auditable systems that teams can trust.",
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
      "Built the benchmark and evaluation system that made high-stakes AI agents shippable through golden datasets, reusable rubrics, regression detection, and launch-quality gates.",
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
        text: "The platform helped teams create reusable benchmarks, evaluate agents, compare versions, detect regressions, analyze failures, and establish quality gates before and after launch. The long-term vision was to become the CI/CD system for AI quality: a shared way to prove whether agents could be trusted in production.",
      },
      { type: "h2", text: "The problem" },
      {
        type: "p",
        text: "Agent evaluation was fragmented and manual. Teams were creating benchmarks through spreadsheets, custom scripts, one-off graders, manually collected examples, and agent-specific execution workflows. That made evaluation expensive, inconsistent, hard to reproduce, and difficult to compare across teams.",
      },
      {
        type: "p",
        text: "For high-stakes integrity work, this was dangerous. An agent could sound fluent while hallucinating, skipping required evidence, using the wrong source system, or producing an answer that looked plausible but was not safe to rely on.",
      },
      { type: "h2", text: "The insight" },
      {
        type: "p",
        text: "Evals are not a dashboard after the product is built. For agentic systems, evals are part of the product architecture.",
      },
      {
        type: "p",
        text: "A useful benchmark had to be more than a set of prompts. It needed versioned datasets, explicit rubrics, trusted golden examples, repeatable execution, failure analysis, benchmark health, and ownership. It also had to evaluate more than final-answer accuracy. For agents, the path matters: which tool was used, which evidence was retrieved, which source was trusted, and whether the agent followed the right steps to reach the answer.",
      },
      { type: "h2", text: "What I did" },
      {
        type: "p",
        text: "I defined the product vision for a generalized agent evaluation platform: a centralized place where teams could create benchmarks, manage datapoints, write rubrics, version datasets, run evaluations, compare agent versions, and analyze failures.",
      },
      {
        type: "p",
        text: "I personally created the first golden dataset and rubric for the integrity investigation use case. I translated real investigator questions into structured benchmark cases with expected answers, grading criteria, and failure modes. That became the reference template other agent teams could follow.",
      },
      {
        type: "p",
        text: "I shaped the core platform objects: agents, benchmarks, benchmark versions, datapoints, rubrics, runs, graders, results, and trust dimensions.",
      },
      {
        type: "p",
        text: "I also defined the evaluation workflow: select an agent, attach a benchmark, run it through a shared execution engine, grade outputs with deterministic or LLM-based rubrics, inspect failed examples, compare results across versions, and turn production failures back into benchmark cases over time.",
      },
      {
        type: "p",
        text: "Finally, I pushed the product from raw eval outputs toward a product-facing quality system: dashboards, score breakdowns, regression alerts, failure clustering, category performance, benchmark health, ownership, review status, and approval gates that PMs, engineers, and safety teams could actually use.",
      },
      { type: "h2", text: "Impact" },
      {
        type: "list",
        items: [
          "Made high-stakes agent launches defensible by replacing ad hoc testing with versioned benchmarks, explicit rubrics, reproducible runs, and actionable failure analysis.",
          "Created the first golden dataset and rubric for integrity investigation agents, then generalized the method into a reusable platform pattern for other agent teams.",
          "Helped teams ship faster with more confidence by making regressions visible before launch instead of discovering quality issues through user trust loss.",
          "Turned evaluation from a fragmented engineering task into a shared product system for agent quality, governance, and launch confidence.",
        ],
      },
      { type: "h2", text: "What I learned" },
      {
        type: "p",
        text: "Evaluation is not just a quality gate. It is the infrastructure that determines whether an AI system can be trusted.",
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
        text: "I owned the enterprise identity platform for Meta business tools from ideation through general availability.",
      },
      {
        type: "p",
        text: "The product replaced fragile, personal-account-based business access with a managed, secure, admin-controlled identity model for enterprise advertisers, agencies, IT admins, and business admins.",
      },
      { type: "h2", text: "The problem" },
      {
        type: "p",
        text: "Enterprise customers were running critical business operations on Meta, but the identity model did not meet enterprise expectations.",
      },
      {
        type: "p",
        text: "Access depended too heavily on personal accounts, fragmented admin workflows, and limited top-down security controls. For large advertisers and agencies, that created business risk: account compromise, operational disruption, brand damage, client escalation, and declining trust in Meta as an enterprise platform.",
      },
      {
        type: "p",
        text: "The core customer question was not whether they could log in differently. It was whether they could trust Meta to support enterprise-grade business operations.",
      },
      { type: "h2", text: "The insight" },
      {
        type: "p",
        text: "Enterprise customers were not asking for another login system. They were asking for confidence. IT and security leaders needed single sign-on, two-factor authentication, identity-provider integration, lifecycle controls, visibility, and access governance. Business admins needed a safer way to manage users and business assets. Agencies needed support for complex cross-company collaboration.",
      },
      {
        type: "p",
        text: "Early beta also revealed that the migration model was too manual to scale. Onboarding required heavy support, long lead times, and frequent engineering involvement. To reach general availability, we moved from white-glove onboarding to a productized, repeatable enterprise platform.",
      },
      { type: "h2", text: "What I did" },
      {
        type: "p",
        text: "I defined the product as an enterprise identity platform, not an account feature.",
      },
      {
        type: "p",
        text: "I led the product strategy, roadmap, launch sequencing, and cross-functional execution across identity, security, privacy, legal, engineering, product marketing, enterprise support, and go-to-market teams.",
      },
      {
        type: "p",
        text: "The work connected Admin Center setup, migration flows, single sign-on, two-factor authentication, identity-provider integration, business-account claiming, agency and external-user support, compatibility with existing business tools, and operational readiness into one enterprise experience.",
      },
      {
        type: "p",
        text: "I also built the launch operating model: staged beta waves, customer feedback loops, GA criteria, documentation, monitoring, support processes, resourcing asks, and metrics across adoption, trust, risk reduction, onboarding friction, and revenue protection.",
      },
      { type: "h2", text: "Impact" },
      {
        type: "list",
        items: [
          "Took the platform from pre-beta to general availability, migrating billions of users and aligning every internal Meta system behind the new enterprise account type.",
          "Scaled to secure roughly $11.5B in ad revenue running on the platform, closing a real enterprise identity and account-takeover gap.",
          "Shifted the customer conversation from reactive account recovery to proactive admin control, giving Meta a stronger enterprise trust story for business tools.",
        ],
      },
      { type: "h2", text: "What I learned" },
      {
        type: "p",
        text: "Enterprise trust is not created by one feature. It comes from the full system: product controls, migration experience, admin visibility, security posture, support model, documentation, monitoring, and go-to-market readiness.",
      },
      {
        type: "p",
        text: "I learned that enterprise platform work requires turning disconnected problems into one coherent product system. The hard part was not identifying that customers needed managed accounts or single sign-on. It was aligning customer pain, legacy product surfaces, privacy and security requirements, migration complexity, resourcing, and launch sequencing into a path that customers and internal teams could trust.",
      },
    ],
  },
};
