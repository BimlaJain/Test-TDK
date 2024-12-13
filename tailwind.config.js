/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "20px",
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1140px",
        },
      },
      colors: {
        blue: "#0046AD",
        grey: "#525252",
      },
      fontSize: {
        customxl: "22px"
      },
      lineHeight: {
        customsm: "136%"
      }
    },
  },
  plugins: [],
}