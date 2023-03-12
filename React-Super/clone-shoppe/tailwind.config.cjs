/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ordens: '#ee4d2d',
        f5f5f5: '#f5f5f5',
        rbg_1: 'rgba(0,0,0,.65)'
      }
    }
  },
  plugins: []
}
