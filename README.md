:bento: [@combinatorics/set-partition](https://computational-combinatorics.github.io/set-partition)
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
See [docs](https://computational-combinatorics.github.io/set-partition/index.html).

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
} from '@combinatorics/set-partition';

import {range} from '@iterable-iterator/range';
import {map} from '@iterable-iterator/map';

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

[![License](https://img.shields.io/github/license/computational-combinatorics/set-partition.svg)](https://raw.githubusercontent.com/computational-combinatorics/set-partition/main/LICENSE)
[![Version](https://img.shields.io/npm/v/@combinatorics/set-partition.svg)](https://www.npmjs.org/package/@combinatorics/set-partition)
[![Build](https://img.shields.io/travis/computational-combinatorics/set-partition/main.svg)](https://travis-ci.com/computational-combinatorics/set-partition/branches)
[![Dependencies](https://img.shields.io/david/computational-combinatorics/set-partition.svg)](https://david-dm.org/computational-combinatorics/set-partition)
[![Dev dependencies](https://img.shields.io/david/dev/computational-combinatorics/set-partition.svg)](https://david-dm.org/computational-combinatorics/set-partition?type=dev)
[![GitHub issues](https://img.shields.io/github/issues/computational-combinatorics/set-partition.svg)](https://github.com/computational-combinatorics/set-partition/issues)
[![Downloads](https://img.shields.io/npm/dm/@combinatorics/set-partition.svg)](https://www.npmjs.org/package/@combinatorics/set-partition)

[![Code issues](https://img.shields.io/codeclimate/issues/computational-combinatorics/set-partition.svg)](https://codeclimate.com/github/computational-combinatorics/set-partition/issues)
[![Code maintainability](https://img.shields.io/codeclimate/maintainability/computational-combinatorics/set-partition.svg)](https://codeclimate.com/github/computational-combinatorics/set-partition/trends/churn)
[![Code coverage (cov)](https://img.shields.io/codecov/c/gh/computational-combinatorics/set-partition/main.svg)](https://codecov.io/gh/computational-combinatorics/set-partition)
[![Code technical debt](https://img.shields.io/codeclimate/tech-debt/computational-combinatorics/set-partition.svg)](https://codeclimate.com/github/computational-combinatorics/set-partition/trends/technical_debt)
[![Documentation](https://computational-combinatorics.github.io/set-partition/badge.svg)](https://computational-combinatorics.github.io/set-partition/source.html)
[![Package size](https://img.shields.io/bundlephobia/minzip/@combinatorics/set-partition)](https://bundlephobia.com/result?p=@combinatorics/set-partition)
