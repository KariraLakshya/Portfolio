import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 md:px-12 lg:px-24 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & copyright */}
          <div className="text-center md:text-left">
            <a 
              href="#" 
              className="font-mono text-lg font-bold hover:text-primary transition-colors inline-block mb-2"
            >
              <span className="text-primary">&lt;</span>
              LK
              <span className="text-primary">/&gt;</span>
            </a>
            <p className="text-sm text-muted-foreground font-mono">
              © {currentYear} Lakshya Karira. All rights reserved.
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            <a 
              href="https://github.com/KariraLakshya" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-secondary transition-colors text-muted-foreground hover:text-primary"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://linkedin.com/in/lakshya-karira" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-secondary transition-colors text-muted-foreground hover:text-primary"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="mailto:kariralakshya68@gmail.com"
              className="p-2 rounded-lg hover:bg-secondary transition-colors text-muted-foreground hover:text-primary"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Code signature */}
        <div className="mt-8 pt-6 border-t border-border/50 text-center">
          <p className="font-mono text-xs text-muted-foreground">
            <span className="text-code-purple">console</span>
            <span className="text-muted-foreground">.</span>
            <span className="text-code-orange">log</span>
            <span className="text-muted-foreground">(</span>
            <span className="text-primary">"Built with 💚 and React"</span>
            <span className="text-muted-foreground">);</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
