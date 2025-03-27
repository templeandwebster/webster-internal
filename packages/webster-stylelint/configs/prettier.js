/**
 * Prettier integration for stylelint
 * Extends base config and adds prettier plugin
 */

module.exports = {
  extends: ['./base.js'],
  plugins: ['stylelint-prettier'],
  rules: {
    'prettier/prettier': true,
  },
}; 