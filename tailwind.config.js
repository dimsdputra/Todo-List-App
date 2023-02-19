/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow:{
        'sm' : '3px 3px',
        'md' : '6px 6px',
        'lg' : '10px 10px'
      }
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};
