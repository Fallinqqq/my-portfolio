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
          300: '#C6C2F2', // lavender - lighter primary
          400: '#262628', // obsidian - main primary
          500: '#FFF6EE', // cream - medium primary
          600: '#1A1A1C', // darker obsidian
          700: '#0F0F10'  // darkest obsidian
        },
        accent: {
          200: '#FFF6EE', // cream - lightest accent
          300: '#C6C2F2', // lavender - light accent
          400: '#B86079', // cherry - accent
          500: '#BDDC82', // lime - medium accent
          600: '#262628', // obsidian - darker accent
          700: '#1A1A1C'  // darkest accent
        },
        neutral: {
          50: '#FFF6EE',  // cream for light text
          100: '#C6C2F2', // lavender
          200: '#BDDC82', // lime for highlights
          300: '#B86079', // cherry for medium elements
          400: '#262628', // obsidian for dark elements
          500: '#1A1A1C'  // darkest background
        },
        background: {
          primary: '#262628', // obsidian for main background
          secondary: '#1A1A1C' // darker obsidian for sections
        },
        text: {
          primary: '#262628', // obsidian for main text
          secondary: '#262628', // obsidian for secondary text
          accent: '#262628' // obsidian for highlights
        }
      },
      fontFamily: {
        'sans': ['Nunito', 'sans-serif'],
        'heading': ['Poppins', 'sans-serif'],
        'navbar': ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
