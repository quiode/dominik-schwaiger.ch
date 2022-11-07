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
				locales: ['en', 'de'],
				defaultLocale: 'en',
				strategy: 'prefix_and_default',
				detectBrowserLanguage: {
					useCookie: true, cookieKey: 'i18n_redirected', redirectOn: 'root',  // recommended    
				},
				vueI18n: {
					lecaly: false,
					locale: 'en',
					messages: {
						en: {
							welcome: 'Welcome to my website!',
							about_me: 'I am an 18 year old programmer interested technology. I like to try out new technologies and am not afraid to learn new things. Currently I work mainly on websites or similar, but I have also tried out other areas of software. I am also not afraid of hardware and therefore I have also tinkered there. For example, I built an 8-bit processor for my final thesis.',
							home: 'Home',
							projects: 'Projects',
							linktree: 'Linktree',
							documents: 'Documents',
							impressum: 'Impressum'
						},
						de: {
							welcome: 'Willkommen auf meiner Website!',
							about_me: 'Ich bin ein 18 Jahre alter Programmierer, interessiert in allen möglichen Arten von Technik. Ich probiere gerne neue Technologien aus und scheue mich nicht davor, neue Dinge zu lernen. Zurzeit abreite ich meistens an Websites oder Ähnlichem, habe aber auch schon andere Bereiche der Softwareentwicklung ausprobiert. Ich scheue mich zudem auch nicht davor, mit Hardware zu arbeiten und habe daher auch schon dort ein paar Ideen verwirklicht. Zum Beispiel habe ich einen 8-Bit Prozessor für meine Maturaarbeit gebaut.',
							home: 'Start',
							projects: 'Projekte',
							linktree: 'Linktree',
							documents: 'Dokumente',
							impressum: 'Impressum'
						},
					},
				},
			},
		],
	],
});
