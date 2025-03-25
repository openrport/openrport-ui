<template>
	<div class="flex max-h-[1720px] min-h-[480px] flex-1 flex-col overflow-scroll rounded-md border border-gray-100 mt-5">
		<div class="flex items-center justify-between p-4">
			<span class="text-sm font-bold text-slate-700 dark:text-slate-50">Result</span>
			<!---->
		</div>
		<div class="bg-theme-dark">
			<div class="flex flex-col border-t border-gray-100">
				<div class="flex justify-between">
					<div class="flex flex-1" /><!---->
				</div>
				<div class="">
					<div class="flex flex-col rounded-sm bg-white text-gray-700 shadow-md dark:bg-black dark:text-white">
						<div
							v-if="activeResult?.status == 'failed'"
							class="flex border-b border-gray-100 p-4"
						>
							<div class="inline-flex w-max cursor-pointer">
								<div class="flex shrink-0 pr-6 text-red-600">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="22px"
										height="22px"
										viewBox="0 0 24 24"
										class="icon"
									>
										<g
											fill="none"
											stroke="currentColor"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
										><circle
												cx="12"
												cy="12"
												r="9"
											/>
											<path d="M12 15v-3m0-3v0" />
										</g>
									</svg>
								</div>
							</div><div class="flex flex-col">
								<p class="text-sm text-gray-700">
									{{ activeResult.error }}
								</p><span class="text-xs text-red-600">Error</span>
							</div>
						</div>
						<div
							v-if="activeResult?.status == 'successful'"
							class="flex justify-between p-4"
						>
							<div class="inline-flex w-max cursor-pointer">
								<div class="flex shrink-0 pr-6 text-green-600">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="22px"
										height="22px"
										viewBox="0 0 256 256"
										class="icon"
									><path
										fill="currentColor"
										d="m120 137l-72 64a12 12 0 1 1-16-18l61.91-55L32 73a12 12 0 1 1 16-18l72 64a12 12 0 0 1 0 18Zm96 43h-96a12 12 0 0 0 0 24h96a12 12 0 0 0 0-24Z"
									/></svg>
								</div>
							</div>
							<div class="flex flex-1">
								<div class="min-h-[60px] text-xs">
									<prism-editor
										v-if="activeResult != null"
										v-model="codeEdit"
										class="my-editor p-2"
										:readonly="true"
										:highlight="highlighter"
									/>
								</div>
							</div>
						</div>
						<div
							v-if="activeResult?.status == 'failed' "
							class="flex justify-between p-4"
						>
							<div class="inline-flex w-max cursor-pointer">
								<div class="flex shrink-0 pr-6 text-red-600">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="22px"
										height="22px"
										viewBox="0 0 24 24"
										class="icon"
									>
										<g
											fill="none"
											stroke="currentColor"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
										>
											<circle
												cx="12"
												cy="12"
												r="9"
											/>
											<path d="M12 15v-3m0-3v0" />
										</g>
									</svg>
								</div>
							</div>
							<div class="flex flex-1">
								<div class="min-h-[60px] text-xs">
									<prism-editor
										v-if="activeResult != null"
										v-model="codeEdit"
										class="my-editor p-2"
										:readonly="true"
										:highlight="highlighter"
									/>
								</div>
							</div>
						</div>
						<div
							v-if="activeResult?.status == 'failed' && activeResult.error"
							class="ml-11 p-4 pt-0"
						>
							<div class="mt-1 rounded p-2.5 bg-red-50">
								<div class="flex items-center">
									<div class="flex-shrink-0">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="24px"
											height="24px"
											viewBox="0 0 24 24"
											class="icon text-red-400"
										><g fill="currentColor"><path d="M4 12a8 8 0 1 1 16 0a8 8 0 0 1-16 0zm8-10C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2zm-1.793 6.793a1 1 0 0 0-1.414 1.414L10.586 12l-1.793 1.793a1 1 0 1 0 1.414 1.414L12 13.414l1.793 1.793a1 1 0 0 0 1.414-1.414L13.414 12l1.793-1.793a1 1 0 0 0-1.414-1.414L12 10.586l-1.793-1.793z" /></g></svg>
									</div><div class="ml-3 mt-1 flex-grow">
										<p class="text-sm font-medium text-red-800">
											{{ activeResult.error }}
										</p>
									</div><!---->
								</div>
							</div>
						</div>

						<div class="flex items-center border-t border-gray-100 p-4">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="22px"
								height="22px"
								viewBox="0 0 24 24"
								class="icon mr-4 text-gray-700 dark:text-slate-400"
							>
								<path
									fill="currentColor"
									d="M13.875 22h-3.75q-.375 0-.65-.25t-.325-.625l-.3-2.325q-.325-.125-.613-.3t-.562-.375l-2.175.9q-.35.125-.7.025t-.55-.425L2.4 15.4q-.2-.325-.125-.7t.375-.6l1.875-1.425Q4.5 12.5 4.5 12.337v-.674q0-.163.025-.338L2.65 9.9q-.3-.225-.375-.6t.125-.7l1.85-3.225q.175-.35.537-.438t.713.038l2.175.9q.275-.2.575-.375t.6-.3l.3-2.325q.05-.375.325-.625t.65-.25h3.75q.375 0 .65.25t.325.625l.3 2.325q.325.125.613.3t.562.375l2.175-.9q.35-.125.7-.025t.55.425L21.6 8.6q.2.325.125.7t-.375.6l-1.875 1.425q.025.175.025.338v.674q0 .163-.05.338l1.875 1.425q.3.225.375.6t-.125.7l-1.85 3.2q-.2.325-.563.438t-.712-.013l-2.125-.9q-.275.2-.575.375t-.6.3l-.3 2.325q-.05.375-.325.625t-.65.25Zm-1.825-6.5q1.45 0 2.475-1.025T15.55 12q0-1.45-1.025-2.475T12.05 8.5q-1.475 0-2.488 1.025T8.55 12q0 1.45 1.012 2.475T12.05 15.5Zm0-2q-.625 0-1.063-.438T10.55 12q0-.625.438-1.063t1.062-.437q.625 0 1.063.438T13.55 12q0 .625-.438 1.063t-1.062.437ZM12 12Zm-1 8h1.975l.35-2.65q.775-.2 1.438-.588t1.212-.937l2.475 1.025l.975-1.7l-2.15-1.625q.125-.35.175-.737T17.5 12q0-.4-.05-.787t-.175-.738l2.15-1.625l-.975-1.7l-2.475 1.05q-.55-.575-1.212-.962t-1.438-.588L13 4h-1.975l-.35 2.65q-.775.2-1.437.588t-1.213.937L5.55 7.15l-.975 1.7l2.15 1.6q-.125.375-.175.75t-.05.8q0 .4.05.775t.175.75l-2.15 1.625l.975 1.7l2.475-1.05q.55.575 1.213.963t1.437.587L11 20Z"
								/>
							</svg>
							<div
								v-if="activeResult"
								class="pl-2 text-sm"
							>
								<span class="text-gray-400 dark:text-slate-50">PID </span><span class="text-black">{{ activeResult.pid }}</span>
							</div>
							<div class="flex items-center pl-2 text-sm text-gray-700 dark:text-slate-500">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16px"
									height="16px"
									viewBox="0 0 24 24"
									class="icon mr-1"
								>
									<path
										fill="currentColor"
										d="M12 20c4.4 0 8-3.6 8-8s-3.6-8-8-8s-8 3.6-8 8s3.6 8 8 8m0-18c5.5 0 10 4.5 10 10s-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2m5 11.9l-.7 1.3l-5.3-2.9V7h1.5v4.4l4.5 2.5Z"
									/>
								</svg>
								<span>{{ useDateFormat(activeResult?.started_at, 'YYYY-MM-DD hh:mm:ss') }}</span>
							</div>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24px"
								height="24px"
								viewBox="0 0 24 24"
								class="icon pl-2 text-gray-700 dark:text-slate-500"
							><path
								fill="currentColor"
								d="M13.3 17.275q-.3-.3-.288-.725t.313-.725L16.15 13H5q-.425 0-.713-.288T4 12q0-.425.288-.713T5 11h11.15L13.3 8.15q-.3-.3-.3-.713t.3-.712q.3-.3.713-.3t.712.3L19.3 11.3q.15.15.213.325t.062.375q0 .2-.063.375t-.212.325l-4.6 4.6q-.275.275-.687.275t-.713-.3Z"
							/></svg>
							<div class="flex items-center pl-2 text-sm text-gray-700 dark:text-slate-500">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="18px"
									height="18px"
									viewBox="0 0 256 256"
									class="icon mr-1"
								><path
									fill="currentColor"
									d="M136 80v43.47l36.12 21.67a8 8 0 0 1-8.24 13.72l-40-24A8 8 0 0 1 120 128V80a8 8 0 0 1 16 0Zm88-24a8 8 0 0 0-8 8v18c-6.35-7.36-12.83-14.45-20.12-21.83a96 96 0 1 0-2 137.7a8 8 0 0 0-11-11.64a80 80 0 1 1 1.66-114.83c8.14 8.24 15.27 16.18 22.46 24.6h-23a8 8 0 0 0 0 16h40a8 8 0 0 0 8-8V64a8 8 0 0 0-8-8Z"
								/></svg><span>{{ useDateFormat(activeResult?.finished_at, 'YYYY-MM-DD hh:mm:ss') }}</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { PrismEditor } from 'vue-prism-editor';
import { highlight } from 'prismjs/components/prism-core';
import prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-vim';
import { useDateFormat } from '@vueuse/core';
import type { CommandResult } from '~/types';

const props = defineProps({
	code: {
		type: String,
	},
	language: { type: String, default: 'vim' },
	results: {
		type: Array as PropType<CommandResult[]>,
		default: () => [],
	},
});
onMounted(() => {
	prism.highlightAll();
});
const codeEdit = ref(props.code);
const activeResult = ref<CommandResult | null>(null);
watch(() => props.results, (newData) => {
	const res = newData.find(item => item.status != undefined);
	if (res) {
		activeResult.value = res;
		codeEdit.value = res?.status == 'successful' ? res.result.stdout : res.result.stderr;
	}
}, { deep: true });
const highlighter = (code: string) => {
	return highlight(code, prism.languages.vim);
};
</script>
