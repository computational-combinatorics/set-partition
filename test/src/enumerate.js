import test from 'ava';

import {list} from '@iterable-iterator/list';
import {range} from '@iterable-iterator/range';
import {map} from '@iterable-iterator/map';
import {enumerate} from '../../src';

const macro = (t, n, expected) => {
	const elements = range(n);
	t.deepEqual(list(map(list, enumerate(elements))), expected);
};

macro.title = (title, n, expected) =>
	`enumerate(range(${n})) = ${JSON.stringify(expected)}`;

test(macro, 0, [[]]);
test(macro, 1, [[[0]]]);
test(macro, 2, [[[0], [1]], [[0, 1]]]);
test(macro, 3, [
	[[0], [1], [2]],
	[[0, 2], [1]],
	[[0], [1, 2]],
	[[0, 1], [2]],
	[[0, 1, 2]],
]);
