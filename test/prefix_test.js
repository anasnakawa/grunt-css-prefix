/*
 * prefixer nodeunit test
 * -----------------------
 * Copyright (c) 2013 Anas Nakawa
 * Licensed under the MIT license.
 */

// loading modules and files
var fs = require( 'fs' )
, testFile = fs.readFileSync( 'test/tmp/test.dist.css' ).toString();

// file exist ?
exports[ 'fileDoesExist' ] = function( test ) {
	test.ok( testFile != null, 'file does exist' );
	test.done();
}

// prefixing
exports[ 'prefixedClasses' ] = function( test ) {
	test.ok( ( testFile.split( '.' )[ 1 ].indexOf( 'libname-' ) === 0 ), 'classes are prefixed with libname-' );
	test.done();
}

exports[ 'prefixedKeyFrames' ] = function( test ) {
	test.ok( ( testFile.split('@-webkit-keyframes ')[ 1 ].indexOf( 'libname-shake' ) === 0 ), 'keyframes prefixed with libname-' );
	test.done();
}

// processing names
exports[ 'dasherizedNames' ] = function( test ) {
	test.ok( ( testFile.split( '.' )[ 1 ].indexOf( 'animated-nicely' ) !== -1 ), 'class names are dasherized' );
	test.done();
}