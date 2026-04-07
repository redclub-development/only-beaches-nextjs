import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "marquee-explore": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "marquee-explore": "marquee-explore 1000s linear infinite",
      },
      colors: {
        brand: {
          blue: "#0091DA",
          cyan: "#00AEEF",
          yellow: "#FFE14A",
          pink: "#FF56A5",
          coral: "#FF6B4A",
          tealFrame: "#43C1B6",
          footer: "#080C16",
          subscribe: "#00A3E1",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
