module.exports = {
    env: {
        "jest/globals": true,
        browser: true,
        es2021: true
    },
    extends: [
        "standard",
        "plugin:vue/recommended",
        // prettier should be last to override all rules from eslint
        "prettier"
    ],
    overrides: [],
    parserOptions: {
        parser: 'babel-eslint'
    },
    plugins: [
        "prettier",
        "vue",
        "import"
    ],
    rules: {
        "prettier/prettier": ["error",
            {
                singleQuote: true,
                semi: false,
                trailingComma: "none",
                printWidth: 120
            }],
        "import/no-webpack-loader-syntax": "off",
        "no-useless-escape": "off",
        "lines-between-class-members": "off",
        "template-curly-spacing": "off",
        "vue/custom-event-name-casing": "off",
        "vue/multi-word-component-names": "off",
        "import/no-extraneous-dependencies": "off",
        "vue/require-default-prop": "off",
        "vue/no-v-html": "off"
    }
}