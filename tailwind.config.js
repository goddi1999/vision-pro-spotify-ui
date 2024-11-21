/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-img': "url('/assets/img/virtual_living_room.jpeg')",
        'burna-boy': "url('/assets/img/burnaboy_thubnail.png')",
      },
      colors: {
        foreground: '#fff',
        green: '#1DB954',
        danger: '#f31260',
      }
    },
  },
  plugins: [],
} 