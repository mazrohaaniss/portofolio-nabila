/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FAF8F3',
          100: '#FDFBF7',
          200: '#F7F4EE',
          300: '#EFECE3',
          400: '#E8E2D5',
        },
        taupe: {
          DEFAULT: '#8C6D46',
          dark: '#725736',
          light: '#A6875E',
          muted: '#8C8275',
        },
        charcoal: {
          DEFAULT: '#2C2A29',
          light: '#4A4643',
          muted: '#5A554E',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(44, 42, 41, 0.05)',
        'elevated': '0 10px 30px -4px rgba(44, 42, 41, 0.08)',
      }
    },
  },
  plugins: [],
}
