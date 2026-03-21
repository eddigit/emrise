/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: { DEFAULT: '#FAF8F5', dark: '#F5F0E8' },
        beige: { DEFAULT: '#E8E0D5', dark: '#D4C8B8' },
        taupe: '#A69880',
        brown: { DEFAULT: '#6B5B4F', dark: '#4A3F35' },
        gold: { DEFAULT: '#C9A961', light: '#E5D5A8' },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
