## Install estlint and prettier for react with typescript

### Add estlint
``
yarn add eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-react --dev
``
- eslint: The core ESLint linting library
- @typescript-eslint/parser: The parser that will allow ESLint to lint TypeScript code
- @typescript-eslint/eslint-plugin: A plugin that contains a bunch of ESLint rules that are TypeScript specific
- eslint-plugin-react: this estlint for react
Next, add an .eslintrc configuration file in the root project directory. Here is a sample configuration for a TypeScript project:

```
{
  "parser": "@typescript-eslint/parser", // Specifies the ESLint parser
  "parserOptions": {
    "ecmaVersion": 2020, // Allows for the parsing of modern ECMAScript features
    "sourceType": "module", // Allows for the use of imports
    "ecmaFeatures": {
      "jsx": true // Allows for the parsing of JSX
    }
  },
  "settings": {
    "react": {
      "version": "detect" // Tells eslint-plugin-react to automatically detect the version of React to use
    }
  },
  "extends": [
    "plugin:react/recommended", // Uses the recommended rules from @eslint-plugin-react
    "plugin:@typescript-eslint/recommended", // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    "prettier/@typescript-eslint", // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    "plugin:prettier/recommended" // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  "rules": {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
  }
}
```

### Add prettier

yarn add prettier eslint-config-prettier eslint-plugin-prettier --dev

- prettier: The core prettier library
- eslint-config-prettier: Disables ESLint rules that might conflict with prettier
- eslint-plugin-prettier: Runs prettier as an ESLint rule

In order to configure prettier, a .prettierrc.js file is required at the root project directory. Here is a sample .prettierrc.js file:

```
{
  "semi": true,
  "trailingComma": "all",
  "singleQuote": true,
  "printWidth": 120,
  "tabWidth": 2,
}
```
### Auto fix code using eslint in vscode
"editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },

### Runs eslint with CLI
"editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },