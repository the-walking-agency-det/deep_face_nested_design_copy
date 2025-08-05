/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light: {
          background: '#FDFCFB',
          surface: '#FBF9F6',
          text: {
            primary: '#4E443C',
            secondary: '#8C827A',
          },
        },
        dark: {
          background: '#1F1C1A',
          surface: '#2D2824',
          text: {
            primary: '#EFEAE6',
            secondary: '#B0A69E',
          },
        },
        accent: {
          primary: '#D97757',
          secondary: '#8A9A5B',
        },
      },
      fontSize: {
        'h1': '2.25rem',
        'h2': '1.875rem',
        'h3': '1.5rem',
        'h4': '1.25rem',
        'h5': '1.125rem',
        'h6': '1rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/container-queries'),
  ],
}