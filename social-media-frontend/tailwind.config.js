module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layout/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#f3f5f7",
      },
      colors: {
        primary: "#1b2233",
        secondary: "rgb(146 155 174)",
        brand: "#03a9f4",
      },
    },
  },
  plugins: [],
};
