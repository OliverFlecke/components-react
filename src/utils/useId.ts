import { useMemo } from 'react';

let idCounter = 0;

function uniqueId(prefix: string = 'id') {
	const id = ++idCounter;
	return prefix + id;
}

function useId(prefix: string = 'id') {
	const id = useMemo(() => uniqueId(prefix), [prefix]);

	return id;
}

export default useId;
