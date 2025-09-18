<template>
	<BaseModal v-model="internalIsOpen">
		<div class="mx-auto flex h-full max-h-full w-full items-center justify-center sm:w-[70%]">
			<div class="relative max-h-full transform rounded bg-theme text-left text-theme-inverted shadow-xl transition-all sm:w-full">
				<!-- Header -->
				<div class="flex items-center justify-between border-b border-theme-light bg-theme p-3">
					<h3 class="mr-2 font-medium leading-6 text-theme-inverted">
						Select columns
					</h3>
					<button
						type="button"
						class="inline-flex items-center duration-200 focus:outline-none rounded-full p-3 primary-text bg-theme"
						@click="close"
					>
						<span
							class="flex items-center justify-center"
							style="width: 6px; height: 6px;"
						>
							<div class="flex items-center">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="18px"
									height="18px"
									viewBox="0 0 24 24"
									class="icon"
								>
									<path
										fill="none"
										stroke="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M12 12L7 7m5 5l5 5m-5-5l5-5m-5 5l-5 5"
									/>
								</svg>
							</div>
						</span>
					</button>
				</div>

				<!-- Body -->
				<div class="modal-height h-full max-h-full p-0 overflow-y-auto">
					<div class="p-4">
						<div
							v-for="column in availableColumns"
							:key="column.key"
							class="flex flex-col my-2"
						>
							<label class="flex cursor-pointer select-none items-center justify-start text-sm text-theme-label">
								<input
									v-model="selectedColumnsInternal"
									type="checkbox"
									:value="column.key"
									class="mr-2 h-[16px] w-[16px] cursor-pointer rounded border-none bg-transparent ring-2 ring-gray-300 focus:ring-gray-300 focus:ring-offset-0 primary-text"
								>
								{{ column.label }}
							</label>
						</div>
					</div>
				</div>

				<!-- Footer -->
				<div class="flex items-center justify-end bg-theme-dark px-3 py-2 hover:bg-theme-dark/40">
					<button
						class="hover:opacity-80 px-4 py-2 text-sm text-white rounded inline-flex items-center duration-200 focus:outline-none primary plain"
						type="button"
						@click="close"
					>
						Cancel
					</button>
				</div>
			</div>
		</div>
	</BaseModal>
</template>

<script setup lang="ts">
import { BaseModal } from '~/components/ui/base-modal';

interface Column {
	key: string;
	label: string;
}

interface Props {
	modelValue: boolean;
	selectedColumns: string[];
	availableColumns: Column[];
}

interface Emits {
	(e: 'update:modelValue', value: boolean): void;
	(e: 'update:selectedColumns', value: string[]): void;
}

const props = defineProps<Props>();
const emit = defineEmits<Emits>();

const internalIsOpen = ref(props.modelValue);
const selectedColumnsInternal = ref<string[]>([...props.selectedColumns]);

// Watch for modelValue changes
watch(() => props.modelValue, (newValue) => {
	internalIsOpen.value = newValue;
	// When opening the modal, sync with current selected columns
	if (newValue) {
		selectedColumnsInternal.value = [...props.selectedColumns];
	}
});

// Watch for selectedColumns prop changes
watch(() => props.selectedColumns, (newValue) => {
	selectedColumnsInternal.value = [...newValue];
});

// Watch internal modal state
watch(internalIsOpen, (newValue) => {
	emit('update:modelValue', newValue);
});

// Watch internal selected columns and emit changes
watch(selectedColumnsInternal, (newValue) => {
	emit('update:selectedColumns', newValue);
}, { deep: true });

const close = () => {
	internalIsOpen.value = false;
};
</script>

<style scoped>
.modal-height {
	max-height: 400px;
}
</style>
