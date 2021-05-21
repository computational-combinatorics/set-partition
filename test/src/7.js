import test from 'ava';

import totalOrder from 'total-order';
import {RedBlackTree} from '@aureooms/js-red-black-tree';

import {enumerate, _count, isPartition} from '../../src/index.js';

test('Check partitions of [7]', (t) => {
	const set = [1, 2, 3, 4, 5, 6, 7];
	const partitions = [...enumerate(set)];

	// Check that number of partition is correct
	t.is(partitions.length, _count(1, set.length));

	// Check that each item is a partition
	for (const partition of partitions) {
		t.true(isPartition(set, partition));
	}

	// Check that partitions are pairwise distinct
	const seen = new RedBlackTree(totalOrder);
	for (const partition of partitions) {
		t.false(seen.has(partition));
		seen.add(partition);
	}
});
