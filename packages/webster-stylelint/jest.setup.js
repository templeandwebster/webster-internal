// Enable ES modules support
process.env.NODE_OPTIONS = '--experimental-vm-modules';

// Mock stylelint's test utilities
jest.mock('jest-preset-stylelint/getTestRule', () => {
  return {
    __esModule: true,
    default: () => {
      return {
        rule: require('./rules/content-no-strings'),
        config: {
          plugins: ['@tpw/content-no-strings'],
          rules: {
            '@tpw/content-no-strings': true,
          },
        },
      };
    },
  };
});
