module.exports = function(grunt) {
    
    var config = grunt.file.readJSON('GruntConfig.json');
    config.cleanFolder = config.staticSite ? config.buildFolder : config.buildFolder + '/app';

    require('load-grunt-config')(grunt, {
        data: {
            config: config
        }
    });
}