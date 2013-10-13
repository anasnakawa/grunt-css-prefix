/*
 * prefix a css file
 * -----------------------
 * Copyright (c) 2013 Anas Nakawa
 * Licensed under the MIT license.
 */

'use strict';

// --------------------------
// attempt to process all css
// selectors, and prefix them
// with a given string
// --------------------------

// modules
var rework = require('rework')
, dasherize = function(str){
  return str.trim().replace(/([A-Z])/g, '-$1').replace(/[-_\s]+/g, '-').toLowerCase();
}
, prefixer = function() {
	return function( styles ) {
		styles.rules.forEach( function( rule ) {
			if( rule.type === 'rule' ) {

				// prefixing class names
				for( var i = 0, len = rule.selectors.length; i < len; i++ ) {
					rule.selectors[ i ] = dasherize( rule.selectors[ i ] ).split('.').join('.' + prefix);
				}

			} else if( rule.type === 'keyframes' ) {
				// prefixing keyframe names
				rule.name = prefix + dasherize( rule.name );
			}
		});		
	}
}
, skip = function() {
	return;
}
, animationName = function( type ) {
	return {
		'animation-name': prefix + dasherize( type )
	}
}
, prefix;

module.exports = function( file, options ) {
	prefix = options.prefix;
	return rework( file )
		.use( prefixer() )
		.use( 
			rework.mixin({
				  '-webkit-animation-name': skip
				, 	 '-moz-animation-name': skip
				, 		'-ms-animation-name': skip
				, 		 '-o-animation-name': skip
				, 				'animation-name': animationName
			}) 
		)
		.use(
			rework.prefix( 'animation-name', ['-webkit-', '-moz-'] )
		)
		.toString();
}