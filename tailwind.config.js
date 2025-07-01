/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'gray': {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
        },
        'blue': {
          700: '#1642FC',
        },
        'orange': {
          700: '#FB4505',
        },
        'red': {
          700: '#D41F1F',
        },
        'green': {
          700: '#41C641',
        },
      },
      boxShadow: {
        '3xl': '0px 4px 16px 0px rgba(51,65,85,0.15)',
      }
    }, 
  },
  plugins: [],
}

