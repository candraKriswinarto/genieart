/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        opensans: ["Open Sans", "sans-serif"],
      },
      colors: {
        primary: "#8C3ADD",
        "gray-500": "#1A1A1A"
      }
    },
  },
  plugins: [],
}
