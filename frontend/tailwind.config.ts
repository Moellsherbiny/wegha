import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        mint: "#A1E3D8",
        darkBlue: "#003B5C",
        lightBlue: "#005377",
        darkGreen: "#007761",
        lightGreen: "#008F7A",
      },
      fontFamily: {
        cairo: ['"Cairo"', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
