import { useCallback, useState } from 'react';

function useDarkMode() {
	const [isDarkMode, setState] = useState(initialState());

	const setDarkMode = useCallback(isDark => {
		if (typeof window !== 'undefined') {
			localStorage.theme = isDark ? 'dark' : 'light';
		}
		setState(isDark);
	}, []);

	return { isDarkMode, setDarkMode };
}

export default useDarkMode;

function initialState(): boolean {
	if (typeof window === 'undefined') return false;
	if ('theme' in localStorage) return localStorage.theme === 'dark';

	return window.matchMedia('(prefers-color-scheme: dark)').matches;
}
