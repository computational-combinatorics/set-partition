import test from 'ava';

import {count} from '../../src';

const macro = (t, k, Bk) => {
	t.is(count(k), Bk);
};

macro.title = (title, k, Bk) => `count(${k}) = ${Bk}`;

test(macro, 0, 1n);
test(macro, 1, 1n);
test(macro, 2, 2n);
test(macro, 3, 5n);
test(macro, 4, 15n);
test(macro, 5, 52n);
test(macro, 6, 203n);
test(macro, 26, 49631246523618756274n);
