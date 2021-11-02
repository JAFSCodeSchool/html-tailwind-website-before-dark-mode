module.exports = {
  purge: {
    enabled: false,
    content: ["src/*.html", "src/**/*.html", "src/*.js"]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      display: ['dark'],
      opacity: ['dark'],
    },
  },
  plugins: [],
}
