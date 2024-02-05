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
	modules: [
		[
			'@nuxtjs/i18n',
			{
				locales: [
					{ code: 'en', file: 'en-GB.json' },
					{ code: 'de', file: 'de-CH.json' },
				],
				defaultLocale: 'en',
				strategy: 'prefix_and_default',
				lazy: true,
				langDir: 'lang',
				detectBrowserLanguage: {
					useCookie: true,
					cookieKey: 'i18n_redirected',
					redirectOn: 'root', // recommended
				}
			},
		],
	],
});
