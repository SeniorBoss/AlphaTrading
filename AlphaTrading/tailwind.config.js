/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'ms': '360px',    // Mobile small
      'sm': '640px',    // Mobile
      'md': '768px',    // Tablet
      'lg': '1024px',   // Laptop
      'xl': '1280px',   // Desktop
    },
  },
  
  plugins: [],
}