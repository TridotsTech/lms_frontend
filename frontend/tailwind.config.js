/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brown: {
          50: '#FDF8F4',
          100: '#F5E6D8',
          200: '#E8CDB5',
          300: '#D4A574',
          400: '#B8834A',
          500: '#8B5E34',
          600: '#6B4226',
          700: '#5B2C0E',
          800: '#4A2208',
          900: '#3B1F0B',
        },
        cream: {
          50: '#FFFDF9',
          100: '#FFF8F0',
          200: '#FFF1E0',
        },
        gold: {
          400: '#FFD54F',
          500: '#FFC107',
          600: '#FFA000',
        },
        college: {
          red: '#D32F2F', // Remo Red
          gold: '#FBC02D',
          cream: '#FFFDE7',
          dark: '#1A1A1A',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
