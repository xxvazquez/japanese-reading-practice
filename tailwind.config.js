/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Warm paper for the page and the reading panel; cooler "mist" tones
        // for the library/sidebar chrome around it — the story stays the one
        // warm, inviting surface on the page.
        paper: {
          DEFAULT: "#FAF8F4",
          surface: "#F8FBFB",
          soft: "#EDF2F2",
          muted: "#E1E8E8",
        },
        ink: {
          DEFAULT: "#2B3E4A",
          soft: "#52697A",
          faint: "#8FA0A8",
        },
        accent: {
          navy: "#2C4356",
          slate: "#5C7A94",
          teal: "#5E8C8A",
          mist: "#C7D4D6",
        },
        // A sea-glass gradient (navy → slate → teal → seafoam → lavender) so each
        // part of speech stays distinguishable without reaching for a warm hue.
        pos: {
          particle: "#33495A",
          verb: "#4C6F8C",
          noun: "#4C807E",
          adjective: "#5B8567",
          adverb: "#746F8C",
          other: "#8B8A80",
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
        // One interface typeface, not a stack of trendy web fonts — Noto Sans JP
        // handles both the Japanese and Latin UI text so the whole app reads as
        // one deliberate system instead of an assembled template.
        ui: [
          '"Noto Sans JP"',
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          "sans-serif",
        ],
        // English translations get a quiet literary serif — no extra webfont
        // request, just a well-chosen system stack.
        serif: [
          "Georgia",
          '"Iowan Old Style"',
          '"Palatino Linotype"',
          "Palatino",
          "serif",
        ],
      },
      boxShadow: {
        soft: "0 2px 20px -6px rgba(43, 62, 74, 0.10)",
        card: "0 1px 2px rgba(43, 62, 74, 0.05), 0 6px 16px -10px rgba(43, 62, 74, 0.08)",
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
