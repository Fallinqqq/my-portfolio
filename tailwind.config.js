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
          300: '#A0AE91', // laurel green - lighter primary
          400: '#7A9663', // camouflage green - main primary
          500: '#556842', // ebony - medium primary
          600: '#15191E', // eerie black - darker primary
          700: '#0F1216'  // even darker eerie black
        },
        accent: {
          200: '#A0AE91', // laurel green - lightest accent
          300: '#7A9663', // camouflage green - light accent
          400: '#766DA7', // rhythm - purple accent
          500: '#556842', // ebony - medium accent
          600: '#15191E', // eerie black - darker accent
          700: '#0F1216'  // darkest accent
        },
        neutral: {
          50: '#A0AE91',  // laurel green for light text
          100: '#95A386', // slightly darker laurel
          200: '#7A9663', // camouflage for cards
          300: '#556842', // ebony for medium text
          400: '#15191E', // eerie black for dark elements
          500: '#0F1216'  // darkest background
        },
        background: {
          primary: '#15191E', // eerie black for main background
          secondary: '#0F1216' // darker for sections
        },
        text: {
          primary: '#A0AE91', // laurel green for main text
          secondary: '#95A386', // slightly darker laurel
          accent: '#766DA7' // rhythm purple for highlights
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
