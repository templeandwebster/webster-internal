const tpwEslintPlugin = require('@tpw/webster-eslint');

module.exports = [
  ...tpwEslintPlugin.configs.typescript,
  ...tpwEslintPlugin.configs.node,
  {
    languageOptions: {
      parserOptions: {
        project: 'tsconfig.json',
        tsconfigRootDir: __dirname,
      },
    },
  },
];
