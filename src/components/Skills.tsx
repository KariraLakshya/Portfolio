import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';

const SkillColumn = ({ title, skills, delay }: { title: string; skills: string[]; delay: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay }}
            viewport={{ once: true }}
            className="space-y-3"
        >
            <h3 className="text-lg font-bold text-cyber-cyan mb-4 pb-2 border-b border-cyber-cyan/30">
                {title}
            </h3>
            <ul className="space-y-2">
                {skills.map((skill, index) => (
                    <motion.li
                        key={skill}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: delay + (index * 0.05) }}
                        viewport={{ once: true }}
                        className="text-gray-300 flex items-center gap-2 group"
                    >
                        <span className="w-1.5 h-1.5 bg-cyber-green rounded-full group-hover:scale-150 transition-transform"></span>
                        <span className="group-hover:text-cyber-green transition-colors">{skill}</span>
                    </motion.li>
                ))}
            </ul>
        </motion.div>
    );
};

export const Skills = () => {
    const skillCategories = [
        {
            title: 'Languages',
            skills: portfolioData.skills.languages,
        },
        {
            title: 'Full Stack Development',
            skills: portfolioData.skills.fullStack,
        },
        {
            title: 'Machine Learning',
            skills: portfolioData.skills.machineLearning,
        },
        {
            title: 'Tools & Concepts',
            skills: [...portfolioData.skills.tools, ...portfolioData.skills.concepts],
        },
    ];

    return (
        <section id="skills" className="min-h-screen flex items-center justify-center py-20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    {/* Section Title */}
                    <h2 className="text-4xl md:text-5xl font-bold text-cyber-cyan mb-4 text-center">
                        <span className="text-cyber-magenta">&lt;</span>
                        Skills
                        <span className="text-cyber-magenta"> /&gt;</span>
                    </h2>

                    <p className="text-gray-400 mb-12 text-center">Technologies I work with</p>

                    {/* Skills in Vertical Lists - 4 columns */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {skillCategories.map((category, index) => (
                            <SkillColumn
                                key={category.title}
                                title={category.title}
                                skills={category.skills}
                                delay={index * 0.1}
                            />
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
