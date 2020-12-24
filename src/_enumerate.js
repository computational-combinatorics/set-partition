import {list, map} from '@aureooms/js-itertools';

export default function* _enumerate(elements, n = elements.length) {
	if (n === 0) yield [];
	else {
		const last = elements[n - 1];
		for (const partition of _enumerate(elements, n - 1)) {
			yield partition.concat([[last]]);
			for (const part of partition) {
				yield list(map((p) => (p === part ? p.concat([last]) : p), partition));
			}
		}
	}
}
