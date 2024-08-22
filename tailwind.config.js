/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'Poppins':['Poppins'],
        'Oswald':['Oswald'],
      },
      colors:{
        'Azure':'#0866FF'
      }
    },
  },
  plugins: [],
}