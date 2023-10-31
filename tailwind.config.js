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
      backgroundImage: {
        'hero-pattern': "var(--gradient-custom)",
      }
    },
  },
  plugins: [],
}

