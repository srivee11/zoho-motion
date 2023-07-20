/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
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

      blue: { 

        
    main: '#2962FF',
    accent: '#1345D1',
    light: '#64BDFF',

      }
    
    
    
    },

    fontFamily: {
      
      Mont : ["Montserrat"]

    },
    extend: {},
  },
  plugins: [],
}