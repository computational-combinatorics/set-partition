import {nth} from '@iterable-iterator/select';

import _sequence from './_sequence.js';

const _count = (init, k) => nth(_sequence(init), k);
export default _count;
