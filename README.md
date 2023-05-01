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

# State of the Union Addresses

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> [State of the Union][sotu] addresses given by U.S. Presidents.

<section class="intro">

The [State of the Union][sotu] address is an annual speech given by the President of the United States of America to a joint session of the United States Congress.

</section>

<!-- /.intro -->





<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->







<section class="cli">



<section class="installation">

## Installation

To use as a general utility, install the CLI package globally

```bash
npm install -g @stdlib/datasets-sotu-cli
```

</section>

<!-- CLI usage documentation. -->

<section class="usage">

## Usage

```text
Usage: sotu [options]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
         --name n1,n2,...      President names.
         --party p1,p2,...     Political parties.
         --year y1,y2,...      Years.
         --range r1,r2         Year range.
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Data is written to `stdout` as newline-delimited JSON ([NDJSON][ndjson]).

</section>

<!-- /.notes -->

<section class="examples">

## Examples

```bash
$ sotu --name 'Barack Obama' --year 2009
{"name":"Barack Obama","year":2009,"party":"Democratic","text":"..."}
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<!-- <license> -->

* * *

## License

The data files (databases) are licensed under an [Open Data Commons Public Domain Dedication & License 1.0][pddl-1.0] and their contents are licensed under a [Creative Commons Zero v1.0 Universal][cc0]. [State of the Union][sotu] addresses are works of the United States Government and thus have no copyright protection under [United States copyright law][us-copyright]. The software is licensed under [Apache License, Version 2.0][apache-license].

<!-- </license> -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

## See Also

-   <span class="package-name">[`@stdlib/datasets-sotu`][@stdlib/datasets-sotu]</span><span class="delimiter">: </span><span class="description">state of the Union addresses by U.S. Presidents.</span>


</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

### Community

[![Chat][chat-image]][chat-url]

---

## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/datasets-sotu-cli.svg
[npm-url]: https://npmjs.org/package/@stdlib/datasets-sotu-cli

[test-image]: https://github.com/stdlib-js/datasets-sotu/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/datasets-sotu/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/datasets-sotu/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/datasets-sotu?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/datasets-sotu.svg
[dependencies-url]: https://david-dm.org/stdlib-js/datasets-sotu/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[cli-section]: https://github.com/stdlib-js/datasets-sotu#cli
[cli-url]: https://github.com/stdlib-js/datasets-sotu/tree/cli
[@stdlib/datasets-sotu]: https://github.com/stdlib-js/datasets-sotu/tree/main

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/datasets-sotu/tree/deno
[umd-url]: https://github.com/stdlib-js/datasets-sotu/tree/umd
[esm-url]: https://github.com/stdlib-js/datasets-sotu/tree/esm
[branches-url]: https://github.com/stdlib-js/datasets-sotu/blob/main/branches.md

[sotu]: https://en.wikipedia.org/wiki/State_of_the_Union

[ndjson]: http://specs.frictionlessdata.io/ndjson/

[pddl-1.0]: http://opendatacommons.org/licenses/pddl/1.0/

[cc0]: https://creativecommons.org/publicdomain/zero/1.0

[us-copyright]: https://en.wikisource.org/wiki/United_States_Code/Title_17/Chapter_1/Sections_105_and_106

[apache-license]: https://www.apache.org/licenses/LICENSE-2.0

</section>

<!-- /.links -->
