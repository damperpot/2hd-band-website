import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./data/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#090909",
        charcoal: "#161616",
        chalk: "#FFFFFF",
        fog: "#C8C8C8",
        rose: "#D46874"
      },
      fontFamily: {
        heading: ["var(--font-heading)", "Impact", "Arial Narrow", "sans-serif"],
        body: ["var(--font-body)", "Inter", "system-ui", "sans-serif"]
      },
      boxShadow: {
        glow: "0 30px 100px rgba(212, 104, 116, 0.2)"
      }
    }
  },
  plugins: []
};

export default config;
