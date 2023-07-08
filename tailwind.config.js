/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        'lg': { max: "1300px" },
        'xl': { max: "1000px" },
        'l':{max: '700px'},
        "xl-between": { max: "1279px", min: "1024px" },
      },
    },
  },
  plugins: [],
};
