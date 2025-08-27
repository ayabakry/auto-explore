/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      colors: {
        primary: {
          800: '#020A1A',
        },
        secondary: {
          400: '#F6A62E',
        },
      },
      fontFamily: {
        sans: ['"IBM Plex Sans Arabic"', 'sans-serif'],
      },
      fontSize: {
        '6xl': '64px',
        '5xl': '48px',
        '4xl': '36px',
        '3xl': '32px',
        '2xl': '24px',
        'xl': '20px',
        'lg': '18px',
        'base': '16px',
        'sm': '14px',
        'xs': '12px',
      },
    },
  },
  plugins: [],
};
