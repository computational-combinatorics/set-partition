import {nth} from '@iterable-iterator/select';

import _sequence from './_sequence';

const _count = (init, k) => nth(_sequence(init), k);
export default _count;
