/**
 * Webster Stylelint Rules
 * 
 * This file exports all the custom rules for the webster-stylelint package.
 * Rules are organized into two categories:
 * 1. Base rules - General CSS/SCSS linting rules
 * 2. Design system rules - Rules for enforcing Webster design system
 */

module.exports = {
  // The rules object expected by stylelint
  rules: {
    // Base rules from webster-stylelint-config
    'content-no-strings': require('./content-no-strings'),
    
    // Design system rules from webster-stylelint-tooling
    'webster/coverage': require('./coverage'),
    'webster/at-rule-disallowed-list': require('./at-rule-disallowed-list'),
    'webster/custom-property-allowed-list': require('./custom-property-allowed-list'),
    'webster/global-disallowed-list': require('./global-disallowed-list'),
  },
}; 