import { motion } from "framer-motion";
import { GraduationCap, MapPin, Calendar } from "lucide-react";

const education = [
  {
    institution: "Dayananda Sagar College of Engineering",
    degree: "Bachelor of Engineering in Computer Science",
    location: "Bengaluru, India",
    period: "Expected Aug 2028",
    current: true
  },
  {
    institution: "Jim Corbett Public School",
    degree: "Higher Secondary Education",
    location: "Agra, India",
    period: "Completed",
    current: false
  }
];

const Education = () => {
  return (
    <section id="education" className="py-24 px-6 md:px-12 lg:px-24 relative">
      {/* Background accent */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{ background: "radial-gradient(ellipse at top right, hsl(var(--accent) / 0.05), transparent 50%)" }}
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
          <div className="font-mono text-sm text-muted-foreground mb-2">
            <span className="text-code-purple">import</span>{" "}
            <span className="text-primary">{"{ Education }"}</span>{" "}
            <span className="text-code-purple">from</span>{" "}
            <span className="text-code-orange">"./journey"</span>;
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Education
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="space-y-6">
          {education.map((edu, index) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className={`relative rounded-xl border p-6 transition-all duration-300 ${
                edu.current 
                  ? 'border-primary/50 bg-card glow-primary' 
                  : 'border-border bg-card/50 hover:border-border/80'
              }`}
            >
              <div className="flex items-start gap-4">
                <div className={`hidden sm:flex items-center justify-center w-12 h-12 rounded-lg ${
                  edu.current ? 'bg-primary/20' : 'bg-secondary'
                }`}>
                  <GraduationCap className={`w-6 h-6 ${edu.current ? 'text-primary' : 'text-muted-foreground'}`} />
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className={`text-xl font-semibold ${edu.current ? 'text-primary' : ''}`}>
                      {edu.institution}
                    </h3>
                    {edu.current && (
                      <span className="px-2 py-0.5 text-xs font-mono rounded-full bg-primary/20 text-primary border border-primary/30">
                        Current
                      </span>
                    )}
                  </div>
                  
                  <p className="text-foreground/80 mb-3">{edu.degree}</p>
                  
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4" />
                      {edu.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" />
                      {edu.period}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
