import { HttpFactory } from '~/repository/factory';
import type { Command, CommandPayload, CommandResponse } from '~/types';

class LibraryModule extends HttpFactory {
	private RESOURCE = '/api/v1/library';

	async listCommand(): Promise<CommandResponse> {
		return await this.call<CommandResponse>(
			'GET',
			`${this.RESOURCE}/commands`,
			undefined,
		);
	}

	async createCommand(command: CommandPayload): Promise<{ data: Command }> {
		return await this.call<{ data: Command }>(
			'POST',
			`${this.RESOURCE}/commands`,
			command,
		);
	}

	async deleteCommand(id: string): Promise<any> {
		return await this.call('DELETE', `${this.RESOURCE}/commands/${id}`, undefined);
	};

	async showCommand(id: string): Promise<{ data: Command }> {
		return await this.call<{ data: Command }>(
			'GET',
			`${this.RESOURCE}/commands/${id}`,
			undefined,
		);
	}

	async updateCommand(id: string, command: CommandPayload): Promise<{ data: Command }> {
		return await this.call<{ data: Command }>(
			'PUT',
			`${this.RESOURCE}/commands/${id}`,
			command,
		);
	}
}
export default LibraryModule;
