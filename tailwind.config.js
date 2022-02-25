export default {
  plugins: [],
    theme: {
    extend: {
      fontFamily: {
        Lato: ["Lato", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto",
        "Oxygen", "Ubuntu", "Cantarell", "Open Sans", "Helvetica Neue", "sans-serif"]
      },
      colors: {
        primary: '#85CB33',
        secondary: '#A5CBC3',
        black: '#2F4858',
      },
    },
  },
  purge: ["./index.html",'./src/**/*.{svelte,js,ts}'], // for unused CSS
  variants: {
    extend: {},
  },
  darkMode: false,
}