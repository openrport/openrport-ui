<template>
	<new-page-wrapper is-extra="true">
		<div class="flex flex-1 xl:overflow-hidden">
			<new-settings-sidebar />
			<div class="scrollbar-hide max-h-screen flex-1 xl:overflow-y-auto">
				<div class="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
					<ProfileInfoForm />
					<UserSettingsForm class="mt-8 pb-8" />
				</div>
			</div>
		</div>
	</new-page-wrapper>
</template>

<script setup lang="ts">
import ProfileInfoForm from '~/components/settings/ProfileInfoForm.vue';
import UserSettingsForm from '~/components/settings/UserSettingsForm.vue';

useHead({ title: 'Profile' });
</script>
