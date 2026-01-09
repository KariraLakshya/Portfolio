import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const CustomCursor: React.FC = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isPointer, setIsPointer] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });

            // Check if hovering over clickable element
            const target = e.target as HTMLElement;
            setIsPointer(
                window.getComputedStyle(target).cursor === 'pointer' ||
                target.tagName === 'A' ||
                target.tagName === 'BUTTON'
            );
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <>
            {/* Main cursor */}
            <motion.div
                className="fixed w-4 h-4 border-2 border-cyber-cyan rounded-full pointer-events-none z-[9999] mix-blend-difference"
                animate={{
                    x: position.x - 8,
                    y: position.y - 8,
                    scale: isPointer ? 1.5 : 1,
                }}
                transition={{
                    type: 'spring',
                    stiffness: 500,
                    damping: 28,
                    mass: 0.5,
                }}
            />

            {/* Trailing cursor */}
            <motion.div
                className="fixed w-2 h-2 bg-cyber-cyan rounded-full pointer-events-none z-[9998] opacity-50"
                animate={{
                    x: position.x - 4,
                    y: position.y - 4,
                }}
                transition={{
                    type: 'spring',
                    stiffness: 150,
                    damping: 15,
                    mass: 0.1,
                }}
            />
        </>
    );
};
