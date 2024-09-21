/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./pageComponents/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      primary: "#FFFFFF",
      secondary: "#61088E",
      black: "#000000",
      text: {
        main: "#61088E",
        white: "#FFFFFF",
      },
    },
    extend: {
      fontFamily: {
        sbold: ["Sansation-Bold", "sans-serif"],
        sbolditalic: ["Sansation-BoldItalic", "sans-serif"],
        sitalic: ["Sansation-Italic", "sans-serif"],
        sLight: ["Sansation-Light", "sans-serif"],
        sregular: ["Sansation-Regular", "sans-serif"],
      },
    },
  },
  plugins: [],
};
