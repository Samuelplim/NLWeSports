/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: true, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        Fundo: "url('/Fundo.png')",
        "nlw-gradient":
          "linear-gradient(89.86deg, #9572FC , #43E7AD , #E1D55D )",
        "game-gradient":
          "linear-gradient(180deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.9))",
      },
    },
    colors: {
      transparent: "transparent",
      white: "#ffffff",
      zince: "#D4D4D8",
      "violet-500": "#8B5CF6",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
