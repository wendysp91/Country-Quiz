module.exports = {
  content: ['./src/js/**/*.js', './public/**/*.{html,js}'],
  theme: {

    extend: {
      backgroundImage: {
        'body-img': "url('img/background.png')"
      },
      fontFamily: {
        'poppins': "'Poppins'"
      },
      colors: {
        'violet': 'rgba(96, 102, 208, 0.8)'
      }
    },
  },
  plugins: [],
}
