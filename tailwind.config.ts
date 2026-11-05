import type { Config } from "tailwindcss";
import forms from "@tailwindcss/forms";

const config: Config = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    container: { center: true, padding: "1.25rem", screens: { "2xl": "1280px" } },
    extend: {
      colors: {
        forest: "#173D2B",
        "forest-deep": "#0D281D",
        ivory: "#F8F5ED",
        cream: "#F0EBDD",
        terracotta: "#B66B45",
        charcoal: "#252820",
        gold: "#B69A61",
      },
      fontFamily: {
        display: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-jakarta)", "Arial", "sans-serif"],
      },
      boxShadow: { soft: "0 18px 50px -24px rgba(37,40,32,.24)" },
      letterSpacing: { label: ".16em" },
    },
  },
  plugins: [forms],
};

export default config;
