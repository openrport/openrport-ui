<template>
	<form
		class="w-full max-w-[400px]"
		novalidate
		@submit.prevent="verifyTwoFa"
	>
		<h1 class="pb-6 text-3xl">
			Verify it's you
		</h1>
		<div>
			<div>
				<p class="text-sm">
					We've sent you a verification code to <b>{{ send_to }}</b>.
					Please enter it below.
				</p>
			</div>
			<div class="flex flex-col mt-2">
				<div class="relative mt-1 flex w-full flex-col">
					<input
						id="code"
						v-model="code"
						class="primary p-2.5 input-text focus:border-1 peer order-2 block h-10 w-full rounded bg-transparent text-theme-inverted shadow-sm focus:outline-0 focus:ring-0 sm:text-sm"
						type="text"
						autocomplete="off"
					>
					<label
						for="code"
						class="order-1 flex pb-1 pl-1 text-theme-label peer-focus:text-primary text-sm font-normal"
					>
						Enter your 2FA code
					</label>
				</div>
			</div>
			<div class="mt-6 flex items-center justify-start">
				<button
					class="hover:opacity-80 px-6 py-3 text-sm text-white rounded inline-flex items-center duration-200 focus:outline-none bg-primary"
					type="submit"
					@click.prevent="verifyTwoFa"
				>
					<div
						v-show="loading"
						role="status"
					>
						<svg
							aria-hidden="true"
							class="inline w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
							viewBox="0 0 100 101"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
								fill="currentColor"
							/>
							<path
								d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
								fill="currentFill"
							/>
						</svg>
						<span class="sr-only">Loading...</span>
					</div>
					Verify
				</button>
				<div class="flex flex-grow justify-end">
					<button
						class="hover:opacity-80 px-4 py-2 text-sm text-white rounded inline-flex items-center duration-200 focus:outline-none bg-gray-300 plain"
						type="button"
					>
						Resend
					</button>
					<button
						class="hover:opacity-80 px-4 py-2 text-sm text-white rounded inline-flex items-center duration-200 focus:outline-none bg-gray-300 plain"
						type="button"
					>
						Cancel
					</button>
				</div>
			</div>
		</div>
	</form>
</template>

<script setup lang="ts">
const store = useTokenStore();
const { errors, loading } = storeToRefs(store);
const props = defineProps({
	send_to: {
		type: String,
		default: '',
	},
});
const code = ref('');
const emit = defineEmits(['code']);
const verifyTwoFa = async () => {
	emit('code', code.value);
};
</script>
