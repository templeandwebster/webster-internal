module.exports = {
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
  watchPathIgnorePatterns: ['<rootDir>/node_modules/'],
  testPathIgnorePatterns: ['.*/tests/fixtures/'],
  testRegex: '.*\\.test\\.(tsx?|jsx?)$',
  projects: [
    '<rootDir>/packages/webster-prettier',
    '<rootDir>/packages/webster-stylelint',
    '<rootDir>/packages/webster-typescript',
  ],
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
};
