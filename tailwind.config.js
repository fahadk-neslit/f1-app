/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#e35205",
        darkOrange: "#d64500",
        secondary: "#84bd00",
        textBlack: "#303133",
        textGrey: "#65665c",
      },
    },
  },
  plugins: [],
};
