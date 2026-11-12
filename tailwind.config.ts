import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './data/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--primary)',
          dark: 'var(--primary-dark)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
          dark: 'var(--accent-dark)',
        },
        navy: 'var(--navy)',
        surface: {
          DEFAULT: 'var(--bg)',
          cream: 'var(--bg-cream)',
          mint: 'var(--bg-mint)',
          blush: 'var(--bg-blush)',
          sun: 'var(--bg-sun)',
          grey: 'var(--bg-grey)',
        },
        ink: {
          DEFAULT: 'var(--text)',
          muted: 'var(--text-muted)',
        },
        border: 'var(--border)',
        feedback: {
          success: 'var(--success)',
          warning: 'var(--warning)',
          error: 'var(--error)',
          star: 'var(--star)',
        },
      },
      fontFamily: {
        heading: [
          'var(--font-outfit)',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'sans-serif',
        ],
        sans: [
          'var(--font-inter)',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'sans-serif',
        ],
      },
      boxShadow: {
        card: '0 8px 28px rgba(15, 23, 42, 0.07)',
        'card-hover': '0 18px 40px rgba(30, 27, 75, 0.14)',
        soft: '0 2px 14px rgba(15, 23, 42, 0.05)',
      },
      borderRadius: {
        btn: '9999px',
        card: '20px',
        img: '16px',
      },
      maxWidth: {
        container: '1220px',
      },
    },
  },
  plugins: [],
};

export default config;
