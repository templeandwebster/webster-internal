const tpwPlugin = require('../../plugin');

module.exports = [
  {
    plugins: {
      '@tpw': tpwPlugin,
    },
    rules: {
      '@tpw/webster-prefer-sectioned-prop': 'error',
      '@tpw/webster-no-bare-stack-item': 'error',
    },
  },
];
