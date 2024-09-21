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
      
    },
  },
  plugins: [],
}

