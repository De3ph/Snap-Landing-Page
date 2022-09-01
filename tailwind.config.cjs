/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/App.jsx"],
  theme: {
    extend: {
      colors:{
        "almost-white":"hsl(0, 0%, 98%)",
        "medium-gray":"hsl(0, 0%, 41%)",
        "almost-black":"hsl(0, 0%, 8%)"
      },
      fontFamily:{
        "epilogue":"Righteous, cursive"
      }
    },
  },
  plugins: [],
}
