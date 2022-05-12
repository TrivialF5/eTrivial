const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        dark: "#1C1917"
      },
      fontFamily: {
        pop: ['Poppins', ...defaultTheme.fontFamily.sans]
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite'
      }
    },
  },
  plugins: [],
}
