module.exports = {
	stories: ['../stories/**/*.stories.@(ts|tsx|js|jsx)'],
	addons: [
		'storybook-dark-mode',
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		{
			name: '@storybook/addon-postcss',
			options: {
				postcssLoaderOptions: {
					implementation: require('postcss'),
				},
			},
		},
	],
	typescript: {
		check: true, // type-check stories during Storybook build
	},
};
