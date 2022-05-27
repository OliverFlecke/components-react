import { useEffect } from 'react';

export default function useOnOutsideMouseDown<T extends HTMLElement>(
	ref: React.RefObject<T>,
	action: () => void
) {
	useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
			if (ref.current && !ref.current.contains(event.target as HTMLElement)) {
				action();
			}
		}

		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [action, ref]);
}
