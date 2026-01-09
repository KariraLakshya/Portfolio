import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';

const ProjectCard = ({ project, index }: { project: typeof portfolioData.projects[0]; index: number }) => {
    const projectIcons: Record<string, string> = {
        'Apex — MLOps Auto-Trainer': '🤖',
        'Smart Park': '🅿️',
        'Image Captioning Model': '🖼️',
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -10, scale: 1.02 }}
            className="bg-gradient-to-br from-cyber-dark/80 to-cyber-dark/50 backdrop-blur-sm border border-cyber-cyan/30 rounded-lg overflow-hidden hover:shadow-xl hover:shadow-cyber-cyan/20 hover:border-cyber-cyan/50 transition-all duration-300 flex flex-col h-full mx-4"
        >
            {/* Project Content */}
            <div className="p-6 flex-1 flex flex-col">
                {/* Icon and Title */}
                <div className="flex items-center gap-3 mb-3">
                    <div className="text-3xl">{projectIcons[project.name] || '💻'}</div>
                    <h3 className="text-xl font-bold text-cyber-cyan">{project.name}</h3>
                </div>

                <p className="text-gray-300 mb-4 leading-relaxed text-sm flex-1">{project.description}</p>

                {/* Tech Stack */}
                <div className="mb-4">
                    <h4 className="text-xs font-semibold text-cyber-green mb-2">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, idx) => (
                            <span
                                key={idx}
                                className="px-2 py-1 bg-cyber-black/50 border border-cyber-purple/30 text-cyber-purple rounded text-xs"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Links */}
                <div className="flex gap-3">
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full px-4 py-3 bg-transparent border-2 border-cyber-green text-cyber-green rounded hover:bg-cyber-green hover:text-cyber-black transition-all duration-300 flex items-center justify-center gap-2 font-medium"
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                        </svg>
                        View on GitHub
                    </a>
                </div>
            </div>
        </motion.div>
    );
};

export const Projects = () => {
    return (
        <section id="projects" className="min-h-screen flex items-center justify-center py-20 bg-cyber-dark/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    {/* Section Title */}
                    <h2 className="text-4xl md:text-5xl font-bold text-cyber-cyan mb-16 text-center">
                        <span className="text-cyber-magenta">&lt;</span>
                        Projects
                        <span className="text-cyber-magenta"> /&gt;</span>
                    </h2>

                    {/* Projects Grid - Vertical List */}
                    <div className="flex flex-col gap-6 max-w-4xl mx-auto">
                        {portfolioData.projects.map((project, index) => (
                            <ProjectCard key={project.name} project={project} index={index} />
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
