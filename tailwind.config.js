/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        comicFontpara: ["Grape Nuts", "cursive"],
        comicFontHea: ["Playfair Display", "serif"],
      },
    },
  },
  plugins: [],
};
