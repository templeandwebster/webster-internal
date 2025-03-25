export default {
  semi: true,
  singleQuote: true,
  trailingComma: 'all',
  printWidth: 100,
  tabWidth: 2,
  useTabs: false,
  bracketSpacing: false,
  arrowParens: 'always',
  endOfLine: 'lf',
  overrides: [
    {
      files: '**/*.md',
      options: {
        parser: 'mdx',
      },
    },
  ],
};
