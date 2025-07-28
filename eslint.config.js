// @ts-check
import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import tsParser from '@typescript-eslint/parser'
import stylistic from '@stylistic/eslint-plugin'
import vuePlugin from 'eslint-plugin-vue'
import vueParser from 'vue-eslint-parser'
import importPlugin from 'eslint-plugin-import'
import promisePlugin from 'eslint-plugin-promise'

export default [
  eslint.configs.recommended,
  stylistic.configs.recommended,
  importPlugin.flatConfigs.recommended,
  promisePlugin.configs['flat/recommended'],
  ...tseslint.configs.recommended,
  ...tseslint.configs.stylistic,
  ...vuePlugin.configs['flat/recommended'],

  {
    rules: {
      '@stylistic/comma-dangle': 'off', 
      '@stylistic/indent': ['error', 2],
      '@stylistic/object-curly-spacing': ['error', 'always'],
      '@stylistic/object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }],
      '@stylistic/semi': ['error', 'never'],
      '@typescript-eslint/no-unused-vars': 'error',
      'vue/custom-event-name-casing': 'off',
      'vue/multi-word-component-names': 'off',
      'vue/require-default-prop': 'off'
    }
  },

  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tsParser
      }
    },
    plugins: {
      vue: vuePlugin
    }
  }
]
