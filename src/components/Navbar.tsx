import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const Navbar = () => {
    const [activeSection, setActiveSection] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    const navItems = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'skills', label: 'Skills' },
        { id: 'projects', label: 'Projects' },
        { id: 'achievements', label: 'Achievements' },
        { id: 'contact', label: 'Contact' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            // Update active section based on scroll position
            const sections = navItems.map(item => document.getElementById(item.id));
            const scrollPosition = window.scrollY + 100;

            sections.forEach((section, index) => {
                if (section) {
                    const top = section.offsetTop;
                    const bottom = top + section.offsetHeight;
                    if (scrollPosition >= top && scrollPosition < bottom) {
                        setActiveSection(navItems[index].id);
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled
                ? 'bg-cyber-dark/80 backdrop-blur-md border-b border-cyber-cyan/20'
                : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <motion.div
                        className="text-2xl font-bold text-cyber-cyan glow-text cursor-pointer"
                        whileHover={{ scale: 1.05 }}
                        onClick={() => scrollToSection('home')}
                    >
                        {'<LK />'}
                    </motion.div>

                    {/* Navigation Links */}
                    <div className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className={`relative px-3 py-2 text-sm font-medium transition-colors ${activeSection === item.id
                                    ? 'text-cyber-cyan'
                                    : 'text-gray-300 hover:text-cyber-cyan'
                                    }`}
                            >
                                {item.label}
                                {activeSection === item.id && (
                                    <motion.div
                                        layoutId="activeSection"
                                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyber-cyan"
                                        initial={false}
                                        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                                    />
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button className="text-cyber-cyan p-2">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </motion.nav>
    );
};
