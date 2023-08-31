/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        grotesk: "Space Grotesk",
      },

      colors: {
        gradient1: "#6448fe",
        gradient2: "#600594",
        error: "#FF5252",
        lightgrayishviolet: "#DEDDDF",
        darkgrayishviolet: "#8E8593",
        verydarkviolet: "#21092F",
      },
    },
  },
  plugins: [],
};
