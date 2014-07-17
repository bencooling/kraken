'use strict';

module.exports = function watch(grunt) {
  // Load task
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Options
  return {
    options: { livereload: true },
    files: ['./**/*'],
  }
};
