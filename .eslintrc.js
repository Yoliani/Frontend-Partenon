module.exports = {
  root: true,
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'next/core-web-vitals',
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:prettier/recommended',
    'plugin:react-hooks/recommended',
  ],
  rules: {
    'prettier/prettier': [
      'error',
      {
        useTabs: false,
        tabWidth: 2,
        bracketSpacing: false,
        printWidth: 80,
        semi: true,
        parser: 'flow',
        singleQuote: true,
        arrowParens: 'avoid',
      },
    ],
    // indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
  },
};
