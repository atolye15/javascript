module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    '@atolye15/eslint-config-base',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
    'prettier/@typescript-eslint',
  ],
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    '@typescript-eslint/explicit-function-return-type': ['warn'],
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/no-explicit-any': ['error'],
  },
};
