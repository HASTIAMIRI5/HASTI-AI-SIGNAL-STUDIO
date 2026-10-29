import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './lib/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef9ff',
          100: '#d8f3ff',
          200: '#b9e9ff',
          300: '#87d6ff',
          400: '#4db7ff',
          500: '#1b92ff',
          600: '#0f6fe8',
          700: '#1156bf',
          800: '#17469a',
          900: '#183f7d',
        },
        midnight: '#07111f',
        slate: {
          950: '#020817',
        },
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(59,130,246,0.15), 0 25px 80px rgba(17, 94, 89, 0.18)',
      },
      backgroundImage: {
        'hero-grid': 'radial-gradient(circle at 1px 1px, rgba(148,163,184,0.2) 1px, transparent 0)',
      },
    },
  },
  plugins: [],
};

export default config;
