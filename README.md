<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# State of the Union Addresses

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> [State of the Union][sotu] addresses given by U.S. Presidents.

<section class="intro">

The [State of the Union][sotu] address is an annual speech given by the President of the United States of America to a joint session of the United States Congress.

</section>

<!-- /.intro -->



<section class="usage">

## Usage

To use in Observable,

```javascript
sotu = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/datasets-sotu@umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var sotu = require( 'path/to/vendor/umd/datasets-sotu/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/datasets-sotu@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.sotu;
})();
</script>
```

#### sotu( \[options] )

Returns [State of the Union][sotu] addresses.

```javascript
var speeches = sotu();
// returns [{...},{...},...]
```

Each [State of the Union][sotu] address is represented by an `object` with the following fields:

-   **year**: speech year.
-   **name**: President name.
-   **party**: the President's political party.
-   **text**: speech text.

The function accepts the following `options`:

-   **name**: a President's name or an `array` of names.
-   **party**: a political party or an `array` of political parties.
-   **year**: a year or an `array` of years.
-   **range**: two-element `array` specifying a year range.

To retrieve speeches by one or more Presidents, set the `name` option.

```javascript
var speeches = sotu({
    'name': 'Barack Obama'
});
// returns [{...},{...},...]

speeches = sotu({
    'name': [
        'Franklin D Roosevelt',
        'Barack Obama'
    ]
});
// returns [{...},{...},...]
```

To retrieve speeches from Presidents belonging to a particular political party, set the `party` option.

```javascript
var speeches = sotu({
    'party': 'Democratic'
});
// returns [{...},{...},...]

speeches = sotu({
    'party': [
        'Federalist',
        'Democratic'
    ]
});
// returns [{...},{...},...]
```

The following parties are recognized:

-   **Democratic**
-   **Republican**
-   **Democratic-Republican**
-   **Federalist**
-   **National Union**
-   **Whig**
-   **Whig & Democratic**
-   **none**

To retrieve speeches from one or more years, set the `year` option.

```javascript
var speeches = sotu({
    'year': 2009
});
// returns [{...}]

speeches = sotu({
    'year': [
        1942,
        2009
    ]
});
// returns [{...},{...}]
```

To specify a range of consecutive years, set the `range` option, where the first element corresponds to the starting year and the second element corresponds to the final year.

```javascript
var speeches = sotu({
    'range': [ 2009, 2016 ]
});
// returns [{...},{...},...]
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

* * *

## Notes

-   The dataset includes the addresses given by newly inaugurated presidents to a joint session of Congress in Washington during their first year in office, even though these are technically not State of the Union addresses.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/datasets-sotu@umd/browser.js"></script>
<script type="text/javascript">
(function () {

var speeches;

// Get a range of speeches:
speeches = sotu({
    'range': [ 2009, 2013 ]
});
// returns [...]

// Get speeches by one or more Presidents:
speeches = sotu({
    'name': [
        'Abraham Lincoln',
        'William J Clinton'
    ]
});
console.log( 'Number of addresses by Abraham Lincoln and Bill Clinton: %d', speeches.length );

// Get all addresses by Presidents belonging to the Democratic Party:
speeches = sotu({
    'party': 'Democratic'
});
console.log( 'Number of addresses by Democrats: %d', speeches.length );

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->



<!-- <license> -->

* * *

## License

The data files (databases) are licensed under an [Open Data Commons Public Domain Dedication & License 1.0][pddl-1.0] and their contents are licensed under a [Creative Commons Zero v1.0 Universal][cc0]. [State of the Union][sotu] addresses are works of the United States Government and thus have no copyright protection under [United States copyright law][us-copyright]. The software is licensed under [Apache License, Version 2.0][apache-license].

<!-- </license> -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## Copyright

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/datasets-sotu.svg
[npm-url]: https://npmjs.org/package/@stdlib/datasets-sotu

[test-image]: https://github.com/stdlib-js/datasets-sotu/actions/workflows/test.yml/badge.svg?branch=v0.2.3
[test-url]: https://github.com/stdlib-js/datasets-sotu/actions/workflows/test.yml?query=branch:v0.2.3

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/datasets-sotu/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/datasets-sotu?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/datasets-sotu.svg
[dependencies-url]: https://david-dm.org/stdlib-js/datasets-sotu/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[cli-section]: https://github.com/stdlib-js/datasets-sotu#cli
[cli-url]: https://github.com/stdlib-js/datasets-sotu/tree/cli
[@stdlib/datasets-sotu]: https://github.com/stdlib-js/datasets-sotu/tree/main

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/datasets-sotu/tree/deno
[deno-readme]: https://github.com/stdlib-js/datasets-sotu/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/datasets-sotu/tree/umd
[umd-readme]: https://github.com/stdlib-js/datasets-sotu/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/datasets-sotu/tree/esm
[esm-readme]: https://github.com/stdlib-js/datasets-sotu/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/datasets-sotu/blob/main/branches.md

[sotu]: https://en.wikipedia.org/wiki/State_of_the_Union

[ndjson]: http://specs.frictionlessdata.io/ndjson/

[pddl-1.0]: http://opendatacommons.org/licenses/pddl/1.0/

[cc0]: https://creativecommons.org/publicdomain/zero/1.0

[us-copyright]: https://en.wikisource.org/wiki/United_States_Code/Title_17/Chapter_1/Sections_105_and_106

[apache-license]: https://www.apache.org/licenses/LICENSE-2.0

</section>

<!-- /.links -->
