/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{html,js}",
    './pages/**/*.{html,js,jsx,ts,tsx}',
    './components/**/*.{html,js,jsx,ts,tsx}',
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#0053D6',
        'tertiaryBlue': '#025DED',
        'secondaryWhite': '#fcfcfc',
        'grey': '#eaeaea',
        'tertiaryGrey': '#8992AC',
        'greyScale': '#6C6C87',
      },
      fontFamily: {
        'body': ['"Inter"', 'system-ui'],
        'display': ['"Arvo"', 'system-ui'],
      },
    },
  },
  plugins: [],
}

