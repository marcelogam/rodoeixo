/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fff0f0',
          100: '#ffe1e1',
          500: '#f72f30',
          600: '#ed0809', // requested red
          700: '#cc0607',
          900: '#8c0405',
        },
        dark: {
          DEFAULT: '#111111',
          light: '#222222',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
