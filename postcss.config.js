module.exports = (context) => ({
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    context.env === 'production ' ? require('cssnano') : null
  ]
})
