// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	typescript: {
		strict: true,
		typeCheck: true,
	},
	app: {
		head: { title: 'Dominik Schwaiger' },
		pageTransition: { name: 'page', mode: 'out-in' },
	},
	css: [
		'~/assets/colors.scss',
		'~/assets/global.scss',
		'bootstrap-icons/font/bootstrap-icons.scss',
	],
	modules: ['@nuxtjs/i18n'],
	i18n: {},
});
