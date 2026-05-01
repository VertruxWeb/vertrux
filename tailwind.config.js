/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary - Deep Forest Green
        primary: {
          DEFAULT: '#154212',
          container: '#2d5a27',
          fixed: '#bcf0ae',
          'on': '#ffffff',
          'inverse': '#a1d494',
          deep: '#0E2C0D',
        },
        // Accent - Brass / Bronze (B2B high-contrast CTA)
        accent: {
          DEFAULT: '#B7892A',
          hover: '#976F1F',
          soft: '#F4E9C9',
          contrast: '#FFFFFF',
        },
        // Secondary - Slate Gray
        secondary: {
          DEFAULT: '#545f72',
          container: '#d5e0f7',
          'on': '#ffffff',
        },
        // Tertiary - Dark Teal
        tertiary: {
          DEFAULT: '#003f4d',
          container: '#00586b',
          fixed: '#b2ebff',
        },
        // Surface hierarchy — repointed to "paper" (Off-white) palette
        surface: {
          DEFAULT: '#FAF8F3',
          dim: '#E9E2D3',
          low: '#F2EEE6',
          high: '#FFFFFF',
          ink: '#14160F',
          container: {
            lowest: '#ffffff',
            low: '#F2EEE6',
            DEFAULT: '#EDE7D9',
            high: '#E9E2D3',
            highest: '#E1D8C4',
          },
        },
        // Text colors
        'on-background': '#14160F',
        'on-surface': '#14160F',
        'on-surface-variant': '#3F4339',
        'on-surface-muted': '#6E715F',
        // Utility
        outline: '#72796e',
        'outline-variant': '#c2c9bb',
        error: '#ba1a1a',
        // Inverse
        'inverse-surface': '#14160F',
        'inverse-on-surface': '#F2EEE6',
        // Status
        status: {
          ok: '#2E7D32',
          warn: '#B7892A',
          error: '#B91C1C',
        },
      },
      fontFamily: {
        sans: ['var(--font-manrope)', 'Manrope', 'sans-serif'],
        serif: ['var(--font-newsreader)', 'Newsreader', 'Georgia', 'serif'],
        display: ['var(--font-newsreader)', 'Newsreader', 'Georgia', 'serif'],
      },
      borderRadius: {
        DEFAULT: '0.125rem',
        sm: '0.125rem',
        md: '0.25rem',
        lg: '0.25rem',
        xl: '0.5rem',
        full: '0.75rem',
      },
      letterSpacing: {
        tightest: '-0.04em',
        tighter: '-0.02em',
        tight: '-0.01em',
        widest: '0.3em',
        wider: '0.1em',
        label: '0.05em',
      },
      lineHeight: {
        headline: '0.95',
        tight: '1.05',
        snug: '1.15',
      },
      maxWidth: {
        container: '1280px',
        prose: '68ch',
      },
      boxShadow: {
        soft: '0 8px 30px rgba(20,22,15,0.08)',
        card: '0 2px 24px rgba(20,22,15,0.04)',
      },
      transitionTimingFunction: {
        industrial: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
}
