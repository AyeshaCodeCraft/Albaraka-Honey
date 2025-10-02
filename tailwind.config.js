
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],   // default/global font
        arabic: ["TintaArabic", "serif"],  // for Arabic branding
      },
    },
  },
  plugins: [],
};
