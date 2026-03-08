import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#050510",
        foreground: "#e0e0e8",
        primary: "#6366f1",
        accent: "#a855f7",
        "neon-blue": "#38bdf8",
        "neon-purple": "#c084fc",
        surface: "#0f0f23",
        "surface-light": "#1a1a3e",
        muted: "#6b7280",
      },
      fontFamily: {
        sans: ["var(--font-noto-sans-jp)", "sans-serif"],
        display: ["var(--font-space-grotesk)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
