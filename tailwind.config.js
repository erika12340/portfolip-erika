/** @type {import('tailwindcss').Config} */
module.exports = {
  content:  ['./index.html'],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      color: {
        primary: '#ff69b4', // pink cerah
        dark: '#ff1493',    // pink lebih gelap 
      },
      screens:{
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};

