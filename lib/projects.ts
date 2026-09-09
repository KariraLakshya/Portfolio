/**
 * Project content.
 *
 * `nodeId` joins a project to its node on the graph; the skill edges live in
 * lib/graph.ts so there is exactly one place that decides what connects to
 * what. Everything here is narrative — the graph does the structure.
 */

export type Project = {
  slug: string;
  /** The node this page belongs to, in lib/graph.ts */
  nodeId: string;
  /** GitHub repository, linked rather than fetched */
  repo: string;
  title: string;
  subtitle: string;
  year: string;
  summary: string;
  stack: string[];
  overview: string[];
  process: string[];
  outcome: string[];
  table?: { caption: string; columns: string[]; rows: string[][] };
  /**
   * One snippet per project, at most, and only where seeing the decision is
   * genuinely faster than reading it.
   */
  snippet?: { title: string; note: string; code: string; takeaway: string };
};

export const projects: Project[] = [
  {
    slug: "onboarding-assistant",
    nodeId: "rag-eval",
    repo: "RAG-Eval",
    title: "Onboarding Assistant",
    subtitle: "A benchmarked multi-agent RAG system",
    year: "2026",
    summary:
      "Three RAG architectures, built and measured against each other instead of one built and hoped for.",
    stack: ["LangGraph", "FAISS", "BM25", "Groq", "Tavily", "LangSmith", "scikit-learn"],
    overview: [
      "A new hire shouldn't have to read a stack of policy PDFs to find one answer. This builds an onboarding assistant that lets them just ask.",
      "The part worth talking about is the method. Rather than shipping a single retrieval pipeline and assuming it was good, it builds three progressively more sophisticated architectures — naive RAG, Corrective RAG, and a Supervisor-routed multi-agent system — and benchmarks them head-to-head against a real evaluation harness. The improvements are measured, not asserted.",
    ],
    process: [
      "The order was deliberate: a naive baseline first, then the harness to judge it, then the architectures meant to beat it. Nothing sophisticated got built before there was a way to tell whether it helped.",
      "Corrective RAG adds a document-grading step that can trigger a query rewrite and live web search. The Supervisor-routed system goes further, replacing that fixed grading-to-correction conditional with an agent that reasons about the next step — including a judgement a fixed function could not make: whether the user wants a specific answer or a summary.",
      "Specialists — retrieval, grading, correction, generation, summarization, reflection — report to the Supervisor and never to each other. Two safety valves are enforced in code rather than left to the model: a hop cap of 8 dispatches, and a smaller reflection cap of 2. A stuck run terminates with a best-effort answer instead of looping.",
    ],
    outcome: [
      "On out-of-domain questions the corpus genuinely cannot answer, naive RAG has nowhere to go — 0.0 retrieval relevance, by definition. CRAG's web-search fallback finds real, relevant content instead, at roughly double the latency.",
      "That trade is the actual engineering decision, and the harness makes it visible with numbers rather than a claim. Validated on two independent document sets.",
    ],
    table: {
      caption: "Naive RAG vs. Corrective RAG",
      columns: ["", "Naive", "Corrective"],
      rows: [
        ["Retrieval relevance (OOD)", "0.0", "0.969"],
        ["Faithfulness (OOD)", "0.0", "0.481"],
        ["Answer correctness", "0.857", "0.859"],
        ["Latency", "10.3s", "21.1s"],
      ],
    },
    snippet: {
      title: "The failure that passed review",
      note:
        "Prompted to help a “new hire with company documents,” the summarizer once invented a plausible internal policy — specific loan amounts, interest rates, a late fee — for a document that was a generic external guide containing none of it. Reflection passed it, because reflection only ever asked whether the answer sounded adequate.",
      code: `# reflection, after
role: you are reviewing a summary
      of a supplied document

check:
  - is the summary adequate?
  - is every claim grounded in
    the source text?`,
      takeaway:
        "Two changes: drop the framing that primed the model to expect company policy, and make reflection test grounding rather than plausibility. This class of bug is invisible in a demo and obvious under a harness.",
    },
  },

  {
    slug: "custos-gate",
    nodeId: "custos-gate",
    repo: "Agentic-Payment",
    title: "Custos Gate",
    subtitle: "A trust and authorization layer for agent-to-agent commerce",
    year: "2026",
    summary:
      "Razorpay lets an agent move money. This decides whether it was allowed to — and proves it afterwards.",
    stack: ["TypeScript", "Razorpay MCP", "Razorpay Route", "Policy engine", "Hash-chained audit"],
    overview: [
      "Razorpay's MCP server already lets an AI agent move real money — create payment links, initiate refunds. Nothing yet governs how much authority that agent has when it does.",
      "That gap is not a payment problem, it is a delegation problem. Once a human authorises Agent A, which hands work to Agent B, which executes a payment, the questions that matter are: what exactly was delegated, how much can be spent, with which merchant, for how long — and can the receiving agent pass that authority on?",
      "Custos Gate is the layer that answers them. Built for the Razorpay AI Buildathon, Track 01.",
    ],
    process: [
      "It sits between autonomous agents and Razorpay's payment infrastructure and does four things: issues cryptographically signed, scoped delegation credentials; enforces them through a composable policy engine; executes real transactions; and emits an explainable record of every decision.",
      "The execution is genuinely two-sided rather than simulated — a real transfer to a separate agent's account via Razorpay Route, which is what makes agent-to-agent commerce a working flow instead of a diagram.",
      "The audit trail is hash-chained, so provenance can be proved after the fact rather than asserted. Refusals are explainable too: an agent that attempts something outside its authority produces a record of what it tried and which policy stopped it.",
    ],
    outcome: [
      "The governing constraint is that delegation can only ever narrow. An agent can pass on a subset of what it holds and never more, so authority strictly decays along a chain no matter how long that chain gets.",
      "That single rule is what makes the whole thing tractable: you can reason about the worst case at the end of a delegation chain by looking only at what was granted at the start.",
    ],
    snippet: {
      title: "A blank cheque, or a scope",
      note:
        "Hand an agent a stored credential and it can spend freely — there is no standard way to say “up to ₹5,000, only this merchant, only for the next ten minutes,” and no proof afterwards of what was authorised versus what executed.",
      code: `agent.credential = sign({
  max_amount: 500_000,        // paise
  merchant:   "mid_xxx",
  expires_at: now + 10 * MINUTE,
  may_narrow: true,
  may_widen:  false,
})`,
      takeaway:
        "may_widen: false is the whole design. Delegation that can only narrow means authority at the end of a chain is bounded by authority at the start, however many agents sit in between.",
    },
  },

  {
    slug: "cybercortex",
    nodeId: "cybercortex",
    repo: "CyberCortex",
    title: "CyberCortex",
    subtitle: "Autonomous SOC analyst",
    year: "2026",
    summary:
      "An agentic loop that reconstructs multi-stage attacks across on-premise and AWS, and keeps going until it is confident.",
    stack: [
      "LangGraph",
      "Elasticsearch",
      "AWS CloudTrail",
      "MITRE ATT&CK",
      "ChromaDB",
      "FastAPI",
      "Next.js",
    ],
    overview: [
      "An analyst staring at raw logs is doing reconstruction work: which of these thousands of lines belong to the same story, and what was that story trying to do?",
      "CyberCortex is a hybrid cloud and on-premise threat detection platform that does the reconstruction itself — processing security logs, rebuilding multi-stage attack chains, and mapping the behaviour onto 13 MITRE ATT&CK techniques.",
    ],
    process: [
      "A cross-environment correlation engine links on-premise logs with AWS CloudTrail events. Lateral movement is exactly the kind of behaviour that is invisible inside either environment alone and obvious across both, so the correlation is where the detection actually lives.",
      "A RAG pipeline over ChromaDB gives the loop historical incidents to read a new attack chain against.",
    ],
    outcome: [
      "For critical incidents the system does not stop at a report — it triggers automated AWS remediation, closing the gap between noticing and acting.",
      "Built with a collaborator.",
    ],
    snippet: {
      title: "One pass, or keep going",
      note:
        "A classifier answers once and reports whatever falls out, confident or not. The agentic version treats low confidence as a reason to keep working rather than a caveat to attach to the answer.",
      code: `chain = reconstruct(logs)

while chain.confidence < 0.70:
    chain = refine(chain, evidence)

return report(chain)`,
      takeaway:
        "The threshold is the design decision. It turns a one-shot classifier into something that knows when it has not yet earned its conclusion.",
    },
  },

  {
    slug: "self-healing-sandbox",
    nodeId: "self-healing",
    repo: "Self-Healing-SandBox",
    title: "Self-Healing Sandbox",
    subtitle: "Autonomous QA agent",
    year: "2026",
    summary:
      "Paste a bug report, get a reproducible Dockerfile — with a test that repairs its own selectors when the page moves.",
    stack: ["Python 3.11", "Gemini 2.5", "E2B", "Playwright", "React 18", "Redis", "FastAPI"],
    overview: [
      "The expensive part of a bug report is not reading it — it is reproducing it. Someone has to turn prose into an environment and a sequence of steps that fail the same way.",
      "This does that end to end: paste a bug report, or import a GitHub issue in one click, and get back a reproducible Dockerfile. Gemini interprets the natural-language report, and the agent generates a Playwright script that drives a real browser through it, capturing console errors as it goes.",
    ],
    process: [
      "Everything runs inside E2B sandboxes, which is what makes executing model-authored browser code against a live site reasonable rather than reckless.",
      "The interesting failure is the ordinary one: generated selectors break. A model writes #submit-btn, the page ships a redesign, and the test fails for a reason that has nothing to do with the bug.",
      "So the loop closes with vision. When a selector misses, the agent screenshots the page and asks the model to find the element it was actually looking for, rewrites the selector, and retries.",
      "Redis persistence means sessions survive a restart, so a long reproduction is not lost to a redeploy.",
    ],
    outcome: [
      "The output is a Dockerfile, deliberately. A bug that reproduces on one machine is an anecdote; a bug that reproduces in a container is a ticket someone else can pick up.",
    ],
    snippet: {
      title: "When the selector misses",
      note:
        "A generated test is only as durable as the selectors it guessed. The difference between a QA agent and a script generator is what happens on the line below the failure.",
      code: `try:
    page.click("#submit-btn")
except TimeoutError:
    shot = page.screenshot()
    sel  = vision.locate(shot, "the submit button")
    page.click(sel)          # and carry on`,
      takeaway:
        "The test is no longer pinned to the DOM it was written against. It is pinned to what the button looks like, which was the stable thing all along.",
    },
  },

  {
    slug: "compiler-error-explainer",
    nodeId: "compiler-lm",
    repo: "Compile-Error",
    title: "Compiler Error Explainer",
    subtitle: "A decoder-only transformer, from scratch",
    year: "2026",
    summary:
      "A 6.9M-parameter GPT-style language model built without pretrained weights, trained to explain compiler errors in English.",
    stack: ["PyTorch", "Custom BPE", "HuggingFace Tokenizers", "Kaggle T4", "FastAPI"],
    overview: [
      "A compiler error is already a precise description of what went wrong. It is just written for the compiler's benefit rather than yours.",
      "This translates them — with a language model implemented from the ground up rather than assembled from pretrained parts. No pretrained weights, a tokenizer written from scratch, and a training loop of its own.",
    ],
    process: [
      "The architecture is a 6.9M-parameter decoder-only transformer in PyTorch: 6 layers, 8-head attention, trained from random initialisation.",
      "The tokenizer is a Byte-Pair Encoding implementation written from scratch with an 8,000-token vocabulary, benchmarked against HuggingFace's Rust implementation — which is the useful way to write one from scratch, because you find out what your version costs.",
      "The data is where most of the work went: a pipeline that extracts, cleans and filters a 96GB StackOverflow XML dump down to 25,000 error–explanation pairs. Training ran on a Kaggle T4.",
    ],
    outcome: [
      "The model reached a validation loss of 2.11 and a perplexity of 8.36 — modest in absolute terms, and the right numbers to report for 6.9M parameters trained from scratch on one consumer GPU.",
      "The point of building it this way is not to compete with a pretrained model. It is that every part of the stack — tokenizer, architecture, data pipeline, training loop, sampling — had to be understood rather than imported.",
    ],
    table: {
      caption: "What it is",
      columns: ["", "Value"],
      rows: [
        ["Parameters", "6.9M"],
        ["Layers · heads", "6 · 8"],
        ["Vocabulary", "8,000 (custom BPE)"],
        ["Training pairs", "25,000"],
        ["Source corpus", "96GB StackOverflow dump"],
        ["Validation loss", "2.11"],
        ["Perplexity", "8.36"],
      ],
    },
    snippet: {
      title: "Teaching it where the answer starts",
      note:
        "Concatenating an error and its explanation leaves the model to infer the boundary from context. Explicit boundary tokens make it a symbol the model can learn, and give inference an unambiguous stop signal.",
      code: `prompt = f"<ERROR>{error}<EXPLANATION>"

out = model.generate(
    prompt,
    top_k=40,
    stop="<ERROR>",   # a token, not a guess
)`,
      takeaway:
        "Structure the model can see beats structure you hope it infers — and sampling against a known stop token is far better behaved than trimming output after the fact.",
    },
  },
];

/** Real, but not on the graph — a node per repository would be noise. */
export const otherWork = [
  {
    repo: "mlops-auto-trainer",
    name: "MLOps Auto-Trainer",
    description:
      "Trains, evaluates, versions and deploys models from a single manifest, with champion promotion and drift monitoring on GitHub Actions.",
  },
  {
    repo: "Privacy-Sentinel",
    name: "Privacy Sentinel",
    description:
      "Early warning for Aadhaar-style data misuse, pairing Z-score outlier detection with an Isolation Forest across demographic, biometric and enrolment records.",
  },
  {
    repo: "Payment-Firewall",
    name: "Autonomous Payment Orchestrator",
    description:
      "The earlier take on agent payment authorization that became Custos Gate — mandate issuer, orchestrator, and three tiers of trust check.",
  },
  {
    repo: "finance-backend",
    name: "Finance Dashboard Backend",
    description:
      "Express, Prisma and PostgreSQL with Clerk auth, role-based access control, soft deletes and Swagger docs.",
  },
  {
    repo: "Smart-Park",
    name: "Smart Park",
    description:
      "A full-stack parking reservation system with real-time slot availability on an interactive map.",
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function getProjectByNode(nodeId: string) {
  return projects.find((p) => p.nodeId === nodeId);
}
