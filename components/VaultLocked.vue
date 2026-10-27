<template>
	<div class="flex flex-col items-center justify-center rounded-lg bg-white px-4 py-12 text-center shadow dark:bg-gray-900">
		<IconLoader2
			v-if="loading"
			:size="32"
			class="animate-spin text-gray-400"
		/>
		<template v-else>
			<span class="flex h-14 w-14 items-center justify-center rounded-full bg-gray-50 shadow dark:bg-gray-800">
				<IconKey :size="24" />
			</span>
			<h3 class="mt-4 p-1 text-3xl font-bold text-gray-900 dark:text-gray-50">
				The vault is locked or not initialized.
			</h3>
			<a
				class="mt-2 p-1 text-sm underline"
				href="https://kb.openrport.io/activate-the-vault"
				target="_blank"
				rel="noopener"
			>Learn more</a>
			<NuxtLink
				class="mt-4 inline-flex h-11 items-center rounded-full bg-primary px-5 text-sm font-medium uppercase text-white shadow hover:opacity-80"
				to="/Vault"
			>
				Unlock vault
			</NuxtLink>
		</template>
	</div>
</template>

<script setup lang="ts">
import { IconKey, IconLoader2 } from '@tabler/icons-vue';

defineProps<{
	loading?: boolean;
}>();
</script>
