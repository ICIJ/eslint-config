import eslint from '@eslint/js'
import stylistic from '@stylistic/eslint-plugin'
import promisePlugin from 'eslint-plugin-promise'

export default [
  {
    ignores: [
      'dist', 
      'node_modules', 
      'storybook-static'
    ]
  },
  
  eslint.configs.recommended,
  stylistic.configs.recommended,
  promisePlugin.configs['flat/recommended'],

  {
    rules: {
      '@stylistic/comma-dangle': 'off',
      '@stylistic/indent': ['error', 2],
      '@stylistic/object-curly-spacing': ['error', 'always'],
      '@stylistic/semi': ['error', 'never'],
      '@stylistic/object-property-newline': ['error', {
        allowAllPropertiesOnSameLine: true
      }],
    }
  }
]
