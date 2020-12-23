import test from 'ava';

import {list, take} from '@aureooms/js-itertools';

import {sequence} from '../../src';

test('sequence', (t) => {
	const n = 7;
	const expected = [1n, 1n, 2n, 5n, 15n, 52n, 203n];
	t.deepEqual(list(take(sequence(), n)), expected);
});
