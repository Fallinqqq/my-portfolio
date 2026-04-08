/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ['selector', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        ink: 'var(--color-ink)',
        muted: 'var(--color-muted)',
        soft: 'var(--color-soft)',
        surface: 'var(--color-surface)',
        card: 'var(--color-card)',
        accent: 'var(--color-accent)',
      },
      fontFamily: {
        'sans': ['Montserrat', '-apple-system', 'sans-serif'],
        'serif': ['Playfair Display', 'Georgia', 'serif'],
      },
      letterSpacing: {
        'tighter': '-0.03em',
        'tight': '-0.02em',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
