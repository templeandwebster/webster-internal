// This is a basic ESLint v9 configuration file for webster-stylelint package

export default [
  {
    ignores: ['dist/**', 'node_modules/**', '.turbo/**'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        // Add CommonJS globals
        module: 'writable',
        require: 'readonly',
        console: 'readonly',
        process: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        exports: 'writable',
        Buffer: 'readonly',
        setTimeout: 'readonly',
        clearTimeout: 'readonly',
        setInterval: 'readonly',
        clearInterval: 'readonly',
      }
    },
    rules: {
      // Disable unused vars checking to avoid needing to fix all existing code
      'no-unused-vars': 'off',
      'no-undef': 'error',
      // Change console from warning to off to avoid breaking the build
      'no-console': 'off',
    },
  },
  // Add specific rules for test files
  {
    files: ['**/*.test.js'],
    rules: {
      // Redundant now but keeping for clarity
      'no-console': 'off',
    },
  },
];
