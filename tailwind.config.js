/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // implementation from Lee Robinson via this youtube video https://www.youtube.com/watch?v=L8_98i_bMMA
      fontFamily: {
        sans: ['var(--font-rubik)'],
        roboto: ['var(--font-roboto)'],
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
