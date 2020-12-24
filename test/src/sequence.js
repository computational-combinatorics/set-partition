import test from 'ava';

import {list, take} from '@aureooms/js-itertools';

import {sequence, _sequence} from '../../src';

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
