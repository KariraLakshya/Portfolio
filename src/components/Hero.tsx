import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Github, Linkedin, Mail, Download, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import profilePhoto from "@/assets/profile-photo.jpeg";

const TypingText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const [displayText, setDisplayText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      let index = 0;
      const interval = setInterval(() => {
        if (index <= text.length) {
          setDisplayText(text.slice(0, index));
          index++;
        } else {
          clearInterval(interval);
          setTimeout(() => setShowCursor(false), 1000);
        }
      }, 50);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timeout);
  }, [text, delay]);

  return (
    <span>
      {displayText}
      {showCursor && <span className="terminal-cursor text-primary">|</span>}
    </span>
  );
};

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden px-6 md:px-12 lg:px-24 pt-20">
      {/* Background gradient */}
      <div 
        className="absolute inset-0 opacity-40"
        style={{ background: "radial-gradient(ellipse at top, hsl(220 20% 12%), transparent)" }}
      />
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: "50px 50px"
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16">
          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-8 lg:mb-0 lg:order-2 flex-shrink-0"
          >
            <div className="relative w-48 h-48 md:w-56 md:h-56 lg:w-72 lg:h-72 mx-auto lg:mx-0">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/50 to-accent/50 blur-xl opacity-60" />
              <img
                src={profilePhoto}
                alt="Lakshya Karira"
                className="relative w-full h-full object-cover rounded-full border-2 border-primary/30 shadow-lg"
              />
            </div>
          </motion.div>

          {/* Main content */}
          <div className="lg:order-1 flex-1">
            {/* Terminal header */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary/50 border border-border font-mono text-sm text-muted-foreground">
                <span className="w-3 h-3 rounded-full bg-destructive/80" />
                <span className="w-3 h-3 rounded-full bg-code-orange/80" />
                <span className="w-3 h-3 rounded-full bg-primary/80" />
                <span className="ml-2">~/lakshya-karira</span>
              </div>
            </motion.div>

        {/* Main content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="font-mono text-primary mb-4 text-lg">
            <span className="text-code-purple">const</span>{" "}
            <span className="text-code-orange">developer</span>{" "}
            <span className="text-muted-foreground">=</span>
          </p>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
            <TypingText text="Lakshya Karira" delay={500} />
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-8 leading-relaxed"
          >
            <span className="text-primary font-mono">{"//"}</span>{" "}
            ML Engineer & Full-Stack Developer building intelligent systems
            with deep learning, NLP, and production-grade architecture.
          </motion.p>

          {/* Tech stack preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.3 }}
            className="flex flex-wrap gap-3 mb-12"
          >
            {["PyTorch", "Transformers", "Python", "FastAPI", "Docker"].map((tech, i) => (
              <span 
                key={tech}
                className="skill-tag"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {tech}
              </span>
            ))}
          </motion.div>

          {/* CTA and social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5 }}
            className="flex flex-wrap items-center gap-4"
          >
            <Button 
              size="lg" 
              className="font-mono glow-primary"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              view_projects()
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="font-mono border-primary/30 hover:border-primary hover:bg-primary/10"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              contact_me()
            </Button>
            <a href="/resume.pdf" download="Lakshya_Karira_Resume.pdf">
              <Button 
                variant="outline" 
                size="lg"
                className="font-mono border-primary/30 hover:border-primary hover:bg-primary/10"
              >
                <Download className="w-4 h-4 mr-2" />
                download_resume()
              </Button>
            </a>
            
            <div className="flex items-center gap-2 ml-4">
              <a 
                href="https://github.com/KariraLakshya" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-secondary transition-colors hover:text-primary"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com/in/lakshya-karira" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-secondary transition-colors hover:text-primary"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="mailto:kariralakshya68@gmail.com"
                className="p-2 rounded-lg hover:bg-secondary transition-colors hover:text-primary"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown className="w-6 h-6 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
