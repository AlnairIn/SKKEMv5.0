import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Industrial palette: deep navy, slate, forest green accent
        navy: {
          50: "#eef3f9",
          100: "#d6e1ef",
          200: "#aec4de",
          500: "#2b5a8e",
          600: "#1f4670",
          700: "#173759",
          800: "#102a45",
          900: "#0a1c30",
        },
        // Brand sky blue, taken from the K-KEM logo (#28ABE3 = brand-500).
        // 600/700 are darkened so white text on buttons passes WCAG AA contrast.
        brand: {
          50: "#eaf6fc",
          100: "#cfeaf8",
          300: "#85cdee",
          400: "#4fb9e8",
          500: "#28abe3",
          600: "#0e76a8",
          700: "#0a5f88",
        },
        slate: {
          50: "#f6f8fa",
          100: "#eceff3",
          200: "#d9dfe6",
          500: "#64707f",
          700: "#38414d",
          900: "#161b22",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-sora)", "var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(10,28,48,.06), 0 8px 24px rgba(10,28,48,.06)",
      },
    },
  },
  plugins: [],
};

export default config;
