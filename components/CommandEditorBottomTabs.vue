<template>
	<tabs
		v-slot="{ activeTabIndex }"
		:tabs="tabs"
		:default-tab-index="0"
	>
		<tab
			:key="0"
			:is-active="activeTabIndex === 0"
		>
			<div
				class="row"
				style="height: 300px"
			>
				<div class="col">
					<div class="card border-0 bg-transparent">
						<div class="card-header border-0 ">
							Your selection
						</div>
						<div
							class="card-body bg-gray-700"
							style="height: 300px"
						>
							<div class="mw-100 d-inline-block">
								<div
									v-for="(item, index) in selectedItems"
									:key="index"
								>
									<label class="form-check">
										<input
											:id="'item_' + index"
											v-model="selectedItems"
											class="form-check-input"
											type="checkbox"
											:value="item"
										>
										<span
											:for="'item_' + index"
											class="form-check-label"
										>{{ item }}</span>
									</label>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="col">
					<div class="card border-0 bg-transparent">
						<div class="card-header border-0">
							Connected clients (100)
						</div>
						<div
							class="card-body bg-gray-700"
							style="height: 300px"
						>
							<div class="mw-100 d-inline-block">
								<div
									v-for="(item, index) in items"
									:key="index"
								>
									<label class="form-check">
										<input
											:id="'item_' + index"
											v-model="selectedItems"
											class="form-check-input"
											type="checkbox"
											:value="item"
										>
										<span
											:for="'item_' + index"
											class="form-check-label"
										>{{ item }}</span>
									</label>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</tab>
		<tab
			:key="1"
			:is-active="activeTabIndex === 1"
		>
			<div
				class="row"
				style="height: 300px"
			>
				<div class="col">
					<div class="card border-0 bg-transparent">
						<div class="card-header border-0 ">
							Your selection
						</div>
						<div
							class="card-body bg-gray-700"
							style="height: 300px"
						>
							<div class="mw-100 d-inline-block">
								<div
									v-for="(item, index) in selectedItems"
									:key="index"
								>
									<label class="form-check">
										<input
											:id="'item_' + index"
											v-model="selectedItems"
											class="form-check-input"
											type="checkbox"
											:value="item"
										>
										<span
											:for="'item_' + index"
											class="form-check-label"
										>{{ item }}</span>
									</label>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="col">
					<div class="card border-0 bg-transparent">
						<div class="card-header border-0">
							Connected clients (100)
						</div>
						<div
							class="card-body bg-gray-700"
							style="height: 300px"
						>
							<div
								v-for="(item, index) in items"
								:key="index"
							>
								<label class="form-check">
									<input
										:id="'item_' + index"
										v-model="selectedItems"
										class="form-check-input"
										type="checkbox"
										:value="item"
									>
									<span
										:for="'item_' + index"
										class="form-check-label"
									>{{ item }}</span>
								</label>
							</div>
						</div>
					</div>
				</div>
			</div>
		</tab>
		<tab
			:key="2"
			:is-active="activeTabIndex === 2"
		>
			<div
				class="row"
				style="height: 300px"
			/>
		</tab>
		<tab
			:key="3"
			:is-active="activeTabIndex === 3"
		>
			<div
				class="row"
				style="height: 300px"
			>
				<div class="col">
					<div class="card border-0 bg-transparent">
						<div class="card-header border-0 ">
							Your selection
						</div>
						<div
							class="card-body bg-gray-700"
							style="height: 300px"
						>
							<div class="mw-100 d-inline-block">
								<div
									v-for="(item, index) in selectedItems"
									:key="index"
								>
									<label class="form-check">
										<input
											:id="'item_' + index"
											v-model="selectedItems"
											class="form-check-input"
											type="checkbox"
											:value="item"
										>
										<span
											:for="'item_' + index"
											class="form-check-label"
										>{{ item }}</span>
									</label>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="col">
					<div class="card border-0 bg-transparent">
						<div class="card-header border-0">
							Connected clients (100)
						</div>
						<div
							class="card-body bg-gray-700"
							style="height: 300px"
						>
							<div
								v-for="(item, index) in items"
								:key="index"
							>
								<label class="form-check">
									<input
										:id="'item_' + index"
										v-model="selectedItems"
										class="form-check-input"
										type="checkbox"
										:value="item"
									>
									<span
										:for="'item_' + index"
										class="form-check-label"
									>{{ item }}</span>
								</label>
							</div>
						</div>
					</div>
				</div>
			</div>
		</tab>
	</tabs>
</template>

<script>
import { IconTerminal, IconServer, IconCode, IconTag } from '@tabler/icons-vue';

export default {
	components: {
		IconTerminal,
		IconServer,
		IconCode,
		IconTag,
	},
	data() {
		return {
			items: [
				'Item 1', 'Item 2', 'Item 3', 'Item 4',
			],
			selectedItems: [],
			tabs: [
				{ title: 'Individual Clients', icon: IconTerminal },
				{ title: 'Client Groups', icon: IconServer },
				{ title: 'Client Matching', icon: IconCode },
				{ title: 'Client by tags', icon: IconTag },
			],
		};
	},
	methods: {
		selectAll() {
			this.selectedItems.value = [...this.items.value];
		},
		deselectAll() {
			this.selectedItems.value = [];
		},
	},
};
</script>

<style lang="">

</style>
