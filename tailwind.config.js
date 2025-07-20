/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          500: '#a782f1',
          600: '#9c6bf2',
          700: '#8b5cf6'
        },
        accent: {
          300: '#a3d9f0',
          400: '#81bbdd',
          500: '#6ba7ca',
          600: '#5593b7',
          700: '#3f7fa4'
        }
      },
      fontFamily: {
        'sans': ['Open Sans', 'sans-serif']
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
