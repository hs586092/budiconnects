/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Facebook's exact color scheme but with orange instead of blue
        'fb-blue': '#1877f2', // Original Facebook blue
        'fb-orange': '#ff6b35', // Our orange replacement
        'fb-green': '#42b72a',
        'fb-gray': {
          50: '#f0f2f5',
          100: '#e4e6eb',
          200: '#d8dadf',
          300: '#ccd0d5',
          400: '#bcc0c4',
          500: '#a8abaf',
          600: '#90949c',
          700: '#65676b',
          800: '#4a4b4d',
          900: '#1c1e21',
        },
        'fb-hover': '#f2f3f5',
        'fb-border': '#dddfe2',
        'fb-text': '#050505',
        'fb-text-secondary': '#65676b',
        'fb-link': '#ff6b35',
        'fb-link-hover': '#e55a2b',
      },
      fontFamily: {
        'fb': ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      },
      fontSize: {
        'fb-xs': ['12px', { lineHeight: '16px' }],
        'fb-sm': ['13px', { lineHeight: '16px' }],
        'fb-base': ['15px', { lineHeight: '20px' }],
        'fb-lg': ['17px', { lineHeight: '22px' }],
        'fb-xl': ['20px', { lineHeight: '24px' }],
        'fb-2xl': ['24px', { lineHeight: '28px' }],
        'fb-3xl': ['28px', { lineHeight: '32px' }],
        'fb-4xl': ['32px', { lineHeight: '36px' }],
      },
      spacing: {
        'fb-1': '4px',
        'fb-2': '8px',
        'fb-3': '12px',
        'fb-4': '16px',
        'fb-5': '20px',
        'fb-6': '24px',
        'fb-7': '28px',
        'fb-8': '32px',
        'fb-10': '40px',
        'fb-12': '48px',
        'fb-16': '64px',
        'fb-20': '80px',
      },
      borderRadius: {
        'fb': '8px',
        'fb-lg': '12px',
        'fb-xl': '16px',
      },
      boxShadow: {
        'fb': '0 2px 4px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.1)',
        'fb-lg': '0 4px 8px rgba(0, 0, 0, 0.12), 0 16px 32px rgba(0, 0, 0, 0.12)',
      }
    },
  },
  plugins: [],
}
