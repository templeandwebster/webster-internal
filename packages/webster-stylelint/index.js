/**
 * @tpw/webster-stylelint
 * 
 * This is the main entry point for the webster-stylelint package.
 * It exports both the base configuration and the design system configuration.
 * 
 * Users can extend either:
 * - @tpw/webster-stylelint (this file - extends base by default)
 * - @tpw/webster-stylelint/base (base stylelint rules)
 * - @tpw/webster-stylelint/design-system (design system enforcement)
 */

// Check if webster-tokens is available
let hasTokens = false;
try {
  require('@tpw/webster-tokens');
  hasTokens = true;
} catch (e) {
  // webster-tokens is not available
  // design-system rules will not be fully functional
}

// Export base config by default
const baseConfig = require('./configs/base');
module.exports = baseConfig;

// Also expose configs as properties
module.exports.base = baseConfig;
module.exports.designSystem = hasTokens 
  ? require('./configs/design-system')
  : {
      extends: ['./configs/base.js'],
      rules: {},
      plugins: [],
      customSyntax: 'postcss-scss'
    };
module.exports.prettier = require('./configs/prettier'); 