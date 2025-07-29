import tseslint from 'typescript-eslint'
import tsParser from '@typescript-eslint/parser'

export default [
  ...tseslint.configs.recommended,
  ...tseslint.configs.stylistic,
  {
    languageOptions: {
      parser: tsParser
    },
    rules: {
      'no-unused-vars': 'off',
      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/no-unused-vars': ['error', {
        varsIgnorePattern: '^(Ph[A-Z])|(_)',
        argsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
        destructuredArrayIgnorePattern: '^_'
      }]
    }
  }
]