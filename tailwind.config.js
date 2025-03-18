/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    './src/components/**/*.astro',
    './src/layouts/**/*.astro',
    './src/pages/**/*.astro',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#ff6a00',
        secondary: '#ffa600',
        accent: '#66bfff',
        background: '#fff6f0',
        text: '#000000',
        darkBackground: '#0f0600',
        darkText: '#ffffff',
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif'],
        sixtyfour: ['Sixtyfour Convergence', 'sans-serif'],
      },
    },
    screens: {
      'xs': '475px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '1920px',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
