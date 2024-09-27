// .eslintrc.js
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors.
  ],
  parser: '@typescript-eslint/parser', // Allows ESLint to lint TypeScript code
  parserOptions: {
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'react/react-in-jsx-scope': 'off', // Not needed with Next.js
    'prettier/prettier': 'error', // Ensure prettier errors are displayed as ESLint errors
    // Add more custom rules as needed
  },
  settings: {
    react: {
      version: 'detect', // Automatically picks the version you have installed
    },
  },
};
