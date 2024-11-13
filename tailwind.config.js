/** @type {import('tailwindcss').Config} */
export default {
  content: ["assets/**", "entrypoints/**", "components/**"],
  theme: {
    extend: {
      colors: {
        customGray: '#242424', // you can name this as you like
      },
    },
  },
  plugins: [],
}

