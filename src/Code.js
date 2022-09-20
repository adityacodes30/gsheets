/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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

/**
* This file contains all functions which should be exposed to clients.
*/

/* eslint-disable no-unused-vars, stdlib/jsdoc-private-annotation, stdlib/jsdoc-tag-names */

/* globals ns */

'use strict';

// MAIN //

/**
* Converts a string to kebab-case.
*
* @customfunction
* @param {string|Array<Array<string>>} value - string(s) to convert
* @returns {string|Array<Array<string>>} converted string(s)
*/
function STDLIB_KEBABCASE( value ) {
	if ( ns.isArray( value ) ) {
		return ns.map2d( value, ns.naryFunction( ns.kebabcase, 1 ) );
	}
	return ns.kebabcase( value );
}

/**
* Converts a string to lowercase.
*
* @customfunction
* @param {string|Array<Array<string>>} value - string(s) to convert
* @returns {string|Array<Array<string>>} converted string(s)
*/
function STDLIB_LOWERCASE( value ) {
	if ( ns.isArray( value ) ) {
		return ns.map2d( value, ns.naryFunction( ns.lowercase, 1 ) );
	}
	return ns.lowercase( value );
}

/**
* Returns pseudorandom integers on the interval [0, 4294967295].
*
* @customfunction
* @param {number} N - number of values
* @param {number} seed - pseudorandom number generator seed
* @returns {Array<number>} pseudorandom integers
*/
function STDLIB_MT19937( N, seed ) {
	var rand = ns.mt19937.factory({
		'seed': seed
	});
	return ns.filledBy( N, rand );
}

/**
* Returns pseudorandom numbers on the interval [0, 1).
*
* @customfunction
* @param {number} N - number of values
* @param {number} seed - pseudorandom number generator seed
* @returns {Array<number>} pseudorandom numbers
*/
function STDLIB_MT19937_NORMALIZED( N, seed ) {
	var rand = ns.mt19937.factory({
		'seed': seed
	});
	return ns.filledBy( N, rand.normalized );
}

/**
* Generates a sawtooth wave.
*
* @customfunction
* @param {number} N - number of values
* @param {string} [period] - period option name
* @param {number} [periodValue] - period value
* @param {string} [amplitude] - amplitude option name
* @param {number} [amplitudeValue] - amplitude value
* @param {string} [offset] - phase offset option name
* @param {number} [offsetValue] - phase offset value
* @returns {Array<number>} simulated values
*/
function STDLIB_SAWTOOTH_WAVE( N ) {
	var opts;
	var it;
	var i;

	opts = {
		'iter': N
	};
	for ( i = 1; i < arguments.length; i += 2 ) {
		opts[ arguments[ i ] ] = arguments[ i+1 ];
	}
	it = ns.iterSawtoothWave( opts );
	return ns.iterator2array( it );
}

/**
* Evaluates the Riemann zeta function as a function of a real variable.
*
* @customfunction
* @param {number|Array<Array<number>>} value - input value(s)
* @returns {number|Array<Array<number>>} result(s)
*/
function STDLIB_ZETA( value ) {
	if ( ns.isArray( value ) ) {
		return ns.map2d( value, ns.naryFunction( ns.zeta, 1 ) );
	}
	return ns.zeta( value );
}
