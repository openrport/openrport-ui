interface ClientAuth {
	id: string;
	password: string;
}

export const useClientAccess = () => {
	const { $api } = useNuxtApp();

	const createClientAccess = async (data: { id: string; password: string }) => {
		const authClient: ClientAuth = {
			id: data.id,
			password: data.password,
		};
		await $api.clientAuth.create(authClient);
		return true;
	};

	return {
		createClientAccess,
	};
};
