/*
 * grunt-dependency-installer
 * https://github.com/jking90/grunt-dependency-installer
 *
 * Copyright (c) 2013 Jimmy King
 * Licensed under the MIT license.
 */

'use strict';

var fs = require('fs'),
    childProcess = require('child_process');

module.exports = function(grunt) {

  grunt.registerTask('dependency_installer', 'A Grunt plugin for installing dependancies to node modules stored in the plugins directory', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      pluginsDir: 'plugins',
      npmArgs: ''
    }),
        done = this.async(),
        plugins = [],
        installed = [],
        cmdOpts = {
          cwd: process.cwd(),
          env: process.env
        };

    // Install dependencies
    var npmInstall = function(thisPackage, callback) {
      var cd = 'cd ' + process.cwd() + '/' + options.pluginsDir + '/' + thisPackage,
          command = cd + ' && npm install ' + options.npmArgs;

      childProcess.exec(command, cmdOpts,function(err, stdout, stderr) {
        if (err) throw err;

        grunt.verbose.writeln(stdout);
        grunt.log.oklns('Installed ' + thisPackage + '\'s dependencies');

        installed.push(thisPackage);

        if (installed.length === plugins.length) {
          done();
        }
      });
    };

    // Check if path is directory
    var isDir = function(directory) {
      var path = process.cwd() + '/' + options.pluginsDir + '/' + directory,
          stats = fs.lstatSync(path);
      return stats.isDirectory();
    };

    // Walk through pluginsDir
    fs.readdir(process.cwd() + '/' + options.pluginsDir, function (err, files) {
      if (err) throw err;

      for (var i = 0; i < files.length; i++) {
        if (isDir(files[i])) {
          plugins.push(files[i]);
          grunt.log.writeln('Installing ' + files[i] + '\'s dependencies');
          npmInstall(files[i]);
        }
      }
    });
  });
};
