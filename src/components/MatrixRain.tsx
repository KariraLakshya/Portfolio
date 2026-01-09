import { useEffect, useRef } from 'react';

interface MatrixRainProps {
    isActive: boolean;
}

export const MatrixRain: React.FC<MatrixRainProps> = ({ isActive }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if (!isActive || !canvasRef.current) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Set canvas size
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // Matrix characters
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+-=[]{}|;:,.<>?/~`';
        const charArray = chars.split('');

        const fontSize = 14;
        const columns = canvas.width / fontSize;
        const drops: number[] = [];

        // Initialize drops
        for (let i = 0; i < columns; i++) {
            drops[i] = Math.random() * -100;
        }

        // Draw function
        const draw = () => {
            // Semi-transparent black to create fade effect
            ctx.fillStyle = 'rgba(10, 14, 39, 0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Set text style
            ctx.fillStyle = '#00ff41';
            ctx.font = `${fontSize}px "JetBrains Mono", monospace`;

            // Draw characters
            for (let i = 0; i < drops.length; i++) {
                const char = charArray[Math.floor(Math.random() * charArray.length)];
                const x = i * fontSize;
                const y = drops[i] * fontSize;

                ctx.fillText(char, x, y);

                // Reset drop to top randomly
                if (y > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }

                drops[i]++;
            }
        };

        // Animation loop
        const interval = setInterval(draw, 50);

        // Handle resize
        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', handleResize);

        return () => {
            clearInterval(interval);
            window.removeEventListener('resize', handleResize);
        };
    }, [isActive]);

    if (!isActive) return null;

    return (
        <canvas
            ref={canvasRef}
            id="matrix-canvas"
            className="fixed inset-0 pointer-events-none z-[1]"
            style={{ opacity: 0.15 }}
        />
    );
};
