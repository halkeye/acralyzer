/*jshint node:true */
/*globals module:true */
"use strict";
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    // default watch configuration
    jshint: {
        options: {
            jshintrc: ".jshintrc"
        },
        all: [ 'Gruntfile.js', '_attachments/script/**/*.js' ]
    },
    watch: {
        jshint: {
            files: '_attachments/script/**/*.js',
            tasks: ['jshint'],
            options: {
                interrupt: true
            }
        }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  //grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', ['jshint']);

};
