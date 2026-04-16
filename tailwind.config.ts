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
        background: 'var(--bg-primary)',
        surface: 'var(--bg-card)',
        secondaryBackground: 'var(--bg-secondary)',
        primary: 'var(--text-primary)',
        secondary: 'var(--text-secondary)',
        onDark: 'var(--text-on-dark)',
        accent: 'var(--accent)',
        accentHover: 'var(--accent-hover)',
        divider: 'var(--border)',
        dividerDark: 'var(--border-dark)',
      },
      fontFamily: {
        sans: ['var(--font-body)', 'sans-serif'],
        display: ['var(--font-display)', 'serif'],
        headings: ['var(--font-headings)', 'sans-serif'],
        accent: ['var(--font-display)', 'serif'],
      },
    },
  },
  plugins: [],
};

export default config;
