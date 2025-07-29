# @icij/eslint-config

Unified ESLint configuration for ICIJ projects. This package provides modular, opinionated 
linting presets for JavaScript, TypeScript, Vue.js, and Vitest.

## 📦 Installation

```bash
yarn add -D @icij/eslint-config
```

## 🚀 Usage

Instead of using `extends` in `package.json` or `.eslintrc`, use a flat config (`eslint.config.js`) 
at the root of your project. Flat config for ESLint are the new recommended configuration format 
introduced in ESLint v8. It uses standard JavaScript modules, offers better performance, and provides 
more flexibility for conditional and dynamic configuration. To learn more about this format, read 
the [official ESLint flat config documentation](https://eslint.org/docs/latest/use/configure/configuration-files-new).

Examples:

### Recommended for JavaScript projects

```js
import icijeslint from '@icij/eslint-config'

export default [
  ...icijeslint.configs.recommended
]
```

### Recommended with TypeScript

```js
import icijeslint from '@icij/eslint-config'

export default [
  ...icijeslint.configs.withTypescript
]
```

### Recommended with TypeScript + Vue + Vitest

```js
import icijeslint from '@icij/eslint-config'

export default [
  ...icijeslint.configs.all
]
```

## 🛠 Overriding rules

You can override rules by extending the base config in your `eslint.config.js`:

```js
import icijeslint from '@icij/eslint-config'

export default [
  ...icijeslint.configs.withTypescript,
  {
    rules: {
      '@typescript-eslint/no-require-imports': 'off'
    }
  }
]
```

## 📚 Available Configs

| Config name      | Description                                     |
| ---------------- | ----------------------------------------------- |
| `recommended`    | Basic ESLint + stylistic + promises             |
| `withTypescript` | Recommended + TypeScript support                |
| `withVue`        | Recommended + Vue (with Vue parser) support     |
| `withVitest`     | Recommended + Vitest support                    |
| `all`            | Recommended + TypeScript + Vue + Vitest support |
