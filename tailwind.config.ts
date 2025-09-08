import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0E0F12',
        fg: '#EDEFF5',
        muted: '#A6AEBD',
        primary: '#5B8CFF',
        accent: '#10B981',
        warning: '#F59E0B',
        border: 'rgba(255, 255, 255, 0.08)',
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        mono: ['var(--font-jetbrains)'],
        display: ['var(--font-space-grotesk)'],
      },
      maxWidth: {
        container: '1200px',
      },
      animation: {
        'fade-in': 'fade-in 200ms ease-out',
        'slide-up': 'slide-up 200ms ease-out',
        'pulse-grid': 'pulse-grid 40s ease-in-out infinite',
        'draw-line': 'draw-line 800ms ease-out forwards',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'pulse-grid': {
          '0%, 100%': { opacity: '0.005' },
          '50%': { opacity: '0.01' },
        },
        'draw-line': {
          '0%': { 'stroke-dashoffset': '1000' },
          '100%': { 'stroke-dashoffset': '0' },
        },
      },
    },
  },
  plugins: [],
}

export default config