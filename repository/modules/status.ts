import { HttpFactory, HttpMethod } from '~/repository/factory';

class StatusModule extends HttpFactory {
	private RESOURCE = 'api/v1/status';

	async show(): Promise<any> {
		return useAsyncData(() => {
			return this.call(
				HttpMethod.GET,
				`${this.RESOURCE}`,
				undefined,
			);
		});
	}
}
export default StatusModule;
