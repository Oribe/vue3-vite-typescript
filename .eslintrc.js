module.exports = {
  "env": {
    "browser": true,
    "es6": true
  },
  "extends": [
    "plugin:vue/vue3-recommended",
    "plugin:vue/vue3-essential",
    "plugin:vue/vue3-strongly-recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    'plugin:prettier/recommended',
    "prettier/@typescript-eslint",
    "prettier/vue",
  ],
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parser": "vue-eslint-parser",
  "parserOptions": {
    "ecmaVersion": 2020,
    "parser": "@typescript-eslint/parser",
    "sourceType": "module",
  },
  "plugins": [
    "vue",
    "@typescript-eslint",
    "prettier",
  ],
  "rules": {
    "@typescript-eslint/explicit-module-boundary-types": "off",
  }
};
