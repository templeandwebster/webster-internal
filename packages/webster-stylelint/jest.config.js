// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/configuration

/** @type {import('jest').Config} */
const config = {
  testEnvironment: 'node',
  transform: {
    '^.+\\.(t|j)s$': [
      'babel-jest',
      {
        presets: [
          ['@babel/preset-env', { targets: { node: 'current' } }],
          '@babel/preset-typescript',
        ],
      },
    ],
  },
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
  setupFiles: ['<rootDir>/jest.setup.js'],
  testMatch: ['<rootDir>/tests/**/*.test.js'],
};

module.exports = config;
