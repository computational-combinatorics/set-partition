import {list} from '@aureooms/js-itertools';

import _enumerate from './_enumerate';

export default function enumerate(elements) {
	return _enumerate(list(elements));
}
