/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#007a37",    // Vereinsgrün
        secondary: "#252273",  // Vereinsblau
        dark: "#1f1a17",       // Schwarz / Dunkelgrau
        lightgray: "#f5f5f5",  // Heller Hintergrund
      }
    },
  },
  plugins: [],
}
