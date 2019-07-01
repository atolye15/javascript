module.exports = {
  extends: [
    'airbnb-base',
    'plugin:eslint-comments/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:jest/recommended',
    'plugin:prettier/recommended',
    'prettier',
  ],
  env: {
    browser: true,
    jest: true,
  },
  plugins: ['import', 'prettier', 'jest', 'eslint-comments'],
  rules: {
    'prettier/prettier': ['error'],
  },
};
