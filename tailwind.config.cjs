/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'c0': '#2b0d45',
        'c1': '#D197D1',
      }
    },
  },
  plugins: [],
}