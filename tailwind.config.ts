import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2563eb",
          foreground: "#f8fafc"
        },
        secondary: {
          DEFAULT: "#111827",
          foreground: "#e5e7eb"
        }
      }
    }
  },
  plugins: []
};

export default config;
