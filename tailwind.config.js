/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      lato: ["Lato", "sans-serif"],
      notoSerif: ["Noto Serif KR", "serif"],
    },
    extend: {},
  },
  plugins: [],
};
