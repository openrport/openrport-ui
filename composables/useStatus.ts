export const useStatus = async () => {
	const { value: config } = useRuntimeConfig();

	try {
		const result = await useApiFetch('api/v1/status');
		return result.data;
	}
	catch (error) {
		console.log(error);
	}
};
