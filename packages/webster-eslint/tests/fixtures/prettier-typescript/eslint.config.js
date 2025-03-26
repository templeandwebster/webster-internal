const tpwEslintPlugin = require('@tpw/webster-eslint');

module.exports = [
  ...tpwEslintPlugin.configs.typescript,
  ...tpwEslintPlugin.configs.prettier,
  {
    languageOptions: {
      parserOptions: {
        project: 'tsconfig.json',
        tsconfigRootDir: __dirname,
      },
    },
  },
];
