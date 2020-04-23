const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ["Quicksand", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "black-russian": "#1E2029",
        "storm-grey": "#797B84",
        "carib-green": "#0CCCA7",
        tomato: "#F76548",
        snow: "#FFF4F2",
        solitude: "#F5F5F9",
      },
    },
  },
  variants: {},
  plugins: [],
};
