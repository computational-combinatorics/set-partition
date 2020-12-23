export default function* sequence() {
	yield 1n;
	const a = [1n];
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
