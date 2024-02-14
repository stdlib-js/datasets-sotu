/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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
var isObject = require( '@stdlib/assert-is-plain-object' );
var isPositiveIntegerArray = require( '@stdlib/assert-is-positive-integer-array' ).primitives;
var index = require( './../lib/index_party.js' );


// TESTS //

tape( 'main export is a object', function test( t ) {
	t.ok( true, __filename );
	t.equal( isObject( index ), true, 'main export is an object' );
	t.end();
});

tape( 'export maps political parties to data file indices', function test( t ) {
	t.equal( isPositiveIntegerArray( index[ 'Democratic' ] ), true, 'returns an array of indices' );
	t.end();
});
