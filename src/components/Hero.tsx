import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export const Hero = () => {
    const [displayedText, setDisplayedText] = useState('');
    const fullText = 'Full Stack Developer & ML Enthusiast';

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            if (index <= fullText.length) {
                setDisplayedText(fullText.substring(0, index));
                index++;
            } else {
                clearInterval(interval);
            }
        }, 50);

        return () => clearInterval(interval);
    }, []);

    const scrollToProjects = () => {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToContact = () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
                {/* Name */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-6xl md:text-8xl font-bold text-cyber-cyan glow-text mb-6"
                >
                    Lakshya Karira
                </motion.h1>

                {/* Typing Effect Title */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="text-2xl md:text-3xl text-cyber-green mb-4 h-12 font-mono"
                >
                    <span className="text-cyber-magenta">&gt;</span> {displayedText}
                    <span className="typing-cursor"></span>
                </motion.div>

                {/* Tagline */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 0.8 }}
                    className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto"
                >
                    Turning ideas into intelligent solutions through code and innovation
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5, duration: 0.8 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                    <button
                        onClick={scrollToProjects}
                        className="px-8 py-3 bg-cyber-purple/20 border border-cyber-purple text-cyber-purple rounded-lg font-medium hover:bg-cyber-purple hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-cyber-purple/30 min-w-[180px]"
                    >
                        View Projects
                    </button>
                    <button
                        onClick={scrollToContact}
                        className="px-8 py-3 bg-cyber-cyan/20 border border-cyber-cyan text-cyber-cyan rounded-lg font-medium hover:bg-cyber-cyan hover:text-cyber-black transition-all duration-300 hover:shadow-lg hover:shadow-cyber-cyan/30 min-w-[180px]"
                    >
                        Contact Me
                    </button>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2, duration: 1, repeat: Infinity, repeatType: 'reverse' }}
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                >
                    <svg
                        className="w-6 h-6 text-cyber-cyan"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 14l-7 7m0 0l-7-7m7 7V3"
                        />
                    </svg>
                </motion.div>
            </div>
        </section>
    );
};
