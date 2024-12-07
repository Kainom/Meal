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
        primary: {
          red: "#FF4500",
          orange: "#FF8C00",
        },
        secondary: {
          yellow: "#FFD700",
          beige: "#F5DEB3",
          brown: "#8B4513",
        },
        accent: {
          green: "#32CD32",
          white: "#FFFFFF",
        },
        text: {
          dark: "#333333",
        },
        background: {
          light: "#F2F2F2",
          dark: "#333333",
          lightSecondary: "#F5DEB3",
        },
        gradient: {
          from: "#FF4500",
          to: "#FFD700",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
