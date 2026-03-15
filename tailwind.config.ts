import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          red:         '#8B1A2B',
          'red-light': '#c0374a',
          'red-dark':  '#6a1221',
          blue:        '#1D5A7A',
          'blue-light':'#2d8ab8',
        },
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
      screens: { xs: '375px' },
    },
  },
  plugins: [],
}

export default config
