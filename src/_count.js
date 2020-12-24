import {nth} from '@aureooms/js-itertools';

import _sequence from './_sequence';

const _count = (init, k) => nth(_sequence(init), k);
export default _count;
