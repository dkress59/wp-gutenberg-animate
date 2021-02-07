module.exports = {
	extends: [ 'plugin:@wordpress/eslint-plugin/recommended' ],
	rules: {
		quotes: [ 'error', 'single' ],
		semi: [ 'error', 'never' ],
		'prettier/prettier': 'off',
	},
}
