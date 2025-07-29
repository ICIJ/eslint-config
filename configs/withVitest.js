import globals from "globals"
import vitest from "eslint-plugin-vitest"
import vitestGlobals from "eslint-plugin-vitest-globals"

export default [
  {
    files: [
      "**/*.spec.js",
      "tests/unit/*/**.js"
    ],
    languageOptions: {
      globals: {
        ...vitestGlobals.environments.env.globals,
        ...globals.node,
        setImmediate: true,
        clearImmediate: true,
        global: true,
      },
    },
    ...vitest.configs.recommended,
  }
]