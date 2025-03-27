export const getHostFromUrl = (fullUrl: string): string | null => {
	try {
		const url = new URL(fullUrl);
		return url.host;
	}
	catch (error) {
		console.error('Invalid URL provided:', fullUrl);
		console.log(error);
		return null;
	}
};
