import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "ML & Deep Learning",
    icon: "🧠",
    skills: ["PyTorch", "Transformers", "Scikit-learn", "NumPy", "Pandas", "TensorFlow"]
  },
  {
    title: "NLP & AI",
    icon: "🤖",
    skills: ["Tokenization", "TF-IDF", "Word Embeddings", "BERT", "Attention Mechanisms", "Text Classification"]
  },
  {
    title: "MLOps & Backend",
    icon: "⚙️",
    skills: ["FastAPI", "Docker", "GitHub Actions", "REST APIs", "Model Deployment", "Data Pipelines"]
  },
  {
    title: "Full Stack",
    icon: "</>",
    skills: ["Python", "JavaScript", "React.js", "Node.js", "MongoDB", "Express.js"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 md:px-12 lg:px-24 relative">
      {/* Background accent */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{ background: "radial-gradient(ellipse at bottom, hsl(var(--primary) / 0.05), transparent 50%)" }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Tech Stack
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Technologies and tools I use to bring ideas to life.
          </p>
        </motion.div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="rounded-xl border border-border bg-card/50 p-6 hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl font-mono text-primary">{category.icon}</span>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      duration: 0.3, 
                      delay: categoryIndex * 0.1 + skillIndex * 0.05 
                    }}
                    viewport={{ once: true }}
                    className="skill-tag"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* DSA note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-8 p-4 rounded-lg border border-border/50 bg-secondary/30"
        >
          <p className="font-mono text-sm text-muted-foreground">
            <span className="text-code-purple">+</span>{" "}
            Strong foundation in <span className="text-primary">Data Structures and Algorithms</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
