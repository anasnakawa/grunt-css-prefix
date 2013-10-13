/*
 * grunt-css-prefix
 * -----------------------
 * Copyright (c) 2013 Anas Nakawa
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function( grunt ) {

  var prefix = require('./prefix');

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask( 'css_prefix', 'prefixing css using rework', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
        punctuation: ''
      , separator: ''
      , prefix: ''
    });

    // Iterate over all specified file groups.
    this.files.forEach( function( f ) {
      // Concat specified files.
      var src = f.src.filter( function( filepath ) {
        // Warn on and remove invalid source files (if nonull was set).
        if ( !grunt.file.exists( filepath ) ) {
          return !grunt.log.warn( 'Source file "' + filepath + '" not found.' );
        }
        return true;
      }).map( function( filepath ) {
        // Read file source.
        return grunt.file.read( filepath );
      }).join( grunt.util.normalizelf( options.separator ) );

      // Handle options.
      src += options.punctuation;

      // call out our prefixer
      src = prefix( src, options );

      // Write the destination file.
      grunt.file.write( f.dest, src );

      // Print a success message.
      grunt.log.writeln( 'File "' + f.dest + '" created.' );
    });
  });

};