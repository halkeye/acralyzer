/*jshint node:true */
/*globals module:true */
"use strict";
var url = require('url');

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

  /* Push up to couchdb server for dev test */
  grunt.registerTask('couchapp', "deploy couchapp", function() {
      var done = this.async();

      var url_options = {
          protocol: process.env.COUCHAPP_PROTOCOL || 'http',
          hostname: process.env.COUCHAPP_SERVER || 'localhost',
          port: process.env.COUCHAPP_PORT || '5984',
          pathname: process.env.COUCHAPP_PATH || '/acralyzer'
      };
      if (process.env.COUCHAPP_AUTH) {
          url_options.auth = process.env.COUCHAPP_AUTH;
      }

      grunt.util.spawn({
          cmd: "couchapp",
          args: ["push",url.format(url_options)]
      }, function(err, res, code) {
          grunt.log.ok();
          grunt.log.write(res.stderr);
          done();
      });
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  //grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', ['jshint']);

};
