/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                cyber: {
                    black: '#0a0e27',
                    dark: '#16213e',
                    blue: '#0f3460',
                    cyan: '#00fff5',
                    magenta: '#ff00ff',
                    green: '#00ff41',
                    purple: '#9d4edd',
                    pink: '#ff006e',
                },
            },
            fontFamily: {
                mono: ['"JetBrains Mono"', '"Fira Code"', 'monospace'],
            },
            animation: {
                'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'glow': 'glow 2s ease-in-out infinite alternate',
                'scanline': 'scanline 8s linear infinite',
                'glitch': 'glitch 0.5s infinite',
            },
            keyframes: {
                glow: {
                    '0%': { textShadow: '0 0 5px #00fff5, 0 0 10px #00fff5' },
                    '100%': { textShadow: '0 0 10px #00fff5, 0 0 20px #00fff5, 0 0 30px #00fff5' },
                },
                scanline: {
                    '0%': { transform: 'translateY(-100%)' },
                    '100%': { transform: 'translateY(100vh)' },
                },
                glitch: {
                    '0%, 100%': { transform: 'translate(0)' },
                    '33%': { transform: 'translate(-2px, 2px)' },
                    '66%': { transform: 'translate(2px, -2px)' },
                },
            },
        },
    },
    plugins: [],
}
