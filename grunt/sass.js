module.exports = {
  build: {
    options: {
      style: 'compressed',
      loadPath: require('node-bourbon').includePaths,
      require: 'sass-globbing'
    },
    files: [{
      expand: true,
      cwd: '<%= config.srcFolder %>/app/stylesheets',
      src: ['*.{scss,sass}'],
      dest: '<%= config.buildFolder %>/app/stylesheets',
      ext: '.css'
    }]
  }
}