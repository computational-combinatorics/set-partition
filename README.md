:bento: [@aureooms/js-set-partition](https://make-github-pseudonymous-again.github.io/js-set-partition)
==

<p align="center">
<a href="https://en.wikipedia.org/wiki/File:Set_partitions_4;_Hasse;_circles.svg">
<img alt="The Zahlen symbol" src="https://upload.wikimedia.org/wikipedia/commons/3/32/Set_partitions_4%3B_Hasse%3B_circles.svg" width="300">
</a><br/>
<a href="https://commons.wikimedia.org/wiki/User:Watchduck">
User:Watchduck
</a>
/
<a href="https://creativecommons.org/licenses/by/3.0/deed.en">CC BY 3.0</a>
</p>

Set partition algorithms for JavaScript.
See [docs](https://make-github-pseudonymous-again.github.io/js-set-partition/index.html).

> :building_construction: Caveat emptor! This is work in progress. Code may be
> working. Documentation may be present. Coherence may be. Maybe.

> :warning: The code requires `regeneratorRuntime` to be defined, for instance by importing
> [regenerator-runtime/runtime](https://www.npmjs.com/package/regenerator-runtime).

```js
import {
	enumerate,
	count,
	_count,
	sequence,
	_sequence,
	isPartition
} from '@aureooms/js-set-partition';

import {range, map} from '@aureooms/js-itertools';

enumerate(range(0)); // []
enumerate(range(1)); // [[0]]
enumerate(range(2)); // [[0], [1]] [[0, 1]]

count(0); // 1n
count(1); // 1n
count(2); // 2n
count(3); // 5n
count(4); // 15n
count(5); // 52n
count(6); // 203n
count(26); // 49631246523618756274n

_count(1,6); // 203
_count(1,26); // ???

sequence(); // 1n 1n 2n 3n 5n 15n 52n 203n ...
_sequence(1); // 1 1 2 3 5 15 52 203 ...

isPartition(range(5), [range(5)]); // true
isPartition(range(5), map(x => [x], range(5))); // true
isPartition(range(5), map(x => (function* () {yield x;})(), range(5))); // true
isPartition(range(5), [[0], [1], [2], [3], [4]]); // true
isPartition(range(5), [[0, 1], [2], [3], [4]]); // true
isPartition(range(5), [[2, 1], [3], [0, 4]]); // true

isPartition(range(5), [[], [0], [1], [2], [3], [4]]); // false
isPartition(range(5), [[0], [0], [1], [2], [3], [4]]); // false
isPartition(range(5), [[5], [0], [1], [2], [3], [4]]); // false
```

[![License](https://img.shields.io/github/license/make-github-pseudonymous-again/js-set-partition.svg)](https://raw.githubusercontent.com/make-github-pseudonymous-again/js-set-partition/main/LICENSE)
[![Version](https://img.shields.io/npm/v/@aureooms/js-set-partition.svg)](https://www.npmjs.org/package/@aureooms/js-set-partition)
[![Build](https://img.shields.io/travis/make-github-pseudonymous-again/js-set-partition/main.svg)](https://travis-ci.org/make-github-pseudonymous-again/js-set-partition/branches)
[![Dependencies](https://img.shields.io/david/make-github-pseudonymous-again/js-set-partition.svg)](https://david-dm.org/make-github-pseudonymous-again/js-set-partition)
[![Dev dependencies](https://img.shields.io/david/dev/make-github-pseudonymous-again/js-set-partition.svg)](https://david-dm.org/make-github-pseudonymous-again/js-set-partition?type=dev)
[![GitHub issues](https://img.shields.io/github/issues/make-github-pseudonymous-again/js-set-partition.svg)](https://github.com/make-github-pseudonymous-again/js-set-partition/issues)
[![Downloads](https://img.shields.io/npm/dm/@aureooms/js-set-partition.svg)](https://www.npmjs.org/package/@aureooms/js-set-partition)

[![Code issues](https://img.shields.io/codeclimate/issues/make-github-pseudonymous-again/js-set-partition.svg)](https://codeclimate.com/github/make-github-pseudonymous-again/js-set-partition/issues)
[![Code maintainability](https://img.shields.io/codeclimate/maintainability/make-github-pseudonymous-again/js-set-partition.svg)](https://codeclimate.com/github/make-github-pseudonymous-again/js-set-partition/trends/churn)
[![Code coverage (cov)](https://img.shields.io/codecov/c/gh/make-github-pseudonymous-again/js-set-partition/main.svg)](https://codecov.io/gh/make-github-pseudonymous-again/js-set-partition)
[![Code technical debt](https://img.shields.io/codeclimate/tech-debt/make-github-pseudonymous-again/js-set-partition.svg)](https://codeclimate.com/github/make-github-pseudonymous-again/js-set-partition/trends/technical_debt)
[![Documentation](https://make-github-pseudonymous-again.github.io/js-set-partition/badge.svg)](https://make-github-pseudonymous-again.github.io/js-set-partition/source.html)
[![Package size](https://img.shields.io/bundlephobia/minzip/@aureooms/js-set-partition)](https://bundlephobia.com/result?p=@aureooms/js-set-partition)
