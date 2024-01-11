module.exports = {
	env: {
		browser: true,
		es2021: true
	},
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		// "plugin:react/recommended",
		"plugin:react-hooks/recommended",
		"plugin:storybook/recommended",
		// "plugin:perfectionist/recommended-alphabetical"
	],
	ignorePatterns: ["dist", ".eslintrc.js"],
	overrides: [
		{
			env: {
				node: true
			},
			files: [
				".eslintrc.{js,cjs}"
			],
			parserOptions: {
				"sourceType": "script"
			}
		}
	],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		// ecmaVersion: "latest",
		// sourceType: "module",
		project: "./tsconfig.json"
	},
	plugins: [
		"@typescript-eslint",
		"react",
		"react-refresh",
	],
	root: true,
	rules: {
		"@typescript-eslint/ban-types": [
			"error",
			{
				"extendDefaults": true,
				"types": {
					"{}": false
				}
			}
		],
		"@typescript-eslint/no-unused-vars": "warn",
		"linebreak-style": [
			"error",
			"unix"
		],
		"no-unused-vars": "warn",
		// "perfectionist/sort-interfaces": "error",
		quotes: [
			"error",
			"double"
		],
		// "react-refresh/only-export-components": [
		// 	"warn",
		// 	{ allowConstantExport: true },
		// ],
		// semi: [
		// 	"error",
		// 	"never"
		// ],
	}
}