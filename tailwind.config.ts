import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './data/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        primary: 'var(--text-primary)',
        secondary: 'var(--text-secondary)',
        divider: 'var(--border)',
      },
      fontFamily: {
        sans: ['var(--font-archivo)', 'sans-serif'],
        display: ['var(--font-archivo-black)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
