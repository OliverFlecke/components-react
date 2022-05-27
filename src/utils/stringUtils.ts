export function insertClassName(className?: string): string {
	return className === undefined ? '' : ` ${className}`;
}
