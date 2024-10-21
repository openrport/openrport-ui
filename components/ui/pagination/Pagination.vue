<template>
	<div class="relative z-0 -mx-4 mt-2 sm:-mx-6 lg:-mx-8">
		<div class="inline-block min-w-full align-middle sm:px-6 lg:px-8">
			<div class="border-t border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-950">
				<div>
					<div class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-600 sm:pl-6">
						<div class="flex w-full items-center justify-between">
							<PaginationInfo
								:page="page"
								:items-per-page="itemsPerPage"
								:total-items="totalItems"
								:current-page-item-count="currentPageItemCount"
							/>
							<div class="flex-1" />
							<PaginationNavigation
								:page="page"
								:disabled-next="disabledNext"
								@previous="previous"
								@next="next"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import PaginationInfo from './PaginationInfo.vue';
import PaginationNavigation from './PaginationNavigation.vue';

const props = defineProps({
	page: {
		type: Number,
		required: true,
	},
	itemsPerPage: {
		type: Number,
		default: 20,
	},
	totalItems: {
		type: Number,
		required: true,
	},
	currentPageItemCount: {
		type: Number,
		required: true,
	},
});
const emit = defineEmits(['previous', 'next']);
const disabledNext = computed(() => {
	return (props.page + 1) * props.itemsPerPage >= props.totalItems;
});

const previous = () => {
	if (props.page > 0) {
		emit('previous');
	}
};

const next = () => {
	if (!disabledNext.value) {
		emit('next');
	}
};
</script>
