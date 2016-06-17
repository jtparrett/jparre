module.exports = {
    build: {
    options: {
        sourceMap: true
    },
    files: {
            '<%= config.buildFolder %>/app/javascript/application.js' : [
            '<%= config.srcFolder %>/app/javascript/config.js',
            '<%= config.srcFolder %>/app/vendor/**/*.js',
            '<%= config.srcFolder %>/app/javascript/modules/*.js',
            '<%= config.srcFolder %>/app/javascript/application.js'
            ],
        }
    }
}