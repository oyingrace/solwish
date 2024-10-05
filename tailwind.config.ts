import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slide: {
          '0%': {transform: 'translateY(0)'},
          '100%': {transform: 'translateY(100)'},
        },
        rotate: {
          '0%': {transform: 'rotate(0deg)'},
          '100%': {transform: 'translateY(100deg)'},
        },
      },
      animation: {
        slide: 'slide 10s ease-out infinite',
        rotate: 'rotate 10s linear infinite',
      }
    },
  },
  plugins: [],
};
export default config;
