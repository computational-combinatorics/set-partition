import test from 'ava';

import {count, _count} from '../../src/index.js';

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

const _macro = (t, k, Bk) => {
	t.is(_count(1, k), Bk);
};

_macro.title = (title, k, Bk) => `_count(1, ${k}) = ${Bk}`;

test(_macro, 0, 1);
test(_macro, 1, 1);
test(_macro, 2, 2);
test(_macro, 3, 5);
test(_macro, 4, 15);
test(_macro, 5, 52);
test(_macro, 6, 203);
