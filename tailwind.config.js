/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        surface: "#09090B",
        primary: "#FAFAFA",
        accent: "#A855F7",
        "accent-blue": "#3B82F6",
      },
      fontFamily: {
        heading: ["Syne", "sans-serif"],
        body: ["Manrope", "sans-serif"],
      },
    },
  },
  plugins: [],
};
