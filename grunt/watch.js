module.exports = {
  css: {
    files: ['<%= config.srcFolder %>/app/stylesheets/**/*', '<%= config.srcFolder %>/app/vendor/**/*'],
    tasks: ['sass'],
    options: {
      spawn: false,
      livereload: true
    }
  },
  images: {
    files: ['<%= config.srcFolder %>/app/images/**/*', '!<%= config.srcFolder %>/app/images/**/*.psd'],
    tasks: ['newer:copy', 'newer:svgmin'],
    options: {
      spawn: false,
      livereload: true
    }
  },
  js: {
    files: ['<%= config.srcFolder %>/app/javascript/**/*.js', '<%= config.srcFolder %>/app/vendor/**/*.js'],
    tasks: ['concat', 'uglify'],
    options: {
      spawn: false,
      livereload: true
    }
  },
  fonts: {
    files: ['<%= config.srcFolder %>/app/fonts/**/*'],
    tasks: ['newer:copy'],
    options: {
      spawn: false,
      livereload: true
    }
  },
  html: {
    files: ['<%= config.srcFolder %>/**/*.html'],
    tasks: ['zetzer'],
    options: {
      spawn: false,
      livereload: true
    }
  },
  php: {
    files: ['<%= config.buildFolder %>/**/*.php'],
    options: {
      spawn: false,
      livereload: true
    }
  },
  json: {
    files: ['<%= config.srcFolder %>/app/data/**/*'],
    tasks: ['newer:copy'],
    options: {
      spawn: false,
      livereload: true
    }
  },
  handlebars: {
    files: ['<%= config.srcFolder %>/app/handlebars/**/*'],
    tasks: ['newer:copy'],
    options: {
      spawn: false,
      livereload: true
    }
  }
}
