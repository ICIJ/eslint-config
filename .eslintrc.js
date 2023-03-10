// Patch to allow plugins to be loaded as dependencies in shareable config
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  env: {
    jest: true,
    browser: true,
    es2021: true
  },
  extends: [
    'standard',
    'plugin:vue/recommended',
    // prettier should be last to override all formatting rules from eslint
    'prettier'
  ],
  overrides: [],
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false
  },
  plugins: ['prettier', 'vue', 'import'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: false,
        trailingComma: 'none',
        printWidth: 120
      }
    ],
    'import/extensions': [
      'warn',
      'never',
      {
        conf: 'always',
        json: 'always'
      }
    ],
    'import/order': [
      'warn',
      {
        groups: [
          ['builtin', 'external'],
          ['internal', 'parent', 'sibling', 'index']
        ],
        'newlines-between': 'always'
      }
    ],
    'import/no-webpack-loader-syntax': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-useless-escape': 'off',
    'lines-between-class-members': 'off',
    'template-curly-spacing': 'off',
    'vue/custom-event-name-casing': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/require-default-prop': 'off',
    'vue/no-v-html': 'off'
  }
}
