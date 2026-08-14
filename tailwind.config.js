/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: "#FAF7F2",
          soft: "#F4EFE7",
          muted: "#EEE7DA",
        },
        ink: {
          DEFAULT: "#3B372F",
          soft: "#655F54",
          faint: "#9C9284",
        },
        accent: {
          sakura: "#C9A0A6",
          matcha: "#8FAE9B",
          sora: "#8FA8C4",
          sumi: "#7A7368",
          kuchiba: "#B98F63",
        },
        pos: {
          particle: "#A9762F",
          verb: "#5B7FA6",
          noun: "#AD6B7D",
          adjective: "#5E8E6E",
          adverb: "#8574A8",
          other: "#9C9284",
        },
      },
      fontFamily: {
        jp: ['"Noto Serif JP"', "serif"],
        ui: ['"Inter"', "sans-serif"],
        serif: ['"Newsreader"', "serif"],
      },
      boxShadow: {
        soft: "0 2px 20px -6px rgba(59, 55, 47, 0.12)",
        card: "0 1px 3px rgba(59, 55, 47, 0.06), 0 8px 24px -12px rgba(59, 55, 47, 0.10)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: 0, transform: "translateY(4px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.4s ease-out both",
      },
    },
  },
  plugins: [],
};
