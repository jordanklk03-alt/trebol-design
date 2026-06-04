/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'neon-green': '#00FF00',
        'dark-bg': '#0a0e27',
        'dark-card': '#1a1f3a',
      },
    },
  },
  plugins: [],
};
