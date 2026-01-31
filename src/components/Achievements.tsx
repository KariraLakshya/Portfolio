import { motion } from "framer-motion";
import { Trophy, Calendar, MapPin } from "lucide-react";

const Achievements = () => {
  return (
    <section id="achievements" className="py-24 px-6 md:px-12 lg:px-24">
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
            <span className="text-code-purple">function</span>{" "}
            <span className="text-code-orange">getAchievements</span>
            <span className="text-muted-foreground">()</span>{" "}
            <span className="text-primary">{"{"}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Achievements
          </h2>
        </motion.div>

        {/* Achievement card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative rounded-xl border border-primary/30 bg-card p-8 glow-primary"
        >
          <div className="flex items-start gap-6">
            <div className="hidden sm:flex items-center justify-center w-16 h-16 rounded-xl bg-primary/10 border border-primary/20">
              <Trophy className="w-8 h-8 text-primary" />
            </div>
            
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-4 mb-3">
                <h3 className="text-2xl font-bold text-primary">
                  3rd Place — Inter-College Hackathon
                </h3>
              </div>
              
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4" />
                  DSCE
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  December 2024
                </span>
              </div>
              
              <p className="text-foreground/80 leading-relaxed mb-4">
                Built an AI-based Driver Assistance System using YOLO and OpenCV, implementing 
                real-time detection of driver dizziness and obstacles with alert mechanisms.
              </p>
              
              <div className="flex flex-wrap gap-2">
                {["YOLO", "OpenCV", "Real-time Detection", "AI/ML"].map((tag) => (
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

        {/* Section footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-8 font-mono text-sm text-muted-foreground"
        >
          <span className="text-primary">{"}"}</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
