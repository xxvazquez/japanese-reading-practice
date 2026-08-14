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
        // Deliberately closer to `ink` than to a highlighter — these read as a hint
        // of tint on close inspection, not a wash of color across the page.
        pos: {
          particle: "#8A6A3D",
          verb: "#52708C",
          noun: "#8C5B68",
          adjective: "#4E7A5C",
          adverb: "#6E5E8C",
          other: "#6B6459",
        },
      },
      fontFamily: {
        // Japanese story text: a proper serif (mincho) book face, falling back to
        // the OS's own mincho before generic serif so text never looks foreign
        // while the webfont loads.
        jp: [
          '"Noto Serif JP"',
          '"Hiragino Mincho ProN"',
          '"Yu Mincho"',
          "serif",
        ],
        // Furigana + any Japanese that shows up in UI chrome: a gothic reading face,
        // matched to each OS's native UI gothic so it never looks like tofu/fallback.
        jpSans: [
          '"Noto Sans JP"',
          '"Hiragino Kaku Gothic ProN"',
          '"Yu Gothic"',
          "sans-serif",
        ],
        ui: [
          '"Inter"',
          '"Noto Sans JP"',
          "-apple-system",
          "BlinkMacSystemFont",
          "sans-serif",
        ],
        serif: ['"Newsreader"', "serif"],
      },
      boxShadow: {
        soft: "0 2px 20px -6px rgba(59, 55, 47, 0.10)",
        card: "0 1px 2px rgba(59, 55, 47, 0.05), 0 6px 16px -10px rgba(59, 55, 47, 0.08)",
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
