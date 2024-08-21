import { fileURLToPath } from 'url';

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

	vite: {
		build: {
			rollupOptions: {
				input: {
					"pdf.worker": fileURLToPath(new URL("./node_modules/pdfjs-dist/build/pdf.worker.mjs", import.meta.url)),
				}
			},
		},
		optimizeDeps: {
			exclude: ['pdf.worker.mjs']
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
		['nuxt-file-storage', { mount: process.env.FILE_MOUNT }]
	],

	compatibilityDate: '2024-08-19',
});