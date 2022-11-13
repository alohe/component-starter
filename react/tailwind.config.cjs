/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        "auto-fit": "repeat(auto-fit, minmax(300px, 1fr))",
      },
    },
    colors: {
      light: {
        100: "#e9e9e9",
        200: "#f5f5f5",
        300: "#6e6e6e",
      },
    },
  },
  plugins: [],
};
