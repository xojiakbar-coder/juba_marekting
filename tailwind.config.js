/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'yellow2': '#faaf0a',
        'black2': '#141414',
        'black3': '#1a1a1a',
        'black4': '#828282',
        'white2': '#f4f4f4',
        'gray2': '#333333',
        'gray3': '#bdbdbd',
      },
      fontFamily: {
        unbound: ['Unbounded', 'sans-serif']
      }
    }
  },
  plugins: [],
}