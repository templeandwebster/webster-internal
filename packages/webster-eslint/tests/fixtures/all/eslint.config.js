const tpwEslintPlugin = require('@tpw/webster-eslint');

module.exports = [
  // This isn't a best practice - you should only pick out the extends that you
  // care about and typescript/react implies the presence of the esnext, es5 and
  // core configs so specifying them all is not needed.
  // But it is useful for testing to prove all configs can be loaded sucessfully
  ...tpwEslintPlugin.configs.core,
  ...tpwEslintPlugin.configs.es5,
  ...tpwEslintPlugin.configs.esnext,
  ...tpwEslintPlugin.configs.typescript,

  // Augmenting configs - When extending, these go after the core config
  ...tpwEslintPlugin.configs.jest,
  ...tpwEslintPlugin.configs.node,
  ...tpwEslintPlugin.configs.webster,
  ...tpwEslintPlugin.configs.react,
  ...tpwEslintPlugin.configs.webpack,

  // Prettier config - When extending, this must go last
  ...tpwEslintPlugin.configs.prettier,

  {
    settings: {
      react: {
        version: '16.0',
      },
    },
  },
];
