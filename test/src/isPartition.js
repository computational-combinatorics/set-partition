import test from 'ava';

import {iter, range, list, map} from '@aureooms/js-itertools';

import {isPartition} from '../../src';

const macro = (t, n, partition, is) => {
	t.is(isPartition(range(n), partition), is, 'partition');
	t.is(isPartition(range(n), map(iter, partition)), is, 'map(iter, partition)');
	t.is(
		isPartition(range(n), list(map(iter, partition))),
		is,
		'list(map(iter, partition))',
	);
	t.is(
		isPartition(range(n), list(map((x) => x, partition))),
		is,
		'list(map(x => x, partition))',
	);
};

macro.title = (title, n, partition, is) =>
	`isPartition(${n}, ${JSON.stringify(partition)} = ${is})`;

test(macro, 5, [[0, 1, 2, 3, 4]], true);
test(macro, 5, [[0], [1], [2], [3], [4]], true);
test(macro, 5, [[0, 1], [2], [3], [4]], true);
test(macro, 5, [[2, 1], [3], [0, 4]], true);

test(macro, 5, [[], [0], [1], [2], [3], [4]], false);
test(macro, 5, [[0], [0], [1], [2], [3], [4]], false);
test(macro, 5, [[5], [0], [1], [2], [3], [4]], false);
test(macro, 5, [[-1], [0], [1], [2], [3], [4]], false);
test(macro, 5, [[2 ** 53 - 1], [0], [1], [2], [3], [4]], false);
test(macro, 5, [[-(2 ** 53)], [0], [1], [2], [3], [4]], false);
