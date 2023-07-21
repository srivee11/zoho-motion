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
  
       
        main: '#2962FF',
        accent: '#1345D1',
        light: '#64BDFF',

      
      
      
      
      },


    },
  },
  plugins: [],
}