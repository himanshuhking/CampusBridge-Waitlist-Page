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
          50: '#fdf6ee',
          100: '#faead3',
          200: '#f4d2a5',
          300: '#ecb46d',
          400: '#E95522',
          500: '#E95522',
          600: '#d14a1c',
          700: '#b83e14',
          800: '#963512',
          900: '#7a2d10',
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
        sans: ['var(--font-manrope)', 'system-ui', 'sans-serif'],
        display: ['var(--font-manrope)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
