/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      "colors": {
        "default-black": "#23272A",
        "default-dark": "#2C2F33",
        "default-white": "#FFFFFF",
        "default-green": "#57F287",
        "default-blue": "#5865F2",
        "default-red": "#ED4245",
      }
    }
  },
  plugins: []
};