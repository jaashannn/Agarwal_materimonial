/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fff0f3',
          100: '#ffe0e9',
          200: '#ffc2d8',
          300: '#ffa3c0',
          400: '#ff749a',
          500: '#ff4171',
          600: '#ff1f56',
          700: '#eb0940',
          800: '#c70736',
          900: '#a1062e',
          950: '#6e0020',
        },
        secondary: {
          50: '#f4f1ff',
          100: '#ece6ff',
          200: '#dcd2ff',
          300: '#c6b2ff',
          400: '#ac89ff',
          500: '#985bff',
          600: '#8a38ff',
          700: '#7b27f3',
          800: '#6621d1',
          900: '#551ca8',
          950: '#340f71',
        },
        accent: {
          50: '#fff5f1',
          100: '#ffeae0',
          200: '#ffd3be',
          300: '#ffb38b',
          400: '#ff8e58',
          500: '#ff7133',
          600: '#f44d13',
          700: '#cc3909',
          800: '#a12e0d',
          900: '#842a0e',
          950: '#471206',
        },
        rose: {
          gold: '#B76E79',
          light: '#E9ACB5',
        },
        peach: '#FFDAB9',
        ivory: '#FFFFF0',
        champagne: '#F7E7CE',
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        poppins: ['Poppins', 'sans-serif'],
        quicksand: ['Quicksand', 'sans-serif'],
      },
      boxShadow: {
        'glow': '0 0 15px rgba(255, 182, 193, 0.7)',
        'glow-lg': '0 0 25px rgba(255, 182, 193, 0.7)',
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-romantic': 'linear-gradient(to right, #ffc0cb, #e6e6fa)',
        'gradient-gold': 'linear-gradient(to right, #B76E79, #F7E7CE)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}