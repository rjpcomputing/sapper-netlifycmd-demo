module.exports = {
	parserOptions: {
		ecmaVersion: 2019,
		sourceType: "module"
	},
	env: {
		es6: true,
		browser: true
	},
	plugins: [
		"svelte3"
	],
	overrides: [
		{
			files: ["**/*.svelte"],
			processor: "svelte3/svelte3"
		}
	],
	rules: {
		"no-console": process.env.NODE_ENV === "production" ? "error" : "off",
		"no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
		"space-in-parens": [
			"error",
			"always"
		],
		"space-before-blocks": [
			"error",
			"always"
		],
		"object-curly-spacing": [
			"error",
			"always"
		],
		"space-before-function-paren": ["error", {
			"anonymous": "never",
			"named": "never",
			"asyncArrow": "always"
		}],
		"keyword-spacing": [
			"error",
			{ "after": true, "before": true }
		],
		"space-infix-ops": [
			"error",
			{ "int32Hint": false }
		],
		"indent": [
			"error",
			"tab",
			{
				"SwitchCase": 1
			}
		],
		"brace-style": [
			"error",
			"1tbs"
		],
		"linebreak-style": [
			"error",
			"unix"
		],
		"quotes": [
			"error",
			"double"
		],
		"semi": [
			"error",
			"always"
		],
		"no-unused-vars": [
			"error",
			{ "argsIgnorePattern": "^_", "args": "after-used", "ignoreRestSiblings": true }
		],
		"eol-last": [
			"error",
			"always"
		],
	},
	settings: {
		// ...
	}
};