/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        veryDarkDesaturatedBlue: "hsl(238, 29%, 16%)",
        softRed: "hsl(14, 88%, 65%)",
        veryDarkGrayishBlue: "hsl(237, 12%, 33%)",
        darkGrayishBlue: "hsl(240, 6%, 50%)",
        lightGrayishBlue: "hsl(240, 5%, 91%)",
      },
    },
  },
  plugins: [],
};
