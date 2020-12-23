import {nth} from '@aureooms/js-itertools';

import sequence from './sequence';

const count = (k) => nth(sequence(), k);
export default count;
