import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';

export const Achievements = () => {
    return (
        <section id="achievements" className="min-h-[50vh] flex items-center justify-center py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    {/* Section Title */}
                    <h2 className="text-4xl md:text-5xl font-bold text-cyber-green mb-2rem flex items-center justify-center text-center">
                        <span className="text-cyber-magenta">&lt;</span>
                        Achievements
                        <span className="text-cyber-magenta"> /&gt;</span>
                    </h2>

                    {/* Achievements Grid */}
                    <div className="grid gap-6 max-w-4xl flex items-center justify-center mx-auto">
                        {portfolioData.achievements.map((achievement, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                viewport={{ once: true }}
                                className="bg-cyber-dark/50 backdrop-blur-sm border border-cyber-green/30 rounded-lg p-6 hover:shadow-lg hover:shadow-cyber-green/20 transition-all duration-300"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="text-2xl">🏆</div>
                                    <div className="flex-1">
                                        <h4 className="text-xl font-bold text-cyber-green mb-2">{achievement.title}</h4>
                                        <p className="text-sm text-cyber-cyan mb-2">
                                            {achievement.organization} | {achievement.date}
                                        </p>
                                        <p className="text-gray-300">{achievement.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
