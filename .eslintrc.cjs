module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: ['xo', 'plugin:astro/recommended', 'plugin:tailwindcss/recommended', 'prettier'],
	overrides: [
		{
			files: ['.eslintrc.{js,cjs}'],
			env: {
				node: true,
			},
			parserOptions: {
				sourceType: 'script',
			},
		},
		{
			files: ['*.astro'],
			parser: 'astro-eslint-parser',
			parserOptions: {
				parser: '@typescript-eslint/parser',
				extraFileExtensions: ['.astro'],
			},
		},
		{
			files: ['*.ts', '*.tsx', '*.astro'],
			extends: [
				'xo-typescript',
				'plugin:astro/recommended',
				'plugin:tailwindcss/recommended',
				'prettier',
			],
		},
	],
	parserOptions: {
		ecmaVersion: 'latest',
		extraFileExtensions: ['.astro'],
		sourceType: 'module',
	},
	rules: {},
	settings: {
		tailwindcss: {
			config: 'tailwind.config.cjs',
		},
	},
};
