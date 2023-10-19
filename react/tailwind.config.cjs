/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
          extend: {
            colors: {
              light: {
                50: '#fafafa',
                100: '#F0F0F0',
                200: '#e6e6e6',
                300: '#d9d9d9',
                400: '#cccccc',
                500: '#bfbfbf',
                600: '#a6a6a6',
                700: '#8d8d8d',
                800: '#747474',
              },
              dark: {
                100: '#BFBFBF',
                200: '#A6A6A6',
                300: '#7d7d7d',
                400: '#4A4A4A',
                500: '#212121',
                600: '#3C3C3C',
              },
            },
        },

  plugins: [],
};
