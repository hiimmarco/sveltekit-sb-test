module.exports = {
	stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx|svelte)'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-svelte-csf'
		 {
			name: '@storybook/addon-postcss',
			options: {
				postcssLoaderOptions: {
					implementation: import('postcss').preprocess
				}
			}
		}
	],
	framework: '@storybook/svelte',
	svelteOptions: {
		preprocess: import('../svelte.config.js').preprocess
	}
};
