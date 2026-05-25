import { motion } from "framer-motion";
import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react";

const links = [
  {
    icon: Github,
    label: "GitHub",
    handle: "KariraLakshya",
    href: "https://github.com/KariraLakshya",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    handle: "lakshya-karira",
    href: "https://linkedin.com/in/lakshya-karira",
  },
];

const Contact = () => (
  <section id="contact" className="py-24 px-6 md:px-12 lg:px-24 relative">
    <div className="blob blob-primary absolute bottom-0 left-1/2 w-96 h-96 z-0 opacity-40" />

    <div className="max-w-6xl mx-auto relative z-10">
      <div className="max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <span className="section-label">Contact</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's build something{" "}
            <span
              style={{
                background: "linear-gradient(135deg, hsl(234 82% 72%), hsl(199 95% 62%))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              great.
            </span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Open to AI engineering roles and interesting projects.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-3"
        >
          {/* Email — primary */}
          <a
            href="mailto:kariralakshya68@gmail.com"
            className="group flex items-center gap-3 px-4 py-3 rounded-xl border border-primary/30 bg-primary/8 hover:bg-primary/12 hover:border-primary/50 transition-all duration-300"
          >
            <Mail className="w-4 h-4 text-primary flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <p className="text-xs text-muted-foreground">Email</p>
              <p className="text-sm font-medium text-primary truncate">
                kariralakshya68@gmail.com
              </p>
            </div>
            <ArrowUpRight className="w-3.5 h-3.5 text-primary opacity-60 group-hover:opacity-100 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>

          {/* GitHub + LinkedIn */}
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-4 py-3 rounded-xl border border-border bg-card/50 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300"
            >
              <link.icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-xs text-muted-foreground">{link.label}</p>
                <p className="text-sm font-medium truncate group-hover:text-primary transition-colors">
                  {link.handle}
                </p>
              </div>
              <ArrowUpRight className="w-3.5 h-3.5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

export default Contact;
