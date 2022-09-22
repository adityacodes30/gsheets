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

'use strict';

// MAIN //

/**
* Flattens an array of arrays to a strided array arranged in row-major order.
*
* ## Notes
*
* -   The function assumes that all nested arrays have the same length (i.e., the input array is **not** a ragged array).
* -   If an input array only contains one nested array, the function returns a nested array and does **not** copy nested array elements to a new array. Otherwise, if an input array contains more than one nested array, the function copies nested array elements to a new array.
*
* @private
* @param {Array<Array>} arr - array of arrays
* @returns {Array} strided array
*
* @example
* var out = flatten2d( [ [ 1, 2 ], [ 3, 4 ] ] );
* // returns [ 1, 2, 3, 4 ]
*
* @example
* var out = flatten2d( [ [ 1, 2 ] ] );
* // returns [ 1, 2 ]
*/
function flatten2d( arr ) {
	var out;
	var M;
	var N;
	var a;
	var i;
	var j;

	M = arr.length;
	if ( M === 1 ) {
		return arr[ 0 ];
	}
	N = arr[ 0 ].length;
	out = [];
	for ( i = 0; i < M; i++ ) {
		a = arr[ i ];
		for ( j = 0; j < N; j++ ) {
			out.push( a[ j ] );
		}
	}
	return out;
}


// EXPORTS //

module.exports = flatten2d;
