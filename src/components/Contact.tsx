import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin, Send, ArrowUpRight } from "lucide-react";
import { Button } from "./ui/button";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "kariralakshya68@gmail.com",
    href: "mailto:kariralakshya68@gmail.com"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 7505747564",
    href: "tel:+917505747564"
  },
  {
    icon: Github,
    label: "GitHub",
    value: "KariraLakshya",
    href: "https://github.com/KariraLakshya"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "lakshya-karira",
    href: "https://linkedin.com/in/lakshya-karira"
  }
];

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 md:px-12 lg:px-24 relative">
      {/* Background gradient */}
      <div 
        className="absolute inset-0 opacity-50"
        style={{ background: "radial-gradient(ellipse at bottom, hsl(var(--primary) / 0.08), transparent 60%)" }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="font-mono text-sm text-muted-foreground mb-4">
            <span className="text-code-purple">async function</span>{" "}
            <span className="text-code-orange">connectWithMe</span>
            <span className="text-muted-foreground">()</span>{" "}
            <span className="text-primary">{"{"}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's Build Something
            <span className="text-gradient"> Amazing</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Open to opportunities, collaborations, and interesting conversations 
            about tech, ML, and everything in between.
          </p>
        </motion.div>

        {/* Contact grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-12">
          {contactLinks.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group flex items-center gap-4 p-4 rounded-xl border border-border bg-card/50 hover:border-primary/50 hover:bg-card transition-all duration-300"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-secondary group-hover:bg-primary/20 transition-colors">
                <link.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-muted-foreground">{link.label}</p>
                <p className="font-mono text-sm truncate group-hover:text-primary transition-colors">
                  {link.value}
                </p>
              </div>
              <ArrowUpRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </motion.a>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button
            size="lg"
            className="font-mono glow-primary group"
            asChild
          >
            <a href="mailto:kariralakshya68@gmail.com">
              <Send className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
              send_message()
            </a>
          </Button>
        </motion.div>

        {/* Section footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center font-mono text-sm text-muted-foreground"
        >
          <span className="text-primary">{"}"}</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
