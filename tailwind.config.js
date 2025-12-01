/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  extend: {
    keyframes: {
      fadeInSoft: {
        '0%': { opacity: 0, transform: 'scale(0.95)' },
        '100%': { opacity: 1, transform: 'scale(1)' },
      },
      pop: {
        '0%': { transform: 'scale(0.6)' },
        '80%': { transform: 'scale(1.05)' },
        '100%': { transform: 'scale(1)' },
      },
      wiggle: {
        '0%,100%': { transform: 'rotate(-3deg)' },
        '50%': { transform: 'rotate(3deg)' },
      }
    },
    animation: {
      fadeInSoft: 'fadeInSoft 0.6s ease-out',
      pop: 'pop 0.4s ease-out',
      wiggle: 'wiggle 1s ease-in-out infinite',
    }
  }
},
  plugins: [],
}
