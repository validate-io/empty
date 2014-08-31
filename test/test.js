
// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	isEmpty = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'validate.io-empty', function tests() {
	'use strict';

	it( 'should export a function', function test() {
		expect( isEmpty ).to.be.a( 'function' );
	});

	it( 'should positively validate', function test() {
		assert.ok( isEmpty( '' ) );
		assert.ok( isEmpty( [] ) );
		assert.ok( isEmpty( {} ) );
	});

	it( 'should negatively validate', function test() {
		var values = [
				5,
				true,
				[ 1 ],
				'5',
				function(){},
				null,
				NaN,
				{'foo':'bar'},
				undefined
			];

		for ( var i = 0; i < values.length; i++ ) {
			assert.ok( !isEmpty( values[i] ) );
		}
	});

});