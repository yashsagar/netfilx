/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        netflix: [
          "'Netflix Sans'",
          "'Helvetica Neue'",
          "'Segoe UI'",
          "Roboto",
          "Ubuntu",
          "'sans-serif'",
        ],
      },
      colors: {
        accent: {
          DEFAULT: "#e50914", //rgb(229,9,20)
          hover: "#c11119", //rgb(193,17,25)
          avtive: "#99161d", //rgb(153,22,29)
          dropDown: "#52525e", //rgb(82, 82, 94)
        },
      },
      backgroundImage: {
        "info-bg-gradient":
          "linear-gradient(149deg, #192247 0%, #210e17 99.08%)",
      },
    },
    screens: {
      xs: "600px", // => @media (min-width: 400px) { ... }
      sm: "800px",
      // md: "768px",
      md: "900px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};
