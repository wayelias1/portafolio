/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  "darkMode" : "class",
  theme: {
    extend: {
      borderRadius: {
        fullMax: '100%',
      },
    },
  },
  plugins: [],
}

