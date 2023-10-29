/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var tape = require( 'tape' );
var ref = require( '@stdlib/math-base-ops-mul' );
var isArray = require( '@stdlib/assert-is-array' );
var uniform = require( '@stdlib/random-base-uniform' ).factory;
var flatten2d = require( '@stdlib/gsheets/array/flatten2d' );
var mul = require( './../../../src/api/generated/mul.js' );


// VARIABLES //

var rand1 = uniform( -10.0, 10.0 );
var rand2 = uniform( -10.0, 10.0 );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof mul, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if not provided a number for the first argument (primitive)', function test( t ) {
	var values;
	var i;

	values = [
		'beep',
		true,
		false
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), Error, 'throws an error when provided '+values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			mul( value, -10.0 );
		}
	}
});

tape( 'the function throws an error if not provided a number for the first argument (nested array)', function test( t ) {
	var values;
	var i;

	values = [
		'beep',
		true,
		false
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), Error, 'throws an error when provided '+values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			mul( [ [ value ] ], [ [ -10.0 ] ] );
		}
	}
});

tape( 'the function throws an error if not provided a number for the second argument (primitive)', function test( t ) {
	var values;
	var i;

	values = [
		'beep',
		true,
		false
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), Error, 'throws an error when provided '+values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			mul( -10.0, value );
		}
	}
});

tape( 'the function throws an error if not provided a number for the second argument (nested array)', function test( t ) {
	var values;
	var i;

	values = [
		'beep',
		true,
		false
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), Error, 'throws an error when provided '+values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			mul( [ [ -10.0 ] ], [ [ value ] ] );
		}
	}
});

tape( 'the function computes the product (primitive)', function test( t ) {
	var expected;
	var actual;
	var out;
	var v1;
	var v2;
	var i;

	for ( i = 0; i < 10; i++ ) {
		v1 = rand1();
		v2 = rand2();
		actual = mul( v1, v2 );
		expected = [ ref( v1, v2 ) ];
		t.strictEqual( isArray( actual ), true, 'returns expected value' );
		t.strictEqual( isArray( actual[ 0 ] ), true, 'returns expected value' );
		t.deepEqual( flatten2d( actual ), expected, 'returns expected value' );
	}
	t.end();
});

tape( 'the function computes the product (nested array)', function test( t ) {
	var expected;
	var actual;
	var X1;
	var X2;
	var x1;
	var x2;
	var v1;
	var v2;
	var i;
	var j;

	X1 = [];
	X2 = [];
	expected = [];
	for ( i = 0; i < 10; i++ ) {
		x1 = [];
		x2 = [];
		for ( j = 0; j < 10; j++ ) {
			v1 = rand1();
			v2 = rand2();
			x1.push( v1 );
			x2.push( v2 );
			expected.push( ref( v1, v2 ) );
		}
		X1.push( x1 );
		X2.push( x2 );
	}
	actual = mul( X1, X2 );

	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.strictEqual( isArray( actual[ 0 ] ), true, 'returns expected value' );
	t.deepEqual( flatten2d( actual ), expected, 'returns expected value' );
	t.end();
});

tape( 'the function computes the product (nested array; broadcasting)', function test( t ) {
	var expected;
	var actual;
	var X1;
	var x1;
	var v1;
	var v2;
	var i;
	var j;

	X1 = [];
	v2 = rand2();
	expected = [];
	for ( i = 0; i < 10; i++ ) {
		x1 = [];
		for ( j = 0; j < 10; j++ ) {
			v1 = rand1();
			x1.push( v1 );
			expected.push( ref( v1, v2 ) );
		}
		X1.push( x1 );
	}
	actual = mul( X1, v2 );

	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.strictEqual( isArray( actual[ 0 ] ), true, 'returns expected value' );
	t.deepEqual( flatten2d( actual ), expected, 'returns expected value' );
	t.end();
});

tape( 'the function computes the product (nested array; broadcasting)', function test( t ) {
	var expected;
	var actual;
	var X2;
	var x2;
	var v1;
	var v2;
	var i;
	var j;

	v1 = rand1();
	X2 = [];
	expected = [];
	for ( i = 0; i < 10; i++ ) {
		x2 = [];
		for ( j = 0; j < 10; j++ ) {
			v2 = rand2();
			x2.push( v2 );
			expected.push( ref( v1, v2 ) );
		}
		X2.push( x2 );
	}
	actual = mul( v1, X2 );

	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.strictEqual( isArray( actual[ 0 ] ), true, 'returns expected value' );
	t.deepEqual( flatten2d( actual ), expected, 'returns expected value' );
	t.end();
});
