import vuePlugin from 'eslint-plugin-vue'
import vueParser from 'vue-eslint-parser'
import tsParser from '@typescript-eslint/parser'

export default [
  ...vuePlugin.configs['flat/recommended'],
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
    },
    rules: {
      'vue/custom-event-name-casing': 'off',
      'vue/multi-word-component-names': 'off',
      'vue/require-default-prop': 'off'
    }
  }
]