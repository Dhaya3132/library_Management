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
        'Azure':'#0866FF',
        'WhiteSmoke':'#f5f5f5',
        'Gray':'#F2F4F7',
      },
      backgroundImage:{
        'bgBanner':"url('/public/bgBanner.svg')",
      }
    },
  },
  plugins: [],
}