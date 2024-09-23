import type {
	$Fetch,
	FetchOptions,
} from 'ofetch';

class ApiResponse<T> {
	data: T;
	error: any;
	status: any;
	constructor(data: any, error: any, status: any) {
		this.data = data;
		this.status = status;
		this.error = error;
	}
}
export enum HttpMethod {
	GET = 'GET',
	POST = 'POST',
	PUT = 'PUT',
	DELETE = 'DELETE',
}
class HttpFactory {
	private $fetch: $Fetch;

	constructor(fetcher: $Fetch) {
		this.$fetch = fetcher;
	}

	async call<T>(
		method: string | HttpMethod,
		url: string,
		data?: object,
		fetchOptions?: FetchOptions<'json'>,
	): Promise<T> {
		return this.$fetch<T>(
			url,
			{
				method,
				body: data,
				...fetchOptions,
			},

		);
	}

	async get<T>(
		url: string,
		data?: object,
		fetchOptions?: FetchOptions<'json'>,
	): Promise<T> {
		return this.$fetch(url, {
			method: HttpMethod.GET,
			body: data,
			...fetchOptions,
		});
	}

	async post<T>(
		url: string,
		data?: object,
		fetchOptions?: FetchOptions<'json'>,
	): Promise<T> {
		return this.$fetch(url, {
			method: HttpMethod.POST,
			body: data,
			...fetchOptions,
		});
	}

	async put<T>(
		url: string,
		data?: object,
		fetchOptions?: FetchOptions<'json'>,
	): Promise<T> {
		return this.$fetch(
			url,
			{
				method: HttpMethod.PUT,
				body: data,
				...fetchOptions,
			},
		);
	}

	async delete<T>(
		url: string,
		data?: object,
		fetchOptions?: FetchOptions<'json'>,
	): Promise<T> {
		return this.$fetch(
			url,
			{
				method: HttpMethod.DELETE,
				body: data,
				...fetchOptions,
			},
		);
	}
}
export { HttpFactory, ApiResponse };
