/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blue: {
          800: '#2A5C82',
          900: '#1e4b6d'
        },
        teal: {
          400: '#5CB8B2',
          500: '#4ca8a2',
          600: '#3d8a85'
        },
        red: {
          500: '#FF6B6B'
        }
      },
      animation: {
        fadeIn: 'fadeIn 0.3s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        }
      },
      zIndex: {
        '-10': '-10',
      }
    },
  },
  plugins: [],
};