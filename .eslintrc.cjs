module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: ['xo', 'plugin:astro/recommended', 'prettier'],
	overrides: [
		{
			env: {
				node: true,
			},
			files: ['.eslintrc.{js,cjs}'],
			parserOptions: {
				sourceType: 'script',
			},
		},
		{
			extends: ['xo-typescript'],
			files: ['*.ts', '*.tsx', '*.astro'],
		},
		{
			// Extends: ['xo-typescript'],
			files: ['*.astro'],
			parser: 'astro-eslint-parser',
			parserOptions: {
				parser: '@typescript-eslint/parser',
				extraFileExtensions: ['.astro'],
			},
		},
	],
	parserOptions: {
		ecmaVersion: 'latest',
		extraFileExtensions: ['.astro'],
		sourceType: 'module',
	},
	rules: {},
};
