/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'cover': "url('src/images/cover)",
      },
      height:{
        'h68':'68%',
      }
     
    },
  },
  plugins: [],
}