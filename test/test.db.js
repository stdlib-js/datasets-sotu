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
var IS_BROWSER = require( '@stdlib/assert-is-browser' );
var isArray = require( '@stdlib/assert-is-array' );
var db = require( './../lib/db.js' );


// VARIABLES //

var opts = {
	'skip': IS_BROWSER
};


// TESTS //

tape( 'main export is an array', function test( t ) {
	t.ok( true, __filename );
	t.equal( isArray( db ), true, 'main export is an array' );
	t.end();
});

tape( 'as of 2019, the exported array has a length greater than or equal to 231', opts, function test( t ) {
	t.equal( db.length >= 231, true, 'has length greater than or equal to 231 (as of 2019)' );
	t.end();
});

tape( 'the exported array is initialized with empty elements (data is lazily loaded)', opts, function test( t ) {
	var i;
	for ( i = 0; i < db.length; i++ ) {
		t.equal( db[i], void 0, 'element '+i+' is empty' );
	}
	t.end();
});
