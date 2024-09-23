<template>
	<slot name="sidebar" />
	<div
		class="page-wrapper"
		:class="{ 'page-wrapper-extra-sidebar': isExtra }"
	>
		<div class="page-body p-0 m-0">
			<div class="container-lg d-flex flex-column justify-content-center p-0">
				<slot />
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: ['isExtra'],
	data() {
		return {
			isActive: false,
		};
	},
};
</script>
