/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      height: {
        '60vh': '60vh',
      },
    },
  },
  plugins: [],
  extend:{
    animation:{
      'fade-in':'fade-in 1s ease-in',
    },
    
  }
}