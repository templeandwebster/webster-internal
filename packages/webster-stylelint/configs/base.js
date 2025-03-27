/**
 * Base configuration for Webster projects
 * This configuration contains general styling rules and best practices
 */

module.exports = {
  plugins: ['stylelint-scss', 'stylelint-order', '../lib/rules'],
  // Emit errors for `stylelint-disable` comments that don't actually match any lints that need to be disabled.
  reportNeedlessDisables: true,
  // Emit errors for `stylelint-disable` comments that don't match rules that are specified in the configuration object.
  reportInvalidScopeDisables: true,
  customSyntax: 'postcss-scss',
  rules: {
    //
    // At-Rules
    //

    // Specify a disallowed-list of disallowed at-rules.
    'at-rule-disallowed-list': ['debug'],
    // Require or disallow an empty line before @rules.
    'at-rule-empty-line-before': [
      'always',
      {
        except: ['first-nested', 'blockless-after-same-name-blockless'],
        ignore: ['after-comment'],
        ignoreAtRules: ['else'],
      },
    ],
    // Disallow unknown at-rules.
    'at-rule-no-unknown': true,
    // Disallow vendor prefixes for @rules.
    'at-rule-no-vendor-prefix': true,
    // Specify a allowed-list of allowed at-rules.
    'at-rule-allowed-list': null,

    //
    // Block
    //

    // Disallow empty blocks.
    'block-no-empty': true,

    //
    // Color
    //

    // Specify short or long notation for hex colors.
    'color-hex-length': 'long',
    // Require (where possible) or disallow named colors.
    'color-named': null,
    // Disallow hex colors.
    'color-no-hex': true,
    // Disallow invalid hex colors.
    'color-no-invalid-hex': true,

    //
    // Comment
    //

    // Require or disallow an empty line before comments.
    'comment-empty-line-before': [
      'always',
      {
        except: ['first-nested'],
        ignore: ['stylelint-commands'],
      },
    ],
    // Disallow empty comments.
    'comment-no-empty': true,
    // Require a single space or disallow whitespace on the inside of comment markers.
    'comment-whitespace-inside': 'always',
    // Specify a disallowed list of disallowed words within comments.
    'comment-word-disallowed-list': null,
    // Disallow double-slash comments (//...) which are not supported by CSS.
    'no-invalid-double-slash-comments': true,

    //
    // Declaration
    //

    // Disallow duplicate properties within declaration blocks.
    'declaration-block-no-duplicate-properties': [
      true,
      {
        ignore: 'consecutive-duplicates',
      },
    ],
    // Disallow longhand properties that can be combined into one shorthand property.
    'declaration-block-no-redundant-longhand-properties': [
      true,
      {ignoreShorthands: ['/^grid.*/', 'inset']},
    ],
    // Disallow shorthand properties that override related longhand properties within declaration blocks.
    'declaration-block-no-shorthand-property-overrides': true,
    // Limit the number of declaration within single line declaration blocks.
    'declaration-block-single-line-max-declarations': 2,
    //  Require or disallow an empty line before declarations.
    'declaration-empty-line-before': [
      'never',
      {
        ignore: ['after-declaration', 'inside-single-line-block'],
      },
    ],
    // Disallow !important within declarations.
    'declaration-no-important': true,
    // Specify a disallowed list of disallowed property and unit pairs within declarations.
    'declaration-property-unit-disallowed-list': {},
    // Specify an allowed list of allowed property and unit pairs within declarations.
    'declaration-property-unit-allowed-list': null,
    // Specify a disallowed list of disallowed property and value pairs within declarations.
    'declaration-property-value-disallowed-list': {
      '/^animation/': ['linear'],
      display: ['table'],
    },
    // Specify an allow list of allowed property and value pairs within declarations.
    'declaration-property-value-allowed-list': {},
    // Disallow !important within keyframe declarations.
    'keyframe-declaration-no-important': true,

    //
    // Font
    //

    // Specify whether or not quotation marks should be used around font family names.
    'font-family-name-quotes': 'always-where-recommended',
    // Disallow duplicate font family names.
    'font-family-no-duplicate-names': true,
    // Require numeric or named (where possible) font-weight values.
    'font-weight-notation': 'numeric',

    // 
    // General
    //

    // Limit the depth of nesting.
    'max-nesting-depth': 3,
    // Disallow selectors of lower specificity from coming after overriding selectors of higher specificity.
    'no-descending-specificity': null,
    // Disallow duplicate selectors.
    'no-duplicate-selectors': true,
    // Disallow empty sources.
    'no-empty-source': true,
    // Disallow animation names that do not correspond to a @keyframes declaration.
    'no-unknown-animations': true,
    // Disallow unknown values for properties within declarations.
    'declaration-property-value-no-unknown': true,

    // Additional rules from webster-stylelint-config...

    // Order rules
    'order/properties-alphabetical-order': true,
  },
}; 