<template>
	<ActionDialog
		v-model="open"
		title="Edit RDP File"
		size="w-full max-w-3xl"
	>
		<div class="p-4">
			<textarea
				v-model="template"
				class="h-[60vh] w-full rounded border border-gray-200 bg-white p-2 font-mono text-sm text-gray-900 focus:outline-0 dark:border-gray-700 dark:bg-gray-950 dark:text-gray-100"
				spellcheck="false"
			/>
		</div>
		<template #actions>
			<button
				v-if="template !== RDP_FILE_TEMPLATE"
				class="mr-auto rounded bg-gray-100 px-4 py-2 text-sm text-gray-800 hover:bg-gray-200"
				type="button"
				@click="template = RDP_FILE_TEMPLATE"
			>
				Reset to defaults
			</button>
			<button
				class="ml-2 rounded bg-primary px-4 py-2 text-sm text-white hover:opacity-80 disabled:opacity-50"
				:disabled="template === saved"
				type="button"
				@click="save"
			>
				Save
			</button>
		</template>
	</ActionDialog>
</template>

<script setup lang="ts">
import ActionDialog from '~/components/custom/dialog/ActionDialog.vue';
import { RDP_FILE_TEMPLATE } from '~/constants/settings';

const ONE_YEAR = 60 * 60 * 24 * 365;

const open = defineModel<boolean>({ required: true });

// Same "rdp-template" cookie as the reference; it only exists when the template was customized
const cookie = useCookie<string | null>('rdp-template', { maxAge: ONE_YEAR, sameSite: 'lax' });
const saved = computed(() => cookie.value || RDP_FILE_TEMPLATE);
const template = ref(saved.value);

watch(open, (isOpen) => {
	if (isOpen) {
		template.value = saved.value;
	}
});

const save = () => {
	cookie.value = template.value === RDP_FILE_TEMPLATE ? null : template.value;
	open.value = false;
};
</script>
