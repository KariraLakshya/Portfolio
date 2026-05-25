import { motion } from "framer-motion";

const skillGroups = [
  {
    label: "Agentic Systems",
    color: "hsl(234 82% 72%)",
    skills: ["LangGraph", "LangChain", "Tool Calling", "MCP", "RAG", "ChromaDB", "Prompt Engineering"],
  },
  {
    label: "ML & NLP",
    color: "hsl(199 95% 62%)",
    skills: ["PyTorch", "Transformers", "HuggingFace", "BPE Tokenization", "RNNs / LSTMs"],
  },
  {
    label: "Data & Deployment",
    color: "hsl(258 80% 70%)",
    skills: ["FastAPI", "Docker", "Elasticsearch", "GitHub Actions", "CI/CD", "REST APIs", "Pandas", "NumPy"],
  },
  {
    label: "Languages & Tools",
    color: "hsl(142 76% 56%)",
    skills: ["Python", "TypeScript", "Java", "Git", "Jupyter", "Postman"],
  },
];

const Skills = () => (
  <section id="skills" className="py-24 px-6 md:px-12 lg:px-24 relative">
    <div className="blob blob-accent absolute top-1/3 right-0 w-72 h-72 z-0 opacity-60" />

    <div className="max-w-6xl mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
        className="mb-14"
      >
        <span className="section-label">Capabilities</span>
        <h2 className="text-4xl md:text-5xl font-bold mb-3">Tech Stack</h2>
        <p className="text-muted-foreground max-w-xl">
          From agentic orchestration to low-level transformer implementations.
        </p>
      </motion.div>

      <div className="space-y-5">
        {skillGroups.map((group, gi) => (
          <motion.div
            key={group.label}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: gi * 0.08 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-5 md:p-6 flex flex-col sm:flex-row sm:items-start gap-4"
          >
            {/* Category label */}
            <div className="sm:w-44 flex-shrink-0 flex items-center gap-2.5">
              <div
                className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                style={{ background: group.color, boxShadow: `0 0 8px ${group.color}` }}
              />
              <span
                className="text-sm font-semibold"
                style={{ color: group.color }}
              >
                {group.label}
              </span>
            </div>

            {/* Skills */}
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="skill-tag"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

    </div>
  </section>
);

export default Skills;
