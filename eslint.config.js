import standard from 'eslint-config-standard'
import prettier from 'eslint-config-prettier'
import vue from 'eslint-plugin-vue'
import prettierPlugin from 'eslint-plugin-prettier'
import importPlugin from 'eslint-plugin-import'
import nPlugin from 'eslint-plugin-n'
import promisePlugin from 'eslint-plugin-promise'
import babelParser from '@babel/eslint-parser'

const icij = [
  {
    files: ['**/*.{js,jsx,ts,tsx,vue}'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      parser: babelParser,
      parserOptions: {
        requireConfigFile: false
      }
    },
    plugins: {
      import: importPlugin,
      n: nPlugin,
      promise: promisePlugin,
      vue,
      prettier: prettierPlugin
    },
    rules: {
      ...standard.rules,
      ...vue.rules.recommended,
      ...prettier.rules,
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
          json: 'always',
          scss: 'always'
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
]
export default icij
