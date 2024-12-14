import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{html,js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{html,js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{html,js,ts,jsx,tsx,mdx}",
    "./src/styles/**/*.{css,sass,scss}",
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
          light: "#F2F2F2",
        },
        background: {
          light: "#F2F2F2",
          dark: "#333333",
          lightSecondary: "#F5DEB3",
          lighter: "#F8F8F8",
          red: "#FF4500",
        },
        gradient: {
          from: "#FF4500",
          to: "#FFD700",
        },
        border:{
          dark: "#333333",
          light: "#F2F2F2",
          lightSecondary: "#F5DEB3",
        }
      },
    },
  },
  plugins: [],
} satisfies Config;
