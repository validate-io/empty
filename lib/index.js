/**
*
*	VALIDATE: empty
*
*
*	DESCRIPTION:
*		- Validates if a value is empty.
*
*
*	NOTES:
*		[1]
*
*
*	TODO:
*		[1]
*
*
*	LICENSE:
*		MIT
*
*	Copyright (c) 2014. Athan Reines.
*
*
*	AUTHOR:
*		Athan Reines. kgryte@gmail.com. 2014.
*
*/

'use strict';

// MODULES //

var isString = require( 'validate.io-string' ),
	isArray = require( 'validate.io-array' ),
	keys = Object.keys || require( 'object-keys' );


// ISEMPTY //

/**
* FUNCTION: isEmpty( value )
*	Validates if a value is empty: '', [], {}.
*
* @param {String|Array|Object} value - value to be validated
* @returns {Boolean} boolean indicating whether value is empty
*/
function isEmpty( value ) {
	if ( isString( value ) && !value.length ) {
		return true;
	}
	if ( isArray( value ) && !value.length ) {
		return true;
	}
	if ( typeof value !== 'object' || value === null ) {
		return false;
	}
	return ( !keys( value ).length );
} // end FUNCTION isEmpty()


// EXPORTS //

module.exports = isEmpty;
