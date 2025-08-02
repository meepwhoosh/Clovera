/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cocoa': '#39190F',
        'dusty-rose': '#E5CBCC',
        'soft-lime': '#E1E2C3',
        'soft-blue': '#D3E0DF',
        'light-stone': '#EFEDE8',
        'terra-cotta': '#DB9E83',
      },
      fontFamily: {
        'butler': ['Butler', 'serif'],
        'outfit': ['Outfit', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}