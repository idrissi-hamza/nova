module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        "fit-60": "repeat(auto-fit, minmax(240px, 1fr))",
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
],
};
