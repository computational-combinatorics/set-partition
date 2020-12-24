import test from 'ava';

import {enumerate, _count, isPartition} from '../../src';

test('Check partitions of [7]', (t) => {
	const set = [1, 2, 3, 4, 5, 6, 7];
	const partitions = [...enumerate(set)];
	t.is(partitions.length, _count(1, set.length));
	for (const partition of partitions) {
		t.true(isPartition(set, partition));
	}
});
