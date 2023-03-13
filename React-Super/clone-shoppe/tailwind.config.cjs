// eslint-disable-next-line @typescript-eslint/no-var-requires
const plugin = require('tailwindcss/plugin')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ordens: '#ee4d2d',
        f5f5f5: '#f5f5f5',
        rbg_1: 'rgba(0,0,0,.65)'
      }
    }
  },
  // corePlugins: { k dùng class container của tailwindcss
  //   container: false
  // },
  plugins: [
    plugin(function ({ addComponents, theme }) {
      addComponents({
        '.container_customer': {
          maxWidth: theme('columns.7xl'),
          marginLeft: 'auto',
          marginRight: 'auto',
          padding: theme('spacing.4')
        }
      })
    })
  ]
}
