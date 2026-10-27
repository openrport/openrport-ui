import { HttpFactory } from '~/repository/factory';
import type { CommandResult, Meta, Schedule, ScheduleExecution, ScheduleExecutionJob, SchedulePayload } from '~/types';

interface Paged<T> {
	data: T[];
	meta: Meta;
}

class SchedulesModule extends HttpFactory {
	private RESOURCE = '/api/v1/schedules';

	async list(offset = 0, limit = 20): Promise<Paged<Schedule>> {
		// The schedules list nests the page inside "data": { data: { data: [...], meta } }
		const response = await this.call<{ data: Paged<Schedule> }>(
			'GET',
			`${this.RESOURCE}?page[limit]=${limit}&page[offset]=${offset}`,
			undefined,
		);
		return response.data;
	}

	async show(id: string): Promise<{ data: Schedule }> {
		return this.call<{ data: Schedule }>('GET', `${this.RESOURCE}/${id}`, undefined);
	}

	async create(payload: SchedulePayload): Promise<{ data: Schedule }> {
		return this.call<{ data: Schedule }>('POST', this.RESOURCE, payload);
	}

	async update(id: string, payload: SchedulePayload): Promise<{ data: Schedule }> {
		return this.call<{ data: Schedule }>('PUT', `${this.RESOURCE}/${id}`, payload);
	}

	async delete(id: string): Promise<unknown> {
		return this.call('DELETE', `${this.RESOURCE}/${id}`, undefined);
	}

	async executions(scheduleId: string, offset = 0, limit = 20): Promise<Paged<ScheduleExecution>> {
		return this.call<Paged<ScheduleExecution>>(
			'GET',
			`/api/v1/commands?page[limit]=${limit}&page[offset]=${offset}&filter[schedule_id]=${scheduleId}`,
			undefined,
		);
	}

	async executionJobs(jid: string, offset = 0, limit = 20): Promise<Paged<ScheduleExecutionJob>> {
		return this.call<Paged<ScheduleExecutionJob>>(
			'GET',
			`/api/v1/commands/${jid}/jobs?page[limit]=${limit}&page[offset]=${offset}&fields[commands]=jid,status,started_at,client_id`,
			undefined,
		);
	}

	async clientJob(clientId: string, jid: string): Promise<{ data: CommandResult }> {
		return this.call<{ data: CommandResult }>('GET', `/api/v1/clients/${clientId}/commands/${jid}`, undefined);
	}
}

export default SchedulesModule;
