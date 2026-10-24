/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        'my-purple': '#5e17eb',
        'my-purple-light': '#c4b5e3',
        'my-bg': '#f4edfb',
        'my-star': 'rgb(255, 208, 20)',
      },
    },
  },
  plugins: [],
}

