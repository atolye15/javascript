module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    '@atolye15/eslint-config-base',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
  },
};
