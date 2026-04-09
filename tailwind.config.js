/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
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
        // Surface hierarchy
        surface: {
          DEFAULT: '#f8f9ff',
          dim: '#cbdbf5',
          container: {
            lowest: '#ffffff',
            low: '#eff4ff',
            DEFAULT: '#e5eeff',
            high: '#dce9ff',
            highest: '#d3e4fe',
          },
        },
        // Text colors
        'on-background': '#0b1c30',
        'on-surface': '#0b1c30',
        'on-surface-variant': '#42493e',
        // Utility
        outline: '#72796e',
        'outline-variant': '#c2c9bb',
        error: '#ba1a1a',
        // Inverse
        'inverse-surface': '#213145',
        'inverse-on-surface': '#eaf1ff',
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
        display: ['Manrope', 'sans-serif'],
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
      },
    },
  },
  plugins: [],
}
