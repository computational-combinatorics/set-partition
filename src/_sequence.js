export default function* _sequence(init) {
	yield init;
	const a = [init];
	while (true) {
		const n = a.length;
		let current = a[n - 1];
		yield current;
		for (let i = 0; i < n; ++i) {
			const next = current + a[i];
			a[i] = current;
			current = next;
		}

		a.push(current);
	}
}
