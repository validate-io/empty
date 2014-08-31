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

(function() {
	'use strict';

	/**
	* FUNCTION: isEmpty( value )
	*	Validates if a value is empty: '', [], {}.
	*
	* @param {String|Array|Object} value - value to be validated
	* @returns {Boolean} boolean indicating whether value is empty
	*/
	function isEmpty( value ) {
		var type = typeof value;
		if ( type === 'string' && !value.length ) {
			return true;
		}
		if ( Array.isArray( value ) && !value.length ) {
			return true;
		}
		if ( type !== 'object' || value === null ) {
			return false;
		}
		return ( !Object.keys( value ).length );
	} // end FUNCTION isEmpty()


	// EXPORTS //

	module.exports = isEmpty;

})();