import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#8B5CF6",
        secondary: "#f3EEFD",
        accent: "#FFA500",
        light: "#F7F4F9",
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif']
      },
      backgroundImage: {
        'purple-gradient': 'linear-gradient(135deg, #6D28D9, #8B5CF6)',
      }
    },
  },
  plugins: [forms({
      strategy: 'class',
    }),],
}

