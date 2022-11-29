/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  extend: {
    colors: {
      veryDarkBlue: "hsl(238, 42%, 30%)",
      mediumTeal: "hsl(189, 44%, 61%)",
      darkPurple: "hsl(262, 30%, 46%)",
      pig: "hsl(6, 41%, 76%)",
      linearOne: "hsl(180, 100%, 98%)",
      linearTwo: "hsl(180, 100%, 100%)",
      linearThree: "hsl(186, 100%, 98%)",
      lightBlue: "hsl(199, 38%, 54%)",
      darkBlue: "hsl(227, 29%, 37%)",
    },
    fontFamily: {
      sans: ["M PLUS 1", "sans-serif"],
    },
  },
  plugins: [],
};
