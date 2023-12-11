/** @type {import('tailwindcss').Config} */
const {nextui} = require("@nextui-org/react");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/*.js",
  ],
  theme: {
    extend: {
      screens: {
        'xl': '1560px'
      },
      colors: {
        'light-black': '#888',
        'tag-blue': '#59B9FF',
        'button-blue': '#218FDF',
        'background': '201F25',
        'back-brown': '#312F37',
        'apple-green': '#16AC13',
        'gray': '#9795AD'
      }
    }
  },
  darkMode: "class",
  plugins: [nextui({
    defaultTheme: 'dark'
  })]
}

