/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./App.{js,jsx,ts,tsx}",
      "./app/**/*.{js,jsx,ts,tsx}", 
      "./components/**/*.{js,jsx,ts,tsx}",
      "./app/(tabs)/meditate.tsx",
  ],
  presets: [require("nativewind/preset")], 
  theme: {
      extend: {
          fontFamily: {
              rmono: ["Roboto-Mono", "sans-serif"],
          },
      },
  },
  plugins: [],
};