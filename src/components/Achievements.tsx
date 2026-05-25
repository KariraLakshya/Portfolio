import { motion } from "framer-motion";
import { Trophy, GraduationCap, MapPin, Calendar } from "lucide-react";

const education = {
  institution: "Dayananda Sagar College of Engineering (DSCE)",
  degree: "B.E. Computer Science",
  location: "Bengaluru, India",
  period: "Expected Aug 2028",
};

const achievement = {
  title: "3rd Place — Inter-College Hackathon",
  description:
    "Built an AI Driver Assistance System using YOLO + OpenCV for real-time dizziness and obstacle detection.",
  tags: ["YOLO", "OpenCV", "Real-time Detection"],
  venue: "DSCE",
  date: "Dec 2024",
};

const Achievements = () => (
  <section id="achievements" className="py-24 px-6 md:px-12 lg:px-24">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
        className="mb-14"
      >
        <span className="section-label">Background</span>
        <h2 className="text-4xl md:text-5xl font-bold">Education & Achievements</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Education card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true }}
          className="gradient-border glass rounded-2xl p-6 md:p-8"
        >
          <div className="flex items-start gap-4">
            <div className="w-11 h-11 rounded-xl bg-primary/15 flex items-center justify-center flex-shrink-0">
              <GraduationCap className="w-5 h-5 text-primary" />
            </div>
            <div>
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2 block">
                Education
              </span>
              <h3 className="font-bold text-foreground mb-1">{education.institution}</h3>
              <p className="text-sm text-muted-foreground mb-4">{education.degree}</p>
              <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  {education.location}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  {education.period}
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Achievement card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.1 }}
          viewport={{ once: true }}
          className="gradient-border glass rounded-2xl p-6 md:p-8"
        >
          <div className="flex items-start gap-4">
            <div className="w-11 h-11 rounded-xl bg-amber-500/15 flex items-center justify-center flex-shrink-0">
              <Trophy className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2 block">
                Achievement · {achievement.date}
              </span>
              <h3 className="font-bold text-foreground mb-2">{achievement.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{achievement.description}</p>
              <div className="flex flex-wrap gap-2">
                {achievement.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 text-xs rounded-md bg-secondary text-muted-foreground border border-border/60 font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Achievements;
