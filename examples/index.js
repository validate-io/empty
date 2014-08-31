var isEmpty = require( './../lib' );

console.log( isEmpty( {} ) );
// Returns true

console.log( isEmpty( [] ) );
// Returns true

console.log( isEmpty( '' ) );
// Returns true

console.log( isEmpty( null ) );
// Returns false