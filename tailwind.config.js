/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'DM-Serif': '"DM Serif Text", serif'
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

