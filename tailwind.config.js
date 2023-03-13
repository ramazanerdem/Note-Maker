/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "red": "#ab0707",
        "orange": "#b34700",
        "green": "#008000",
        "pink": "#b30086",
        "blue": "#0047b3"
      }
    },

  },
  plugins: [],
}