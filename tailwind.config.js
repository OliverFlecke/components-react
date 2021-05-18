const colors = require('tailwindcss/colors');

module.exports = {
	future: {
		removeDeprecatedGapUtilities: true,
		purgeLayersByDefault: true,
	},
	purge: {
		mode: 'all',
		enable: true,
		content: ['src/**/*.html', 'src/**/*.tsx', 'stories/**/*.tsx'],
	},
	darkMode: 'class', // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				lime: colors.lime,
				amber: colors.amber,
				gray: {
					950: '#080C14',
				},
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};