import { motion } from 'framer-motion';

interface SoundToggleProps {
    enabled: boolean;
    onToggle: () => void;
}

export const SoundToggle: React.FC<SoundToggleProps> = ({ enabled, onToggle }) => {
    return (
        <motion.button
            onClick={onToggle}
            className="fixed bottom-8 right-8 z-50 bg-cyber-dark/80 backdrop-blur-sm border border-cyber-cyan/50 rounded-full p-4 hover:bg-cyber-cyan/20 transition-all duration-300 group"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
        >
            {enabled ? (
                <svg
                    className="w-6 h-6 text-cyber-cyan group-hover:text-cyber-magenta transition-colors"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                    />
                </svg>
            ) : (
                <svg
                    className="w-6 h-6 text-cyber-cyan/50 group-hover:text-cyber-magenta transition-colors"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"
                    />
                </svg>
            )}
        </motion.button>
    );
};
