<template>
	<nav class="device-filter px-2 p-3 relative">
		<div class="mb-3">
			<div class="input-group input-group-flat">
				<input
					type="text"
					class="form-control"
					autocomplete="off"
					placeholder="Filter"
				>
				<span class="input-group-text">
					<a
						href="#"
						class="link-secondary ms-2"
						title="Search settings"
						data-bs-toggle="tooltip"
					>
						<IconFilter />
					</a>
				</span>
			</div>
		</div>

		<div class="relative mb-4 mt-2 flex flex-nowrap justify-between gap-1">
			<div class="w-full" />
			<div
				class="relative flex justify-content-between gap-0 rounded border border-gray-400 px-1"
				style="width: 100px;"
			>
				<div class="d-inline-flex w-max cursor-pointer">
					<div
						class="btn-group"
						role="group"
					>
						<a
							class="btn-transparent d-inline-flex rounded-full m-1"
							@click="openModal"
						>
							<IconCirclePlus />
						</a>
						<a
							class="btn-transparent d-inline-flex items-center rounded-full m-1"
							@click="openSpinner"
						>
							<IconReload />
						</a>
						<NuxtLink
							:to="`/dashboard/test`"
							class="btn-transparent d-inline-flex items-center rounded-full m-1"
							data-bs-toggle="dropdown"
						>
							<IconSettings />
						</NuxtLink>
					</div>
				</div>
			</div>
		</div>
	</nav>
	<Modal
		:is-active="modalIsActive"
		title="Add Client Access"
		@close="closeModal"
	>
		<div class="mb-3">
			<label class="form-label">ID</label>
			<input
				type="text"
				class="form-control"
				name="example-text-input"
			>
		</div>
		<div class="mb-3">
			<label class="form-label">Password</label>
			<input
				type="text"
				class="form-control"
				name="example-password-input"
			>
		</div>
	</Modal>
	<!-- <div class="d-flex justify-content-center my-2" v-show="showSpinner">
        <div class="align-items-center">
            <div class="spinner-border text-primary"></div>
        </div>
    </div> -->
</template>

<script>
import {
	IconFilter,
	IconCirclePlus,
	IconReload,
	IconSettings,
} from '@tabler/icons-vue';

export default {
	components: {
		IconFilter,
		IconCirclePlus,
		IconReload,
		IconSettings,
	},
	data() {
		return {
			modalIsActive: false,
			showSpinner: false,
		};
	},
	methods: {
		openModal() {
			this.modalIsActive = true;
		},
		closeModal() {
			this.modalIsActive = false;
		},
		openSpinner() {
			this.showSpinner = true;
			setTimeout(() => this.showSpinner == false, 3000);
		},
	},
};
</script>

<style scoped>
.device-filter {
    /* width: 20rem; */
    /* height: 100vh; */
    border-right: 1px solid #dbdef0;
    background-color: rgb(255 255 255);
}

.shadow-none {
    box-shadow: none !important;
}

.flex {
    display: flex;
}

.relative {
    position: relative;
}

.min-h-10 {
    min-height: 2.5rem;
}

.info {
    max-width: calc(100% - 30px);
}

.w-max {
    width: max-content;
}

.pl-6 {
    padding-left: 1.5rem;
    ;
}

.top-1\.5 {
    top: 0.375rem;
}

.left-1\.5 {
    left: 0.375rem;
}
</style>
