<template>
	<ActionDialog
		v-model="open"
		title="Audit details"
		size="w-full max-w-5xl"
	>
		<div class="max-h-[75vh] space-y-8 overflow-y-auto p-4">
			<div
				v-for="table in tables"
				:key="table.title"
			>
				<h4
					v-if="table.title !== 'Audit'"
					class="mb-3 font-semibold"
				>
					{{ table.title }}
				</h4>
				<table class="w-full rounded border border-gray-200 text-left text-sm">
					<tbody>
						<tr
							v-for="row in table.rows"
							:key="row.key"
							class="border-t border-gray-200 align-top first:border-t-0"
						>
							<td class="w-48 px-4 py-2.5">
								{{ row.key }}
							</td>
							<td class="px-4 py-2.5 text-right break-all">
								<pre
									v-if="CODE_KEYS.includes(row.key)"
									class="whitespace-pre-wrap rounded bg-gray-50 p-2 text-left font-mono text-xs dark:bg-slate-900"
								>{{ row.value }}</pre>
								<span v-else>{{ row.value }}</span>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</ActionDialog>
</template>

<script setup lang="ts">
import ActionDialog from '~/components/custom/dialog/ActionDialog.vue';
import type { AuditLog } from '~/types';

interface Row {
	key: string;
	value: string;
}

const props = defineProps<{
	audit: AuditLog | null;
}>();

const open = defineModel<boolean>({ required: true });

const CODE_KEYS = ['command', 'stdout', 'stderr'];
const AUDIT_KEYS: Array<keyof AuditLog> = ['timestamp', 'username', 'remote_ip', 'application', 'action', 'affected_id', 'client_id', 'client_hostname'];

// Same flattening as the reference: nested objects are inlined, arrays joined, empty values skipped
const flatten = (value: Record<string, unknown>, rows: Row[] = []) => {
	Object.entries(value).forEach(([key, entry]) => {
		if (Array.isArray(entry)) {
			if (entry.length) {
				rows.push({ key, value: entry.join(',') });
			}
		}
		else if (entry && typeof entry === 'object') {
			flatten(entry as Record<string, unknown>, rows);
		}
		else if (entry) {
			rows.push({ key, value: String(entry) });
		}
	});
	return rows;
};

const parse = (json: string) => {
	try {
		return json ? JSON.parse(json) : {};
	}
	catch {
		return { raw: json };
	}
};

const tables = computed(() => {
	const audit = props.audit;
	if (!audit) {
		return [];
	}
	const main = Object.fromEntries(AUDIT_KEYS.map(key => [key, audit[key]]));
	return [
		{ title: 'Audit', rows: flatten(main) },
		{ title: 'Request', rows: flatten(parse(audit.request)) },
		{ title: 'Response', rows: flatten(parse(audit.response)) },
	].filter(table => table.rows.length);
});
</script>
