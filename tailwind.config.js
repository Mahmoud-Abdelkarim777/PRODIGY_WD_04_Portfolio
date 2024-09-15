/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      
      colors: {
        black: '#000000',
        main: '#00A5A4',
        white: '#ffffff',
        test: '#94a3b8',
        secondary: '#ccedec',
        sub_main: {
          800: 'rgba(204, 237, 236, 0.8)',  // 10% opacity
          
        },

      },
      keyframes: {
        typing: {
          '0%': { width: '0%' },
          '50%': { width: '80%' },
          '100%': { width: '0%' },
        },
        blink: {
          '0%, 100%': { borderColor: 'transparent' },
          '50%': { borderColor: 'black' },
        },
      },
      animation: {
        // 'name-typing': 'typing 5s steps(30, end) infinite, blink 1s step-end infinite',
      },
    },
  },
  plugins: [],
}

