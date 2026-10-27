import { HttpFactory } from '~/repository/factory';
import type { Command, CommandPayload, CommandResponse, Meta, Script, ScriptPayload, ScriptResponse } from '~/types';

export type LibraryKind = 'commands' | 'scripts';

const PAGE_LIMIT = 100;

class LibraryModule extends HttpFactory {
	private RESOURCE = '/api/v1/library';

	async listCommand(): Promise<CommandResponse> {
		return await this.call<CommandResponse>(
			'GET',
			`${this.RESOURCE}/commands?sort=name&page[limit]=100&page[offset]=0`,
			undefined,
		);
	}

	async listScripts(): Promise<ScriptResponse> {
		return this.call(
			'GET',
			`${this.RESOURCE}/scripts?sort=name&page[limit]=100&page[offset]=0`,
			undefined,
		);
	}

	// Fetches every page of the library, like the reference UI's getAll
	async listAll(kind: 'commands'): Promise<Command[]>;
	async listAll(kind: 'scripts'): Promise<Script[]>;
	async listAll(kind: LibraryKind): Promise<Array<Command | Script>> {
		let items: Array<Command | Script> = [];
		let offset = 0;
		let count: number | undefined;
		while (count === undefined || offset < count) {
			const response = await this.call<{ data: Array<Command | Script>; meta?: Meta }>(
				'GET',
				`${this.RESOURCE}/${kind}?sort=name&page[limit]=${PAGE_LIMIT}&page[offset]=${offset}`,
				undefined,
			);
			items = items.concat(response.data);
			count = response.meta?.count || response.data.length;
			offset += PAGE_LIMIT;
		}
		return items;
	}

	async createCommand(command: CommandPayload): Promise<{ data: Command }> {
		return await this.call<{ data: Command }>(
			'POST',
			`${this.RESOURCE}/commands`,
			command,
		);
	}

	async deleteCommand(id: string): Promise<unknown> {
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

	async createScript(script: ScriptPayload): Promise<{ data: Script }> {
		return await this.call<{ data: Script }>('POST', `${this.RESOURCE}/scripts`, script);
	}

	async deleteScript(id: string): Promise<unknown> {
		return await this.call('DELETE', `${this.RESOURCE}/scripts/${id}`, undefined);
	}

	async showScript(id: string): Promise<{ data: Script }> {
		return await this.call<{ data: Script }>('GET', `${this.RESOURCE}/scripts/${id}`, undefined);
	}

	async updateScript(id: string, script: ScriptPayload): Promise<{ data: Script }> {
		return await this.call<{ data: Script }>('PUT', `${this.RESOURCE}/scripts/${id}`, script);
	}
}
export default LibraryModule;
