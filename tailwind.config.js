const { color } = require("framer-motion");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1DA1F2",
        secondary: "#14171A",
        accentuation: "#FF5733",
        background: "#F5F8FA",
        textPrimary: "#0F1419",
        textSecondary: "#536471",
      },
    },
  },
  plugins: [],
};
