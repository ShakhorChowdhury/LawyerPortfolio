/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,css,js}"],
  theme: {
    extend: {
      animation: {
        text: 'text 5s ease infinite',
      },
      keyframes: {
        text: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
      },
      fontFamily: {
         main: ["Space Grotesk"],
      }
    }
  },
    plugins: [],
}
