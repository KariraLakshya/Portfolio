import { motion } from "framer-motion";
import { MapPin, Calendar, ArrowRight } from "lucide-react";

const experiences = [
  {
    company: "Stremly",
    role: "Artificial Intelligence Intern",
    location: "Bengaluru, India (Remote)",
    period: "Apr 2026 – Present",
    bullets: [
      "Developing autonomous AI agents capable of multi-step reasoning, planning, and task execution for production deployment",
      "Designing and building end-to-end testing environments to validate autonomous AI agent behavior across multi-step reasoning and execution pipelines",
      "Developing API integration test suites to verify correctness, stability, and production readiness of agentic AI systems",
    ],
    tags: ["LangGraph", "Agentic AI", "FastAPI", "Testing", "Python"],
  },
];

const Experience = () => (
  <section id="experience" className="py-24 px-6 md:px-12 lg:px-24 relative">
    <div className="blob blob-primary absolute -top-20 left-1/3 w-80 h-80 z-0 opacity-50" />

    <div className="max-w-6xl mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
        className="mb-14"
      >
        <span className="section-label">Work</span>
        <h2 className="text-4xl md:text-5xl font-bold">Experience</h2>
      </motion.div>

      <div className="space-y-6">
        {experiences.map((exp, i) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="gradient-border glass rounded-2xl overflow-hidden">
              {/* Top accent */}
              <div
                className="h-[3px]"
                style={{
                  background: "linear-gradient(90deg, hsl(234 82% 72%), hsl(199 95% 62%), transparent)",
                }}
              />

              <div className="p-6 md:p-8">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-5">
                  <div>
                    <div className="flex items-center gap-3 flex-wrap mb-1">
                      <h3 className="text-xl font-bold text-primary">{exp.company}</h3>
                      <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-primary/15 text-primary border border-primary/25">
                        Current
                      </span>
                    </div>
                    <p className="text-foreground/80 font-medium">{exp.role}</p>
                  </div>

                  <div className="flex flex-col gap-1 text-sm text-muted-foreground sm:text-right">
                    <span className="flex items-center gap-1.5 sm:justify-end">
                      <Calendar className="w-3.5 h-3.5 flex-shrink-0" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1.5 sm:justify-end">
                      <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Bullets */}
                <ul className="space-y-2.5 mb-5">
                  {exp.bullets.map((b, bi) => (
                    <li key={bi} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <ArrowRight className="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5" />
                      {b}
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
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
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
