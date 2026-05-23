module.exports = [
  {
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      globals: {
        chrome: "readonly",
        document: "readonly",
        console: "readonly",
        window: "readonly"
      }
    },
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "error",
      "prefer-const": "error",
      "eqeqeq": "error"
    }
  }
];
