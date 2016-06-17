module.exports = {
  options: {
    plugins: [
      { removeViewBox: false }, 
      { removeUselessStrokeAndFill: false }
    ]
  },
  dist: {
    files: [{
      expand: true,
      cwd: '<%= config.buildFolder %>/app/images',
      src: ['**/*.svg'],
      dest: '<%= config.buildFolder %>/app/images'
    }]
  }
}