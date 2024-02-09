import test from 'ava';

import {list} from '@iterable-iterator/list';
import {take} from '@iterable-iterator/slice';

import {sequence, _sequence} from '#module';

test('sequence()', (t) => {
	const expected = [1n, 1n, 2n, 5n, 15n, 52n, 203n];
	const n = expected.length;
	t.deepEqual(list(take(sequence(), n)), expected);
});

test('_sequence(1)', (t) => {
	const expected = [1, 1, 2, 5, 15, 52, 203];
	const n = expected.length;
	t.deepEqual(list(take(_sequence(1), n)), expected);
});
