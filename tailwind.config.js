/** @type {import('tailwindcss').Config} */

import tailwindScrollbar from 'tailwind-scrollbar-hide';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans':['Inter','sans-serif']
      },
      colors: {
      zinc: {
        55: '#1e1e1f', // custom hex between zinc-50 and zinc-100
      }
    }
    },
  },
  plugins: [tailwindScrollbar],
}