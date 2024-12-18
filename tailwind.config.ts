import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        backgroundImage : {
          'Ellipse-1-texture': "url('/PNG/Ellipse 342@2x.png')",
          'Ellipse-2-texture': "url('/PNG/Ellipse 343@2x.png')",
        }
      },
    },
  },
  plugins: [],
} satisfies Config;
