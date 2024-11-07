/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    fontFamily: {
      'inter': ['inter', 'sans-serif'],
    },
    container: {
      center: true,
      padding: '1rem',
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1202px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {},
  },
  plugins: [],
  darkMode: 'selector',
}

