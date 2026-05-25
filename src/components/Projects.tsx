import { motion } from "framer-motion";
import { Github, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "CyberCortex",
    type: "Autonomous SOC Analyst",
    description:
      "LangGraph agentic loop that ingests logs from on-premise + AWS CloudTrail, autonomously reconstructs multi-stage attack chains, and maps them to MITRE ATT&CK — iterating until confidence exceeds 70%.",
    metrics: [
      "13 MITRE ATT&CK techniques",
      "70% confidence threshold",
      "VirusTotal + auto AWS remediation",
    ],
    tags: ["LangGraph", "Elasticsearch", "AWS CloudTrail", "FastAPI", "Next.js", "ChromaDB"],
    github: "https://github.com/KariraLakshya",
    accent: "hsl(234 82% 72%)",
  },
  {
    title: "Compiler Error Explainer",
    type: "Decoder-Only Transformer LM",
    description:
      "GPT-style transformer built entirely from scratch in PyTorch — no pretrained weights, custom BPE tokenizer, trained on 25K error–explanation pairs curated from a 96 GB StackOverflow dump.",
    metrics: [
      "6.9M params · 6 layers · 8-head attn",
      "Val loss 2.11 · Perplexity 8.36",
      "25K pairs from 96 GB SO dump",
    ],
    tags: ["PyTorch", "HuggingFace Tokenizers", "FastAPI", "T4 GPU"],
    github: "https://github.com/KariraLakshya",
    accent: "hsl(199 95% 62%)",
  },
  {
    title: "Self-Healing Sandbox",
    type: "Autonomous QA Agent",
    description:
      "Converts GitHub bug reports into Playwright test scripts and self-heals broken selectors via Gemini Vision AI in a closed feedback loop, all running in E2B sandboxed browser environments.",
    metrics: [
      "Bug report → Playwright script",
      "Gemini Vision self-healing loop",
      "E2B isolated execution + Redis",
    ],
    tags: ["Gemini 2.5", "E2B", "Playwright", "FastAPI", "React", "Redis"],
    github: "https://github.com/KariraLakshya",
    accent: "hsl(258 80% 70%)",
  },
];

const ProjectCard = ({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.45, delay: index * 0.12 }}
    viewport={{ once: true, margin: "-40px" }}
    className="group relative"
  >
    <div className="gradient-border glass rounded-2xl overflow-hidden transition-all duration-400 hover:shadow-[0_8px_40px_hsl(234_82%_72%/0.1)]">
      {/* Accent top bar */}
      <div
        className="h-[3px] w-full transition-all duration-500 group-hover:opacity-100 opacity-70"
        style={{ background: `linear-gradient(90deg, ${project.accent}, transparent)` }}
      />

      <div className="p-6 md:p-8">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            <p className="text-xs font-medium text-muted-foreground mb-1 uppercase tracking-wider">
              {project.type}
            </p>
            <h3 className="text-2xl font-bold group-hover:text-primary transition-colors duration-300">
              {project.title}
            </h3>
          </div>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border border-border text-muted-foreground hover:border-primary/50 hover:text-primary hover:bg-primary/6 transition-all flex-shrink-0"
          >
            <Github className="w-3.5 h-3.5" />
            GitHub
            <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>

        {/* Description */}
        <p className="text-muted-foreground text-sm leading-relaxed mb-5">
          {project.description}
        </p>

        {/* Metric chips */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.metrics.map((m) => (
            <span
              key={m}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium"
              style={{
                background: `${project.accent}18`,
                border: `1px solid ${project.accent}35`,
                color: project.accent,
              }}
            >
              {m}
            </span>
          ))}
        </div>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-md text-xs font-mono bg-secondary text-muted-foreground border border-border/60"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  </motion.div>
);

const Projects = () => (
  <section id="projects" className="py-24 px-6 md:px-12 lg:px-24">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
        className="mb-14"
      >
        <span className="section-label">Selected Projects</span>
        <h2 className="text-4xl md:text-5xl font-bold mb-3">Featured Work</h2>
        <p className="text-muted-foreground max-w-xl">
          End-to-end agentic systems, a transformer built from scratch, and an autonomous
          QA agent — all production-ready.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
