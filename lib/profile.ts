export const GITHUB_USER = "KariraLakshya";

export const profile = {
  name: "Lakshya Karira",
  role: "AI Engineer",
  tagline: "Agentic systems, multi-agent orchestration, and RAG that survives evaluation.",
  status: "Open to AI engineering roles",
  location: "Bengaluru, India",
  email: "kariralakshya68@gmail.com",
  phone: "+91 7505747564",
  github: "https://github.com/KariraLakshya",
  githubHandle: "KariraLakshya",
  linkedin: "https://linkedin.com/in/lakshya-karira",
  linkedinHandle: "lakshya-karira",
  resume: "https://drive.google.com/file/d/1Et7RtkDXoktx0imvmDpogRXXKlKJMokZ/view?usp=drive_link",
  photo: "/profile-photo.jpeg",
} as const;

export const education = {
  institution: "Dayananda Sagar College of Engineering",
  short: "DSCE",
  degree: "B.E. Computer Science",
  location: "Bengaluru, India",
  period: "Expected Aug 2028",
};

export const achievement = {
  title: "3rd Place — Inter-College Hackathon",
  venue: "DSCE",
  date: "Dec 2024",
  description:
    "Built an AI Driver Assistance System using YOLO and OpenCV for real-time dizziness and obstacle detection.",
  tags: ["YOLO", "OpenCV", "Real-time Detection"],
};

export const experience = [
  {
    company: "Capmob Financial Services",
    role: "AI Engineer Intern",
    location: "Bengaluru, India",
    period: "Jun 2026 – Sep 2026",
    summary:
      "A two-sided agentic lending platform — ten agents, one matching engine between them.",
    bullets: [
      "Helped architect a 10-agent, two-sided Agentic AI lending platform end-to-end: 5 borrower-side agents (document intelligence, credit narrative, deal tracking, education, CapBot) and 5 lender-side agents (deal discovery, risk intelligence, portfolio, compliance, preference engine), connected via a central matching engine.",
      "Owned CapBot's document intelligence pipeline end-to-end — RAG-based classification and extraction across bank statements, trade licenses and salary certificates, with structured dataframe output and PII guardrails ahead of downstream credit analytics.",
      "Managed the platform's AWS Bedrock integration (Nova Micro) powering the agent pipeline's LLM calls, including CloudWatch monitoring, alarms and log tailing for production reliability.",
    ],
    tags: ["RAG", "AWS Bedrock", "Nova Micro", "CloudWatch", "Multi-Agent", "PII Guardrails"],
  },
  {
    company: "Stremly",
    role: "AI Engineer Intern",
    location: "Bengaluru, India (Remote)",
    period: "Apr 2026 – Jun 2026",
    summary:
      "Six agents planning and executing projects on their own — plus the tooling to prove they actually worked.",
    bullets: [
      "Architected and validated a 6-agent multi-agent system for end-to-end project execution, enabling autonomous planning, reasoning and task orchestration across production workflows.",
      "Built an API status monitoring page for agentic pipelines, reducing time-to-detect failed production APIs from hours to minutes and enabling faster incident response.",
      "Designed API integration test suites covering inter-agent communication and external services, improving the reliability of production agent workflows.",
    ],
    tags: ["Multi-Agent", "LangGraph", "Monitoring", "Integration Testing", "Python"],
  },
];

/**
 * The stack, as it appears on the résumé. The shore shows languages by real
 * repository counts; this is the fuller picture that the birds can't carry.
 */
export const stack = [
  {
    label: "Agentic systems",
    items: [
      "LangGraph",
      "LangChain",
      "Model Context Protocol (MCP)",
      "Multi-agent orchestration",
      "Retrieval-Augmented Generation",
      "Hybrid search (FAISS + BM25)",
      "LangSmith",
    ],
  },
  {
    label: "Databases",
    items: ["MongoDB", "PostgreSQL", "Redis", "ChromaDB", "Elasticsearch"],
  },
  {
    label: "Cloud & infrastructure",
    items: [
      "AWS Bedrock",
      "AWS ElastiCache",
      "AWS CloudTrail",
      "Docker",
      "GitHub Actions",
      "CI/CD",
      "REST APIs",
      "OAuth",
    ],
  },
  {
    label: "Machine learning & NLP",
    items: ["PyTorch", "Transformers", "HuggingFace", "scikit-learn", "NumPy", "Pandas"],
  },
  {
    label: "Languages & tools",
    items: ["Python", "TypeScript", "Java", "Git", "Jupyter", "Postman"],
  },
];
