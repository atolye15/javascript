
module.exports = {
  "parser": "@typescript-eslint/parser",
  "extends": [
    "airbnb",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "plugin:eslint-comments/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:jest/recommended"
  ],
  "env": {
    "browser": true,
    "jest": true
  },
  "plugins": [
    "@typescript-eslint",
    "import",
    "prettier",
    "jest",
    "eslint-comments"
  ],
  "rules": {
    "@typescript-eslint/indent": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
  }
}
