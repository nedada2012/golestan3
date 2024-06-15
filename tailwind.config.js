/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.html"],
  darkMode: "class",
  theme: {
    extend: {},
    screens: {
      mobile: "420px",
      tablet: "756px",
      desktop: "1000px",
    },
    fontFamily: {
      iran: ['"iran"'],
    },
  },
  plugins: [],
};

