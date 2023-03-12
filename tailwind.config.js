/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "red": "#d12a2a",
        "orange": "#d17d2a",
        "green": "#38d12a",
        "pink": "#d12ab2",
        "blue": "#2a75d1"
      }
    },

  },
  plugins: [],
}