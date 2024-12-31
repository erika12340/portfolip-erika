// Menambahkan event listener untuk hamburger menu
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

// Toggle menu ketika hamburger ditekan
hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('hidden');
  hamburger.classList.toggle('active');
});

// Menambahkan animasi pada hamburger
const lines = document.querySelectorAll('.hamburger-line');
hamburger.addEventListener('click', () => {
  lines.forEach(line => line.classList.toggle('active'));
});


/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html", // Sesuaikan dengan path file HTML Anda
      "./src/**/*.{html,js}", // Jika Anda menggunakan folder src
    ],
    theme: {
      extend: {
        colors: {
          primary: '#FF6F61', // Contoh warna utama
        },
      },
    },
    plugins: [],
  }
  