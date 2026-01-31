import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

const projects = [
  {
    title: "Apex MLOps Auto-Trainer",
    subtitle: "Configuration-Driven MLOps Platform",
    description: "End-to-end MLOps platform orchestrating training, evaluation, and deployment pipelines with GitHub Actions as serverless automation engine.",
    highlights: [
      "Containerized models with Docker",
      "Data drift monitoring",
      "React + Node.js dashboard",
      "Pipeline lifecycle tracking"
    ],
    tags: ["React", "Node.js", "Docker", "GitHub Actions", "MLOps"],
    color: "primary"
  },
  {
    title: "Privacy Sentinel",
    subtitle: "Aadhaar Anomaly Detection System",
    description: "Hybrid Anomaly Detection Engine combining Z-Score analysis with Isolation Forest to detect behavioral anomalies in digital identity systems.",
    highlights: [
      "Analyzed 4.9M records",
      "GPU-accelerated (NVIDIA Tesla P100)",
      "1.55% critical-risk detection",
      "Privacy-preserving governance"
    ],
    tags: ["Python", "React", "Vite", "Recharts", "ML"],
    color: "accent"
  },
  {
    title: "Smart Park",
    subtitle: "Real-Time Parking Reservation System",
    description: "Full-stack parking reservation system with concurrent slot booking and secure REST APIs designed for production scalability.",
    highlights: [
      "Node.js + Express backend",
      "MongoDB integration",
      "Concurrent booking handling",
      "Scalable database schemas"
    ],
    tags: ["Node.js", "Express", "MongoDB", "REST API"],
    color: "primary"
  }
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      viewport={{ once: true, margin: "-50px" }}
      className="group relative"
    >
      <div className="relative rounded-xl border border-border bg-card p-6 md:p-8 transition-all duration-500 hover:border-primary/50 card-gradient overflow-hidden">
        {/* Glow effect on hover */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), hsl(var(--${project.color}) / 0.06), transparent 40%)`
          }}
        />
        
        {/* Line number decoration */}
        <div className="absolute left-0 top-0 bottom-0 w-12 border-r border-border/50 hidden md:flex flex-col items-center py-8 text-xs font-mono text-muted-foreground/50">
          {Array.from({ length: 12 }, (_, i) => (
            <span key={i} className="leading-6">{String(i + 1).padStart(2, '0')}</span>
          ))}
        </div>

        <div className="md:pl-8">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div>
              <span className="font-mono text-xs text-primary mb-2 block">
                {`// project_0${index + 1}`}
              </span>
              <h3 className="text-2xl font-bold mb-1 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground font-mono text-sm">
                {project.subtitle}
              </p>
            </div>
            <div className="flex gap-2">
              <button className="p-2 rounded-lg hover:bg-secondary transition-colors text-muted-foreground hover:text-primary">
                <Github className="w-5 h-5" />
              </button>
              <button className="p-2 rounded-lg hover:bg-secondary transition-colors text-muted-foreground hover:text-primary">
                <ExternalLink className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Description */}
          <p className="text-muted-foreground mb-6 leading-relaxed">
            {project.description}
          </p>

          {/* Highlights */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
            {project.highlights.map((highlight, i) => (
              <li key={i} className="flex items-center gap-2 text-sm">
                <ArrowRight className="w-3 h-3 text-primary flex-shrink-0" />
                <span className="text-foreground/80">{highlight}</span>
              </li>
            ))}
          </ul>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span 
                key={tag}
                className="px-2 py-1 text-xs font-mono rounded bg-secondary text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="font-mono text-sm text-muted-foreground mb-2">
            <span className="text-code-purple">class</span>{" "}
            <span className="text-primary">Projects</span>{" "}
            <span className="text-muted-foreground">{"{"}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured Work
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            A collection of projects showcasing my expertise in full-stack development,
            machine learning, and building scalable systems.
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* Section footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-8 font-mono text-sm text-muted-foreground"
        >
          <span>{"}"}</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
