import { HttpFactory } from '~/repository/factory';
import type { Schedule, SchedulePayload } from '~/types';

class SchedulesModule extends HttpFactory {
	private RESOURCE = '/api/v1/schedules';

	async create(payload: SchedulePayload): Promise<{ data: Schedule }> {
		return this.call<{ data: Schedule }>('POST', this.RESOURCE, payload);
	}

	async update(id: string, payload: SchedulePayload): Promise<{ data: Schedule }> {
		return this.call<{ data: Schedule }>('PUT', `${this.RESOURCE}/${id}`, payload);
	}
}

export default SchedulesModule;
