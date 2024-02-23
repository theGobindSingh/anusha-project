/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["../.eslintrc.js"],
  plugins: ["@next/eslint-plugin-next"],
  parserOptions: {
    project: true
  },
  globals: {
    React: true,
    JSX: true
  }
};
