import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "var(--paper)",
        "paper-back": "var(--paper-back)",
        ink: "var(--ink)",
        "ink-soft": "var(--ink-soft)",
        rule: "var(--rule)",
        margin: "var(--margin)",
      },
      fontFamily: {
        hand: ["var(--font-hand)", "cursive"],
        type: ["var(--font-type)", "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
