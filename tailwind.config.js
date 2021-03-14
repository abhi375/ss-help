const colors = require("tailwindcss/colors")

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    extend: {
      colors: {
        accent: "#2952E8",
        black: "#000",
        header: "#f9f9fa",
        amber: colors.amber,
        rose: colors.rose,
        cyan: colors.cyan,
        leaf: "#146A5B",
      },
      boxShadow: {
        "card": "0 4px 8px 0 rgb(0 0 0/4%),0 8px 16px 0 rgb(0 0 0/2%),0 0 0 1px rgb(0 0 0/4%)",
        "soft": "0 4px 8px 0 rgb(0 0 0/4%),0 8px 16px 0 rgb(0 0 0/2%)",
        "searchbar":
          '0 4px 8px 0 rgb(0 0 0/4%),0 8px 16px 0 rgb(0 0 0/2%),0 0 0 1px rgb(0 0 0/4%)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
