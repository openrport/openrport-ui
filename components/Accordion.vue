<template>
	<!--    <div> -->
	<!--        <div class="accordion"> -->
	<!--            <div class="accordion-item mx-2 border-0" v-for="(item, index) in items" :key="index"> -->
	<!--                <div class="accordion-header rounded text-primary" :id="'heading-' + index"> -->
	<!--                    <button class="accordion-button p-2" :class="{ collapsed: !isActive(index)}"  data-toggle="collapse" -->
	<!--                        :data-target="'#collapse-' + index" aria-expanded="true" :aria-controls="'collapse' + index" -->
	<!--                        @click="toggle(index, item.id)"> -->
	<!--                        <span class="nav-link-icon d-md-none d-lg-inline-block"> -->
	<!--                            <IconFolder class="text-primary" /> -->
	<!--                        </span> -->
	<!--                        <slot name="title" :item="item">{{ item.title }}</slot> -->
	<!--                    </button> -->
	<!--                </div> -->

	<!--                <div :id="'collapse-' + index" class="collapse" :class="{ 'show': isActive(index) }" -->
	<!--                    :aria-labelledby="'heading-' + index" data-parent="#accordion"> -->
	<!--                    <div class="accordion-body py-2 pe-0"> -->
	<!--                        <div class="list-group list-group-flush"> -->
	<!--                            <RouterLink v-for="(device, i) in deviceList" :key="i" :to="`/dashboard/${device.id}`" class="list-group-item list-group-item-action p-0 rounded"> -->
	<!--                                    <div class="tw-mt-2 tw-flex tw-min-h-10 tw-w-full tw-max-w-full tw-flex-100 tw-cursor-pointer tw-items-center tw-overflow-hidden tw-rounded tw-border tw-border-r-[3px] tw-px-1 tw-py-1 tw-pr-2" :class="{ 'border-r-error' : device.disconnected_at !== null , 'border-r-success': device.disconnected_at === null}"> -->
	<!--                                        <IconBrandDebian color="red" /> -->
	<!--                                        {{device.name}} -->
	<!--                                    </div> -->

	<!--                            </RouterLink> -->
	<!--                        </div> -->
	<!--                    </div> -->
	<!--                </div> -->
	<!--            </div> -->
	<!--        </div> -->
	<!--    </div> -->
	<div class="absolute inset-x-0 bottom-0 top-32">
		<div
			v-for="(item, index) in items"
			:key="index"
			class="w-full px-1"
		>
			<div
				:class="[
					'relative z-20 flex min-h-10 cursor-pointer items-center justify-between gap-1 rounded py-1 pl-2 pr-2',
					isActive(index) ? 'bg-primary text-white hover:bg-primary' : 'text-vtd-primary-500 hover:bg-slate-200 dark:text-vtd-primary-400 hover:dark:bg-slate-800',
				]"
				@click="toggle(index, item.id)"
			>
				<div class="absolute left-1.5 top-1.5">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="20px"
						height="20px"
						viewBox="0 0 24 24"
						class="icon text-current"
					>
						<path
							fill="currentColor"
							d="M4 20q-.825 0-1.413-.588T2 18V6q0-.825.588-1.413T4 4h5.175q.4 0 .763.15t.637.425L12 6h8q.825 0 1.413.588T22 8v10q0 .825-.588 1.413T20 20H4ZM4 6v12h16V8h-8.825l-2-2H4Zm0 0v12V6Z"
						/>
					</svg>
				</div>

				<div class="info w-full pl-6">
					<div class="inline-flex w-max cursor-pointer min-w-full">
						<div class="text-sm font-normal text-current">
							{{ item.title }}
						</div>
					</div>
				</div>

				<div
					v-if="isActive(index)"
					class="relative flex w-6 items-center justify-center pt-0.5"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24px"
						height="24px"
						viewBox="0 0 24 24"
						class="icon rotate-180 transform text-current transition-transform"
					>
						<path
							fill="currentColor"
							d="M6.7 14.7q-.275-.275-.275-.7t.275-.7l4.6-4.6q.15-.15.325-.212T12 8.425q.2 0 .388.075t.312.2l4.6 4.6q.275.275.275.7t-.275.7q-.275.275-.7.275t-.7-.275L12 10.8l-3.9 3.9q-.275.275-.7.275t-.7-.275Z"
						/>
					</svg>
				</div>
			</div>
			<div
				v-if="isActive(index)"
				class="relative z-10 w-full pb-2 pl-5 after:absolute after:-top-4 after:bottom-0 after:left-3 after:flex after:border-l-2 after:border-dashed after:border-primary after:content-['']"
			>
				<div
					class="absolute inset-0 -top-4 z-30 flex items-center justify-center bg-white/50 backdrop-blur-sm"
					style="display: none;"
				>
					<div class="flex w-full justify-center">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="32px"
							height="32px"
							viewBox="0 0 24 24"
							class="icon primary-text animate-[spin_0.6s_linear_infinite]"
						>
							<path
								fill="currentColor"
								d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
								opacity=".25"
							/>
							<path
								fill="currentColor"
								d="M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z"
							>
								<animateTransform
									attributeName="transform"
									dur="0.75s"
									repeatCount="indefinite"
									type="rotate"
									values="0 12 12;360 12 12"
								/>
							</path>
						</svg>
					</div>
				</div>

				<RouterLink
					v-for="(device, i) in deviceList"
					v-if="listStyle === 1"
					:to="`/dashboard/${device.id}`"
					class="mt-2 flex min-h-10 w-full max-w-full flex-100 cursor-pointer items-center overflow-hidden rounded border border-r-[3px] px-1 py-1 pr-2 bg-theme"
					:class="{ 'border-r-error': device.disconnected_at !== null, 'border-r-success': device.disconnected_at === null }"
				>
					<div
						class="client-icon ml-1 mr-2 flex w-10 items-center justify-center"
						style="opacity: 1; transform: scale(0.8);"
					>
						<ClientIcon
							:os="device.os"
							:os_family="device.os_family"
							:os_full_name="device.os_full_name"
							:os_kernel="device.os_kernel"
						/>
					</div>
					<div class="flex flex-1 flex-col flex-wrap text-vtd-primary-500 dark:text-vtd-primary-400">
						<div class="truncate text-sm font-normal">
							{{ device.name }}
						</div><!----><!---->
					</div>
				</RouterLink>

				<RouterLink
					v-for="(device, i) in deviceList"
					v-if="listStyle === 2 || listStyle === 3"
					:to="`/dashboard/${device.id}`"
					class="mt-2 flex min-h-10 w-full max-w-full flex-100 cursor-pointer items-center overflow-hidden rounded border border-r-[3px] px-1 py-1 pr-2 bg-theme"
					:class="{ 'border-r-error': device.disconnected_at !== null, 'border-r-success': device.disconnected_at === null }"
				>
					<div
						class="client-icon ml-1 mr-2 flex w-10 items-center justify-center"
						style="opacity: 1; transform: scale(1.2);"
					>
						<ClientIcon
							:os="device.os"
							:os_family="device.os_family"
							:os_full_name="device.os_full_name"
							:os_kernel="device.os_kernel"
						/>
					</div>
					<div class="flex flex-1 flex-col flex-wrap text-vtd-primary-500 dark:text-vtd-primary-400">
						<div class="truncate text-sm font-normal">
							{{ device.name }}
						</div>
						<div class="truncate py-0.5 text-sm font-normal text-theme-inverted-lightinverted">
							{{ device?.ipv4 && device.ipv4?.length ? device.ipv4[0] : '' }}
						</div>
						<div
							v-if="listStyle === 3 && device?.tags?.length"
							class="relative flex h-5 w-full"
						>
							<div class="absolute bottom-0 left-0 right-1 z-10 flex w-auto items-center gap-1 truncate">
								<span
									v-for="tag in device?.tags"
									class="whitespace-nowrap rounded bg-slate-200 px-3 py-0 text-sm text-theme-inverted"
								>{{ tag }}</span>
							</div>
							<!---->
						</div>
					</div>
				</RouterLink>
			</div>
		</div>
	</div>
</template>

<script setup>
import { IconBrandDebian, IconFolder } from '@tabler/icons-vue';
import ClientIcon from '~/components/device/ClientIcon.vue';

const activeIndex = ref(null);
const deviceList = ref(null);
const store = useClientStore();
const toggle = async (index, id) => {
	if (activeIndex.value === index) {
		activeIndex.value = null;
	}
	else {
		activeIndex.value = index;
		deviceList.value = await store.loadGroupList(id);
	}
};

const isActive = (index) => {
	return activeIndex.value === index;
};

const props = defineProps({
	items: {
		type: Array,
		required: true,
	},
	activeIndex: {
		type: Number,
		default: null,
	},
	listStyle: {
		type: Number,
		default: 1,
	},
});
</script>

<style scoped>
.accordion-header[aria-expanded=true] {
    background-color: #00528d !important;
}

.accordion-header:hover {
    background-color: #e2e8f0 !important;
    color: #00528d !important;
    text-decoration: none !important;
}

.border-r-error {
  border-right-color: #ef4444;
}
.border-r-success {
  border-right-color: #90e884;
}
.icon {
  display: inline-block;
  vertical-align: middle;
}
</style>
