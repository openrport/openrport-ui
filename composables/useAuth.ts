export async function getProvider(apiUrl: string) {
	const response = await fetch(`${apiUrl}/api/v1/auth/provider`, {
		method: 'GET',
	});

	if (!response.ok) {
		throw new Error(`failed to get auth provider: ${response.status}`);
	}

	return response.json();
}
