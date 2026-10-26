/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brandRed: "#e53e3e",
        darkBg: "#080808",
        cardBg: "#121212",
      },
    },
  },
  plugins: [],
};
