import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f6ff',
          100: '#dceaff',
          200: '#bedaff',
          300: '#95BDFF',
          400: '#7aade0',
          500: '#95BDFF',
          600: '#6b9dff',
          700: '#4a7df5',
          800: '#3460e0',
          900: '#253a7d',
        },
        warm: {
          50: '#fdfcfb',
          100: '#f9f6f2',
          200: '#f2ece3',
          300: '#e8dfd0',
          400: '#d4c5ab',
          500: '#bfa886',
        },
      },
      fontFamily: {
        sans: ['var(--font-lexend)', 'system-ui', 'sans-serif'],
        display: ['var(--font-lexend)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
