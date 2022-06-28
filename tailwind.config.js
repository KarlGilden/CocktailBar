/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'button': ['Nanum Gothic'],
        'logo': ['Fascinate'] 
      }
    },
    colors: {
      primary: '#71C6C4',
      secondary: '#f4607f',
      black: '#000',
      white: '#fff',
      dark: '#27272a'
    }
  },
  plugins: [],
}
