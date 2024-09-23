// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt([
	{
		files: ['*.vue'],
		rules: {
			'vue/multi-word-component-names': 'error',
			"@typescript-eslint/no-explicit-any": "off"
		},
	},
	{
		files: ['app.vue', 'error.vue', 'pages/**/*.vue', 'layouts/**/*.vue'],
		rules: {
			'vue/multi-word-component-names': 'off'
		}
	}
]);
