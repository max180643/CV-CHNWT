module.exports = {
  purge: ['./src/**/*.html', './src/**/*.tsx', './src/**/*.ts', './src/**/*.jsx', './src/**/*.js'],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ['Lato', 'sans-serif', 'ui-sans-serif', 'system-ui', '-apple-system'],
      },
      colors: {
        primary: '#85CB33',
        secondary: '#A5CBC3',
        black: '#2F4858',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
