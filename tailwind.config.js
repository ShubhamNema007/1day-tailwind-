const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        default: [
          'Halis GR',
        ]
      },
      letterSpacing: {
        default: '-0.27px',
      },
      colors: {
        primary: "var(--primary)",
        footer: "var(--footer-bg)",
        headcolor: "var(--head-color)",
      },
      boxShadow:{
        cardshadow: "0px 4px 80px 0px rgba(0, 0, 0, 0.07)",
        
      },
      animation: {
        smoothScroll: 'smoothScroll 0.5s forwards;'
      },
      keyframes: {
        smoothScroll: {
          '0%': { transform: 'translateY(-40px)' },
          '100%': { transform: ' translateY(0px)' },
        },
      },
      backgroundImage: {
        'hero-pattern': "var(--gradient-custom)",
        'font-gradient': "var(--gradient-font)",
      }
    },
  },
}

