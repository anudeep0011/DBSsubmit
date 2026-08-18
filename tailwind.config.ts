import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#F5F5F9', // existing grey-light
          100: '#E4E4EE', // existing grey-mid
          200: '#C9C9DD', // light border/divider tint
          300: '#9E9EC0', // muted text on light bg, disabled states
          400: '#6D6DA0', // secondary icons, subtle accents
          500: '#454585', // mid-tone, hover states on light bg
          600: '#27276E', // base navy (primary)
          700: '#1F1F58', // hover state for primary buttons
          800: '#17173F', // deep section backgrounds
          900: '#101029', // darkest, footer/near-black sections
        },
        orange: {
          50: '#FCE3CC', // existing peach, soft badge bg
          100: '#FAD2AD', // soft badge backgrounds
          200: '#F5B87F', // lighter accent for illustrations
          300: '#EF9E57', // secondary CTA hover
          400: '#E6772C', // base orange (accent)
          500: '#CC661F', // hover state for orange buttons
          600: '#A8541A', // pressed/active state
        },
        blend: {
          warm: '#8A5F52', // navy/orange midpoint, muted
          cool: '#4A4470', // navy-leaning blend
        },
      },
      fontFamily: {
        sans: [
          'var(--font-inter)',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
      fontSize: {
        'display-lg': ['3.5rem',  { lineHeight: '1.1',  letterSpacing: '-0.02em',  fontWeight: '600' }],
        'display-md': ['2.5rem',  { lineHeight: '1.15', letterSpacing: '-0.015em', fontWeight: '600' }],
        'display-sm': ['1.75rem', { lineHeight: '1.2',  letterSpacing: '-0.01em', fontWeight: '600' }],
        'body-lg':    ['1.125rem',{ lineHeight: '1.65', fontWeight: '400' }],
        'body-md':    ['1rem',    { lineHeight: '1.65', fontWeight: '400' }],
        'body-sm':    ['0.875rem',{ lineHeight: '1.5',  fontWeight: '400' }],
        'label-sm':   ['0.8125rem',{ lineHeight: '1.4', letterSpacing: '0.01em', fontWeight: '500' }],
      },
      boxShadow: {
        'card': '0 10px 30px -10px rgba(39,39,110,0.08)',
        'card-hover': '0 20px 40px -12px rgba(39,39,110,0.14)',
      },
      borderRadius: {
        'xl2': '1.25rem',
      },
      maxWidth: {
        'prose-wide': '48rem',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
      },
    },
  },
  plugins: [],
};

export default config;
