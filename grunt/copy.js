module.exports = {
  build: {
    files: [
      {
        expand: true, 
        cwd: '<%= config.srcFolder %>/app/fonts', 
        src: ['**/*.*'], 
        dest: '<%= config.buildFolder %>/app/fonts'
      },
      {
        expand: true, 
        cwd: '<%= config.srcFolder %>/app/images', 
        src: ['**/*.*'], 
        dest: '<%= config.buildFolder %>/app/images'
      },
      {
        expand: true, 
        cwd: '<%= config.srcFolder %>/app/javascript/data', 
        src: ['assets.json'], 
        dest: '<%= config.buildFolder %>/app/javascript/data'
      },
      {
        expand: true, 
        cwd: '<%= config.srcFolder %>/app/data', 
        src: ['assets.json'], 
        dest: '<%= config.buildFolder %>/app/data'
      },
      {
        expand: true, 
        cwd: '<%= config.srcFolder %>/app/handlebars', 
        src: ['assets.json'], 
        dest: '<%= config.buildFolder %>/app/handlebars'
      }
    ]
  }
}
