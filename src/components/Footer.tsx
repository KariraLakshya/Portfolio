const Footer = () => (
  <footer className="py-8 px-6 md:px-12 lg:px-24 border-t border-border/50">
    <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
      <a
        href="#"
        className="font-bold text-base hover:opacity-80 transition-opacity"
        style={{
          background: "linear-gradient(135deg, hsl(234 82% 72%), hsl(199 95% 62%))",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        Lakshya Karira
      </a>
      <p className="text-xs text-muted-foreground">
        © {new Date().getFullYear()} · Built with React & Framer Motion
      </p>
    </div>
  </footer>
);

export default Footer;
