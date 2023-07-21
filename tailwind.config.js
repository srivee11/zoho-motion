/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    

    fontFamily: {
      
      Mont : ["Montserrat"]

    },
    extend: {

      colors: {
        gray: {
         1000: '#000000',
          900: '#212121',
          700: '#616161',
          500: '#9E9E9E',
          300: '#E0E0E0',
          100: '#F5F5F5',
          0: '#FFFFFF'

        },
  
       
        main: '#2962FF',
        accent: '#1345D1',
        light: '#64BDFF',

      
      
      
      
      },


    },
  },
  plugins: [],
}