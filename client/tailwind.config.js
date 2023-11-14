/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: '#292560',
        grey: '#EEEFF0'
      },
      keyframes: {
        titleAnimation: {
          '0%': { transform: 'translateY(-50%)',opacity: '0',},
          '100%': { transform: 'translateY(0)',opacity: '1'},
        },

        subtitleAnimation: {
          '0%': { transform: 'translateX(-5%)',opacity: '0'},
          '100%': { transform: 'transform: translateX(0)',opacity: '1'},
       
        },

        loginImageAnimation: {
          '0%': { transform: 'translateX(10%)',opacity: '1'},
          '100%':{ transform: 'translateY(0)',opacity:'1'},
        },

        loginAnimation: {
          '0%': { transform: 'translateX(-15%)',opacity: '1'},
          '100%':{ transform: 'translateY(0)',opacity: '1'},
        }

      },

      animation: {
        titleAnimation: 'titleAnimation 2s',
        subtitleAnimation: 'subtitleAnimation 1s',
        loginImageAnimation: 'loginImageAnimation 2s forwards',
        loginAnimation: 'loginAnimation 2s forwards',
      }


    },
  },

  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'animate-delay': (value) => ({
            animationDelay: value,
          }),
        },
        { values: theme('transitionDelay') }
      )
    }),
  ],
}
