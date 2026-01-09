import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';

export const About = () => {
    return (
        <section id="about" className="min-h-screen flex items-center py-20 bg-cyber-dark/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    {/* Section Title */}
                    <h2 className="text-4xl md:text-5xl font-bold text-cyber-cyan mb-12 text-center">
                        <span className="text-cyber-magenta">&lt;</span>
                        About Me
                        <span className="text-cyber-magenta"> /&gt;</span>
                    </h2>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Profile Image */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="flex justify-center"
                        >
                            <div className="relative w-64 h-64 md:w-80 md:h-80">
                                <div className="absolute inset-0 bg-gradient-to-br from-cyber-purple/30 to-cyber-pink/30 rounded-lg blur-xl"></div>
                                <img
                                    src="/profile.png"
                                    alt="Lakshya Karira"
                                    className="relative w-full h-full object-cover rounded-lg border-2 border-cyber-purple/50 shadow-lg shadow-cyber-purple/20"
                                />
                            </div>
                        </motion.div>

                        {/* About Content */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            viewport={{ once: true }}
                            className="space-y-8"
                        >
                            <div>
                                <h3 className="text-2xl font-bold text-cyber-green mb-2">{portfolioData.name}</h3>
                                <p className="text-xl text-cyber-cyan mb-6">{portfolioData.title}</p>
                                <p className="text-gray-300 leading-relaxed whitespace-pre-line text-base">
                                    {portfolioData.professionalSummary}
                                </p>
                            </div>

                            {/* Education - More Spaced Out */}
                            <div className="bg-cyber-dark/50 backdrop-blur-sm border border-cyber-purple/30 rounded-lg p-18">
                                <h4 className="text-xl font-bold text-cyber-cyan mb-6 flex items-center">
                                    <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                    </svg>
                                    Education
                                </h4>
                                <div className="space-y-3">
                                    <p className="text-lg text-cyber-green font-semibold">
                                        {portfolioData.education.degree}
                                    </p>
                                    <p className="text-gray-300">
                                        {portfolioData.education.institution}
                                    </p>
                                    <p className="text-sm text-gray-400">
                                        Expected: {portfolioData.education.expected}
                                    </p>
                                </div>
                            </div>

                            {/* Location */}
                            <div className="flex items-center text-gray-300">
                                <svg className="w-5 h-5 mr-2 text-cyber-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                {portfolioData.contact.location}
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
