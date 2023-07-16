/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        phone: { max: "500px" },
        lg: { max: "1300px" },
        xl: { max: "1000px" },
        l: { max: "700px" },
        "sm-max": { max: "639px" },
        "md-max": { max: "767px" },
        "lg-max": { max: "1023px" },
        "lgx-max": { max: "1050px" },
        "lg-min":{max:'819px'},
        "xl-max": { max: "1279px" },
        'xxl-min':{min:"1279px"},
        "sm2-max": { max: "716px" },
        "lg-between": { max: "1050px", min: "940px" },
        "xl-between": { max: "1279px", min: "1024px" },
        "laptop-big": { max: "1355px" },
        "laptop-small": { max: "1100px" },
        "phone-big": { max: "750px" },
        "not-phone": { min: "501px" },
      },
    },
  },
  plugins: [],
};
