import { useEffect, useRef } from 'react';
import { Terminal as XTerm } from '@xterm/xterm';
import { FitAddon } from '@xterm/addon-fit';
import '@xterm/xterm/css/xterm.css';
import { commandHandler, getCommandSuggestions } from '../utils/commandHandler';
import { portfolioData } from '../data/portfolio';
import { motion } from 'framer-motion';

interface TerminalProps {
    soundEnabled: boolean;
}

export const Terminal: React.FC<TerminalProps> = ({ soundEnabled }) => {
    const terminalRef = useRef<HTMLDivElement>(null);
    const xtermRef = useRef<XTerm | null>(null);
    const fitAddonRef = useRef<FitAddon | null>(null);

    useEffect(() => {
        if (!terminalRef.current) return;

        // Initialize xterm
        const term = new XTerm({
            cursorBlink: true,
            cursorStyle: 'block',
            fontFamily: '"JetBrains Mono", "Fira Code", monospace',
            fontSize: 16,
            theme: {
                background: '#0a0e27',
                foreground: '#00fff5',
                cursor: '#00fff5',
                black: '#0a0e27',
                red: '#ff006e',
                green: '#00ff41',
                yellow: '#ffbe0b',
                blue: '#0f3460',
                magenta: '#ff00ff',
                cyan: '#00fff5',
                white: '#ffffff',
                brightBlack: '#16213e',
                brightRed: '#ff006e',
                brightGreen: '#00ff41',
                brightYellow: '#ffbe0b',
                brightBlue: '#0f3460',
                brightMagenta: '#ff00ff',
                brightCyan: '#00fff5',
                brightWhite: '#ffffff',
            },
            allowProposedApi: true,
        });

        const fitAddon = new FitAddon();
        term.loadAddon(fitAddon);
        term.open(terminalRef.current);
        fitAddon.fit();

        xtermRef.current = term;
        fitAddonRef.current = fitAddon;

        // Display welcome message
        term.writeln('\x1b[36m' + portfolioData.asciiArt + '\x1b[0m');
        term.writeln('');
        term.writeln('\x1b[32m' + portfolioData.welcomeMessage + '\x1b[0m');
        term.write('\x1b[36mlakshya@portfolio\x1b[0m:\x1b[35m~\x1b[0m$ ');

        // Handle input
        let currentLine = '';

        term.onData((data) => {
            const code = data.charCodeAt(0);

            // Handle different key inputs
            if (code === 13) {
                // Enter key
                term.writeln('');

                if (currentLine.trim()) {
                    const result = commandHandler(currentLine);

                    if (result.output === 'CLEAR_SCREEN') {
                        term.clear();
                    } else {
                        term.writeln(result.output);
                    }
                }

                currentLine = '';
                term.write('\x1b[36mlakshya@portfolio\x1b[0m:\x1b[35m~\x1b[0m$ ');
            } else if (code === 127) {
                // Backspace
                if (currentLine.length > 0) {
                    currentLine = currentLine.slice(0, -1);
                    term.write('\b \b');
                }
            } else if (code === 9) {
                // Tab - autocomplete
                const suggestions = getCommandSuggestions(currentLine);
                if (suggestions.length === 1) {
                    const completion = suggestions[0].substring(currentLine.length);
                    currentLine += completion;
                    term.write(completion);
                } else if (suggestions.length > 1) {
                    term.writeln('');
                    term.writeln(suggestions.join('  '));
                    term.write('\x1b[36mlakshya@portfolio\x1b[0m:\x1b[35m~\x1b[0m$ ' + currentLine);
                }
            } else if (code >= 32 && code <= 126) {
                // Printable characters
                currentLine += data;
                term.write(data);
            }
        });

        // Handle resize
        const handleResize = () => {
            fitAddon.fit();
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            term.dispose();
        };
    }, [soundEnabled]);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="w-full h-full flex items-center justify-center p-4"
        >
            <div className="w-full max-w-6xl h-full max-h-[90vh] bg-cyber-dark/50 backdrop-blur-sm border border-cyber-cyan/30 rounded-lg shadow-2xl overflow-hidden">
                <div className="bg-cyber-dark border-b border-cyber-cyan/30 px-4 py-2 flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span className="ml-4 text-cyber-cyan text-sm font-mono">
                        lakshya@portfolio: ~
                    </span>
                </div>
                <div
                    ref={terminalRef}
                    className="w-full h-[calc(100%-40px)] p-4"
                    style={{ cursor: 'text' }}
                />
            </div>
        </motion.div>
    );
};
