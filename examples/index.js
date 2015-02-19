'use strict';

var isEmpty = require( './../lib' );

console.log( isEmpty( {} ) );
// returns true

console.log( isEmpty( [] ) );
// returns true

console.log( isEmpty( '' ) );
// returns true

console.log( isEmpty( null ) );
// returns false