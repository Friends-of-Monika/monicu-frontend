const sizeSuffixes = ['', ' KB', ' MB', ' GB', ' TB', ' PB', ' EB', ' ZB', ' YB'];
const numberSuffixes = ['', 'K', 'M', 'B', 'T'];

function formatWithSuffix(n: number, suffixes: Array<string>, k: number, decimals = 2): string {
	if (n === 0) return '0';
	const dm = decimals < 0 ? 0 : decimals;
	const i = Math.floor(Math.log(n) / Math.log(k));
	return parseFloat((n / Math.pow(k, i)).toFixed(dm)) + suffixes[i];
}

export function formatFileSize(n: number, decimals = 2): string {
	return formatWithSuffix(n, sizeSuffixes, 1024, decimals);
}

export function formatNumber(n: number, decimals = 2): string {
	return formatWithSuffix(n, numberSuffixes, 1000, decimals);
}
