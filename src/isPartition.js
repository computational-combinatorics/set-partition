const isPartition = (elements, partition) => {
	const notyetseen = new Set(elements);

	for (const part of partition) {
		let partIsEmptySet = true;
		for (const element of part) {
			partIsEmptySet = false;
			if (notyetseen.has(element)) notyetseen.delete(element);
			else return false;
		}

		if (partIsEmptySet) return false;
	}

	return notyetseen.size === 0;
};

export default isPartition;
