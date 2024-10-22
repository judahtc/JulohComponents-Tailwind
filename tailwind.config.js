/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      boxShadow: {
        "inner-right": "inset -5px 0 10px rgba(0, 0, 0, 0.2)",
      },
    },
  },
  plugins: [],
};
