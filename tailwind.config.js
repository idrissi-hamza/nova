module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        "fit-80": "repeat(auto-fit, minmax(320px, 1fr))",
      },
    },
  },
};
