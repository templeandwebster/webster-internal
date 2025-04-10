/**
 * Design System configuration for Webster projects
 * Enforces usage of Webster design tokens and components
 *
 * Requires @tpw/webster-tokens package to be installed
 */

// Check if webster-tokens is available
let hasTokens = false;
try {
  require('@tpw/webster-tokens');
  hasTokens = true;
} catch (e) {
  console.warn(
    'Warning: @tpw/webster-tokens is not installed. Design system rules will not work correctly.'
  );
}

// Import base configuration
const _baseConfig = require('./base');

// Import utilities if tokens are available
let _createVar, getThemeVarNames, themeDefault;
if (hasTokens) {
  const tokens = require('@tpw/webster-tokens');
  _createVar = tokens.createVar;
  getThemeVarNames = tokens.getThemeVarNames;
  themeDefault = tokens.themeDefault;
}

// Function to create object with matching keys and values
const objectOf = (keys, value) =>
  keys.reduce((memo, key) => ({...memo, [key]: value}), {});

// Define disallowed units that should be replaced with tokens
const disallowedUnits = [
  'px',
  'rem',
  'em',
  '%',
  'ex',
  'ch',
  'lh',
  'rlh',
  'vw',
  'vh',
  'vmin',
  'vmax',
  'vb',
  'vi',
  'svw',
  'svh',
  'lvw',
  'lvh',
  'dvw',
  'dvh',
  'cm',
  'mm',
  'Q',
  'in',
  'pc',
  'pt',
];

// Helper for matching names in regexps
const matchNameRegExp = (name) => new RegExp(`^${name}$`, 'i');

// Design system configuration
const designSystemConfig = {
  extends: ['./base.js'],
  plugins: [
    '../lib/rules/coverage',
    '../lib/rules/at-rule-disallowed-list',
    '../lib/rules/custom-property-allowed-list',
    '../lib/rules/global-disallowed-list',
  ],
  customSyntax: 'postcss-scss',
  rules: {
    // Webster coverage rules for different categories
    'webster/coverage': hasTokens
      ? {
          border: [
            {
              'declaration-property-unit-disallowed-list': [
                {
                  'border-width': disallowedUnits,
                  border: disallowedUnits,
                  'border-radius': disallowedUnits,
                  'outline-offset': disallowedUnits,
                  outline: disallowedUnits,
                },
              ],
              'webster/at-rule-disallowed-list': objectOf(
                ['mixin', 'include'],
                [
                  'high-contrast-border',
                  'high-contrast-button-outline',
                  'high-contrast-outline',
                  'focus-ring',
                  'no-focus-ring',
                ].map(matchNameRegExp),
              ),
            },
            {
              message: 'Please use a Webster border token',
            },
          ],
          color: [
            {
              'color-named': 'never',
              'color-no-hex': true,
              'scss/function-color-relative': true,
              'function-disallowed-list': [
                'brightness',
                'contrast',
                'hue-rotate',
                'hsl',
                'hsla',
                'invert',
                'rgb',
                'rgba',
                'sepia',
                ...['color-multiply', 'color', 'filter'].map(matchNameRegExp),
              ],
              'webster/at-rule-disallowed-list': objectOf(
                ['mixin', 'include'],
                [
                  'recolor-icon',
                  'ms-high-contrast-color',
                ].map(matchNameRegExp),
              ),
              'webster/global-disallowed-list': [
                /\$webster-colors/,
                /\$color-filter-palette-data/,
                /\$color-palette-data/,
              ],
            },
            {
              message: 'Please use a Webster color token',
            },
          ],
          // Additional coverage rules from webster-stylelint-tooling...
        }
      : {},

    // Design system enforcement rules
    'webster/custom-property-allowed-list': hasTokens
      ? {
          // Allows definition of custom properties not prefixed with `--w-`, `--pc-`, `--pg-`, or `--webster-version-`
          allowedProperties: [/--(?!(p|pc|pg|webster-version)-).+/],
          // Allows use of custom properties prefixed with `--w-` that are valid Webster tokens
          allowedValues: {
            '/.+/': [
              // Note: Order is important
              // This pattern allows use of `--w-*` custom properties that are valid Webster tokens
              ...getThemeVarNames(themeDefault),
              // This pattern flags unknown `--w-*` custom properties or usage of deprecated `--pc-*`/`--pg-*` custom properties private to webster-react
              /--(?!(p|pc|pg)-).+/,
            ],
          },
        }
      : {},

    // Add additional design system rules here...
  },
};

module.exports = designSystemConfig;
