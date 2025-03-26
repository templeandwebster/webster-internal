const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

const pnpmWorkspace = path.join(__dirname, './pnpm-workspace.yaml');
const {packages} = yaml.load(fs.readFileSync(pnpmWorkspace, 'utf8'));

module.exports = {
  root: true,
  extends: [
    'plugin:@tpw/typescript',
    'plugin:@tpw/react',
    'plugin:@tpw/jest',
    'plugin:@tpw/node',
    'plugin:@tpw/webster',
    'plugin:@tpw/prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: [
      './tsconfig.eslint.json',
      '*/tsconfig.json',
    ],
  },
  settings: {
    react: {
      version: '16.8',
    },
    next: {
      rootDir: 'webster.templeandwebster.dev',
    },
  },
  ignorePatterns: [
    'node_modules',
    'dist',
    'webster/build',
    'webster/build-internal',
  ],
  rules: {
    'func-style': 'off',
    'no-process-env': 'off',
    'no-warning-comments': 'off',
    'no-negated-condition': 'off',
    'no-console': 'error',
    'consistent-return': 'off',
    'match-default-export-name': 'off',
    'jsx-use-translation-function': 'off',
    'lines-around-comment': [
      'error',
      {
        beforeBlockComment: false,
        allowBlockStart: false,
      },
    ],
    '@babel/no-unused-expressions': 'off',
    'import/consistent-type-specifier-style': ['error', 'prefer-top-level'],
    'import/named': 'off',
    'import/no-default-export': ['error'],
    'react/button-has-type': 'off',
    'react/no-array-index-key': 'off',
    'react/no-unsafe': ['error', {checkAliases: true}],
    '@tpw/jsx-no-complex-expressions': 'off',
    '@tpw/jsx-prefer-fragment-wrappers': 'off',
    '@tpw/no-ancestor-directory-import': 'error',
    '@tpw/react-prefer-private-members': 'off',
    '@typescript-eslint/array-type': ['error', {default: 'array'}],
    '@typescript-eslint/consistent-type-imports': 'error',
    '@typescript-eslint/consistent-type-exports': 'error',
    '@typescript-eslint/naming-convention': 'off',
    'jsx-a11y/label-has-for': [
      2,
      {
        required: {
          some: ['nesting', 'id'],
        },
        allowChildren: false,
      },
    ],
    'jsx-a11y/no-autofocus': 'off',
    'jsx-a11y/anchor-has-content': 'off',
    'jsx-a11y/control-has-associated-label': 'off',
    'jsx-a11y/role-supports-aria-props': 'off',
    'jsx-a11y/mouse-events-have-key-events': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'jsx-a11y/no-noninteractive-element-to-interactive-role': 'off',
    'no-restricted-imports': [
      'error',
      {
        paths: [
          {
            name: 'react',
            importNames: ['useLayoutEffect'],
            message:
              'Please use useIsomorphicLayoutEffect from the utilities directory instead',
          },
        ],
      },
    ],
  },
  overrides: [
    ...packages.map((packageDir) => noExtraneousDependenciesConfig(packageDir)),
    {
      files: ['packages/*/src/**/*.{ts,tsx}'],
      extends: ['plugin:@tpw/typescript-type-checking'],
      rules: {
        '@typescript-eslint/prefer-readonly': 'off',
        '@typescript-eslint/no-unnecessary-condition': 'off',
        '@typescript-eslint/unbound-method': 'off',
      },
    },
    {
      files: ['*/rollup.config.mjs'],
      rules: {
        'import/extensions': 'off',
        'import/no-default-export': 'off',
        'import/no-anonymous-default-export': 'off',
      },
    },
    {
      files: ['**/*.test.{ts,tsx}'],
      rules: {
        'jest/no-truthy-falsy': 'off',
        'react/jsx-no-constructed-context-values': 'off',
        '@tpw/jsx-no-hardcoded-content': 'off',
        '@tpw/no-ancestor-directory-import': 'off',
        '@tpw/react-require-autocomplete': 'off',
      },
    },
  ],
};

function noExtraneousDependenciesConfig(packageDir) {
  return {
    files: [`${packageDir}/rollup.config.*`, `${packageDir}/config/**/*`],
    rules: {
      'import/no-extraneous-dependencies': [
        'error',
        {packageDir: [__dirname, path.join(__dirname, packageDir)]},
      ],
    },
  };
}
