import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import profilePhoto from "@/assets/profile-photo.jpeg";


const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden px-6 md:px-12 lg:px-24 pt-24 pb-16">

      {/* Animated background blobs */}
      <div className="blob blob-primary absolute -top-40 -left-40 w-[600px] h-[600px] z-0" />
      <div className="blob blob-accent absolute -bottom-32 -right-32 w-[500px] h-[500px] z-0" />

      {/* Dot grid */}
      <div className="absolute inset-0 dot-grid pointer-events-none z-0" />

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none z-0"
        style={{ background: "linear-gradient(to bottom, transparent, hsl(230 50% 4%))" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 lg:gap-20 items-center">

          {/* ── Left: content ──────────────────────── */}
          <div>
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium border border-primary/25 bg-primary/8 text-primary">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                AI Intern @ Stremly · Open to Opportunities
              </span>
            </motion.div>

            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h1 className="text-6xl md:text-7xl xl:text-8xl font-bold tracking-tight leading-[1.02] mb-3">
                Lakshya
                <br />
                <span
                  style={{
                    background: "linear-gradient(135deg, hsl(234 82% 72%), hsl(199 95% 62%))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Karira
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-medium mb-6">
                AI Engineer
              </p>
            </motion.div>

            {/* Pitch */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-base md:text-lg text-muted-foreground max-w-xl mb-10 leading-relaxed"
            >
              Specializing in agentic AI systems — from LangGraph orchestration
              and RAG pipelines to transformer architectures implemented at the
              research level. Currently shipping autonomous agents at Stremly.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="flex flex-wrap items-center gap-3"
            >
              <Button
                size="lg"
                className="font-medium group"
                style={{
                  background: "linear-gradient(135deg, hsl(234 82% 62%), hsl(199 95% 50%))",
                  border: "none",
                  color: "white",
                }}
                onClick={() =>
                  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
                }
              >
                View Projects
                <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <a href="/resume.pdf" download="Lakshya_Karira_Resume.pdf">
                <Button
                  variant="outline"
                  size="lg"
                  className="font-medium border-border hover:border-primary/50 hover:bg-primary/6 transition-all"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Resume
                </Button>
              </a>

              <div className="flex items-center gap-0.5 ml-1">
                {[
                  { href: "https://github.com/KariraLakshya", icon: Github, label: "GitHub" },
                  { href: "https://linkedin.com/in/lakshya-karira", icon: Linkedin, label: "LinkedIn" },
                  { href: "mailto:kariralakshya68@gmail.com", icon: Mail, label: "Email" },
                ].map(({ href, icon: Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="p-2.5 rounded-xl text-muted-foreground hover:text-primary hover:bg-primary/8 transition-all"
                    aria-label={label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* ── Right: photo ───────────────────────── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="flex justify-center lg:justify-end"
          >
            <div className="w-52 h-52 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-2xl overflow-hidden">
              <img
                src={profilePhoto}
                alt="Lakshya Karira"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
