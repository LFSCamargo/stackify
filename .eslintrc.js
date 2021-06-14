
const off = "off";
const warn = "warn";
const error = "error";

// eslint-disable-next-line
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    '@typescript-eslint/interface-name-prefix': off,
    '@typescript-eslint/explicit-function-return-type': off,
    'react/prop-types': off
  },
};
