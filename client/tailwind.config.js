/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      color:{
        Primary:"#ffc300",
        Secondary:"#000000",
      }
    },
    container:{
       center:true,
       padding:{
        default:"1rem",
        sm:"3rem",
       }
    }
  },
  plugins: [],
}

