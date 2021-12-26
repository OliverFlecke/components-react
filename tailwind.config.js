const colors = require('tailwindcss/colors');

module.exports = {
	content: ['{src,stories}/**/*.{tsx,html}'],
	darkMode: 'class',
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
