module.exports = {
  extends: ['airbnb', '@atolye15/eslint-config-base-typescript'],
  plugins: ['react'],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'react/prop-types': 'off',
    'react/button-has-type': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '.storybook/**/*.js',
          'config-overrides.js',
          'src/setupTests.ts',
          'src/components/**/*.stories.tsx',
          'src/**/*.test.{ts,tsx}',
        ],
      },
    ],
  },
};
