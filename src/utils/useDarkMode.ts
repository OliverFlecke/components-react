import { useCallback, useState } from 'react';

function useDarkMode() {
	const [isDarkMode, setState] = useState(
		localStorage.theme === 'dark' ||
			(!('theme' in localStorage) &&
				window.matchMedia('(prefers-color-scheme: dark)').matches)
			? true
			: false
	);

	const setDarkMode = useCallback(isDark => {
		localStorage.theme = isDark ? 'dark' : 'light';
		setState(isDark);
	}, []);

	return { isDarkMode, setDarkMode };
}

export default useDarkMode;
