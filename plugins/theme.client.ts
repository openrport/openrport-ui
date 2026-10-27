// Applies the theme saved in the profile settings on startup
export default defineNuxtPlugin(() => {
	useSettingsStore().applyTheme();
});
