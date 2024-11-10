import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#171717',
        foreground: '#222',
        force_peach: '#EB5855',
      },

      fontFamily: {
        orbitron: ['var(--font-orbitron)'],
        inconsolata: ['var(--font-inconsolata)'],
      }
    },
  },
  plugins: [],
} satisfies Config;
