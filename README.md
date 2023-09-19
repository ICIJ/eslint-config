This is a configuration for linting and formatting all ICIJ Vue.js projects uniformly. A typescript configuration should ba added later. 

# How to use

## 1. Clean up your project (optional)

If the project already has an eslint/prettier configuration, delete all ESlint and Prettier related files and packages. 

## 2. Install the package

To install the config, run:
```
yarn add -D eslint-config-icij
```

In the projects `package.json` file, add: 
```
"eslintConfig": {
  "extends": ["icij"]
}
```

Alternatively, you can add in an `.eslintrc` file:
```
{
  "extends": ["icij"]
}
```

## 3. Run the package
You can add scripts in the projects `package.json` to lint and fix:
```
"scripts": {
  "lint": "eslint .",
  "lint:fix": "yarn lint --fix"
},
```

# Overriding rules
If a project needs to overwrite eslint or prettier rules, add the rules in an `.eslintrc` file. 

```
{
  "extends": [
    "icij"
  ],
  "rules": {
    "no-console": "error",
  }
}
```