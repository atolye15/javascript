module.exports = {
  extends: [
    'airbnb-base',
    'plugin:prettier/recommended',
    'plugin:eslint-comments/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:jest/recommended',
  ],
  env: {
    browser: true,
    jest: true,
  },
  plugins: ['jsx-a11y', 'import', 'prettier', 'jest', 'eslint-comments'],
  rules: {
    'prettier/prettier': ['error'],
  },
};
