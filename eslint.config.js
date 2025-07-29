// @ts-check
import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import tsParser from '@typescript-eslint/parser'
import stylistic from '@stylistic/eslint-plugin'
import vuePlugin from 'eslint-plugin-vue'
import vueParser from 'vue-eslint-parser'
import promisePlugin from 'eslint-plugin-promise'

export default tseslint.config(
  {
    ignores: [
      'dist',
      'node_modules',
      'storybook-static',
    ]
  },

  eslint.configs.recommended,
  stylistic.configs.recommended,
  promisePlugin.configs['flat/recommended'],
  ...tseslint.configs.recommended,
  ...tseslint.configs.stylistic,
  ...vuePlugin.configs['flat/recommended'],

  {
    rules: {
      'no-unused-vars': 'off',

      '@stylistic/comma-dangle': 'off',
      '@stylistic/indent': ['error', 2],
      '@stylistic/object-curly-spacing': ['error', 'always'],
      '@stylistic/semi': ['error', 'never'],
      '@stylistic/object-property-newline': ['error', {
        allowAllPropertiesOnSameLine: true
      }],

      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/no-unused-vars': ['error', {
        varsIgnorePattern: '^(Ph[A-Z])|(_)',
        argsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
        destructuredArrayIgnorePattern: '^_'
      }],

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
)
