import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

interface BootSequenceProps {
    onComplete: () => void;
}

const bootMessages = [
    'Booting LakshyaOS v1.0...',
    'Loading neural modules...',
    'Initializing AI core...',
    'Connecting to quantum servers...',
    'Establishing secure connection...',
    'Access granted. Welcome, Lakshya Karira.'
];

export const BootSequence: React.FC<BootSequenceProps> = ({ onComplete }) => {
    const [currentMessage, setCurrentMessage] = useState(0);
    const [displayedText, setDisplayedText] = useState('');
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // Typing effect for each message
        if (currentMessage < bootMessages.length) {
            const message = bootMessages[currentMessage];
            let charIndex = 0;

            const typingInterval = setInterval(() => {
                if (charIndex <= message.length) {
                    setDisplayedText(message.substring(0, charIndex));
                    charIndex++;
                } else {
                    clearInterval(typingInterval);

                    // Move to next message after a short delay
                    setTimeout(() => {
                        if (currentMessage < bootMessages.length - 1) {
                            setCurrentMessage(currentMessage + 1);
                            setDisplayedText('');
                        }
                    }, 300);
                }
            }, 50);

            return () => clearInterval(typingInterval);
        }
    }, [currentMessage]);

    useEffect(() => {
        // Progress bar animation
        const progressInterval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(progressInterval);
                    return 100;
                }
                return prev + 2;
            });
        }, 60);

        return () => clearInterval(progressInterval);
    }, []);

    useEffect(() => {
        // Complete boot sequence when done
        if (progress === 100 && currentMessage === bootMessages.length - 1) {
            setTimeout(() => {
                // Glitch effect before transition
                gsap.to('.boot-container', {
                    duration: 0.3,
                    opacity: 0,
                    scale: 1.1,
                    filter: 'blur(5px)',
                    onComplete: onComplete
                });
            }, 1000);
        }
    }, [progress, currentMessage, onComplete]);

    return (
        <motion.div
            className="boot-container fixed inset-0 bg-cyber-black flex flex-col items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            {/* Glitch overlay */}
            <div className="absolute inset-0 bg-cyber-cyan opacity-5 pointer-events-none glitch"></div>

            {/* Boot messages */}
            <div className="text-center space-y-6 px-4">
                {/* Logo/Title */}
                <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    <h1 className="text-5xl md:text-7xl font-bold text-cyber-cyan glow-text font-mono">
                        LakshyaOS
                    </h1>
                    <p className="text-cyber-green text-sm md:text-base mt-2">v1.0.0</p>
                </motion.div>

                {/* Current message with typing effect */}
                <div className="h-8 flex items-center justify-center">
                    <p className="text-cyber-cyan text-lg md:text-xl font-mono">
                        <span className="text-cyber-green">&gt;</span> {displayedText}
                        {displayedText && <span className="typing-cursor"></span>}
                    </p>
                </div>

                {/* Previous messages */}
                <div className="space-y-2 opacity-50 max-h-40 overflow-hidden">
                    {bootMessages.slice(0, currentMessage).map((msg, index) => (
                        <motion.p
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 0.5, x: 0 }}
                            className="text-cyber-cyan text-sm md:text-base font-mono"
                        >
                            <span className="text-cyber-green">&gt;</span> {msg}
                        </motion.p>
                    ))}
                </div>

                {/* Progress bar */}
                <div className="w-full max-w-md mx-auto mt-12">
                    <div className="bg-cyber-dark h-4 rounded-full overflow-hidden border border-cyber-cyan">
                        <motion.div
                            className="h-full bg-gradient-to-r from-cyber-cyan via-cyber-purple to-cyber-magenta"
                            style={{ width: `${progress}%` }}
                            initial={{ width: 0 }}
                            animate={{ width: `${progress}%` }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="h-full w-full bg-cyber-cyan opacity-50 animate-pulse"></div>
                        </motion.div>
                    </div>
                    <p className="text-cyber-cyan text-sm mt-2 text-center font-mono">
                        {progress}%
                    </p>
                </div>

                {/* Loading indicator */}
                <div className="flex items-center justify-center space-x-2 mt-8">
                    <div className="w-2 h-2 bg-cyber-cyan rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-cyber-magenta rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-cyber-purple rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
            </div>

            {/* Scanline effect */}
            <div className="scanline"></div>
        </motion.div>
    );
};
