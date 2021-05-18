import { useEffect } from 'react';
import useDarkMode from './useDarkMode';

function useDarkModeWithClass() {
	const { isDarkMode, setDarkMode } = useDarkMode();

	useEffect(() => {
		if (isDarkMode) {
			if (!document.body.classList.contains('dark')) {
				document.body.classList.add('dark');
			}
		} else {
			document.body.classList.remove('dark');
		}
	}, [isDarkMode]);

	return { isDarkMode, setDarkMode };
}

export default useDarkModeWithClass;
