// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
 typescript: {
					strict: true,
					typeCheck: true,
	},

 vue: {
					compilerOptions: {
									isCustomElement: (tag) => ['webring-banner'].includes(tag)
					}
	},

 app: {
					head: {
									title: 'Dominik Schwaiger', script: [
													{
																	async: true,
																	src: "https://polyring.ch/embed.js",
													}
									]
					},
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

 compatibilityDate: '2024-08-19',
});