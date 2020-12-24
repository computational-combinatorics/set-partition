import test from 'ava';

import {iter, range, list, map} from '@aureooms/js-itertools';

import {isPartition} from '../../src';

const macro = (t, set, partition, is) => {
	t.is(isPartition(set, partition), is, 'isPartition(set, partition)');

	t.is(
		isPartition(set, map(iter, partition)),
		is,
		'isPartition(set, map(iter, partition))',
	);

	t.is(
		isPartition(set, list(map(iter, partition))),
		is,
		'isPartition(set, list(map(iter, partition)))',
	);

	t.is(
		isPartition(set, list(map((x) => x, partition))),
		is,
		'isPartition(set, list(map((x) => x, partition)))',
	);

	t.is(
		isPartition(iter(set), partition),
		is,
		'isPartition(iter(set), partition)',
	);

	t.is(
		isPartition(iter(set), map(iter, partition)),
		is,
		'isPartition(iter(set), map(iter, partition))',
	);

	t.is(
		isPartition(iter(set), list(map(iter, partition))),
		is,
		'isPartition(iter(set), list(map(iter, partition)))',
	);

	t.is(
		isPartition(iter(set), list(map((x) => x, partition))),
		is,
		'isPartition(iter(set), list(map((x) => x, partition)))',
	);
};

macro.title = (title, set, partition, is) =>
	`isPartition(${JSON.stringify(set)}, ${JSON.stringify(partition)} = ${is})`;

const yea = (t, set, partition) => macro(t, set, partition, true);
yea.title = (title, set, partition) => macro.title(title, set, partition, true);

const nay = (t, set, partition) => macro(t, set, partition, false);
nay.title = (title, set, partition) =>
	macro.title(title, set, partition, false);

const _5 = list(range(5));

test(yea, _5, [[0, 1, 2, 3, 4]]);
test(yea, _5, [[0], [1], [2], [3], [4]]);
test(yea, _5, [[0, 1], [2], [3], [4]]);
test(yea, _5, [[2, 1], [3], [0, 4]]);

test(nay, _5, [[], [0], [1], [2], [3], [4]]);
test(nay, _5, [[0], [0], [1], [2], [3], [4]]);
test(nay, _5, [[5], [0], [1], [2], [3], [4]]);
test(nay, _5, [[-1], [0], [1], [2], [3], [4]]);
test(nay, _5, [[2 ** 53 - 1], [0], [1], [2], [3], [4]]);
test(nay, _5, [[-(2 ** 53)], [0], [1], [2], [3], [4]]);

// From Wikipedia: https://en.wikipedia.org/wiki/Partition_of_a_set#Examples
const _3 = [1, 2, 3];

// The set { 1, 2, 3 } has these five partitions (one partition per item):
test(yea, _3, [[1], [2], [3]]);
test(yea, _3, [[1, 2], [3]]);
test(yea, _3, [[1, 3], [2]]);
test(yea, _3, [[1], [2, 3]]);
test(yea, _3, [[1, 2, 3]]);

// The following are not partitions of { 1, 2, 3 }:
test(nay, _3, [[], [1, 3], [2]]);
test(nay, _3, [
	[1, 2],
	[2, 3],
]);
test(nay, _3, [[1], [2]]);
