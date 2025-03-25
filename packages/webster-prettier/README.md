# `@tpw/webster-prettier`

Temple & Webster's shared Prettier configuration for the Webster frontend framework.

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](../../LICENSE.md) [![npm version](https://badge.fury.io/js/%40tpw%2Fwebster-prettier.svg)](https://badge.fury.io/js/%40tpw%2Fwebster-prettier.svg) [![npm bundle size (minified + gzip)](https://img.shields.io/bundlephobia/minzip/@tpw/webster-prettier.svg)](https://img.shields.io/bundlephobia/minzip/@tpw/webster-prettier.svg)

## Installation

Install [prettier](https://prettier.io/) and `@tpw/webster-prettier`:

**With npm**

```bash
npm install --save-dev @tpw/webster-prettier
```

## Usage

Temple & Webster's shared prettier config comes bundled in `@tpw/webster-prettier`. 

To enable these rules, add a `prettier` property to your project's `package.json`. See the [prettier configuration docs](https://prettier.io/docs/configuration) for more details.

```json
{
  "prettier": "@tpw/webster-prettier"
}
```

Copy the `.prettierignore` file to your project root:

```bash
cp node_modules/@tpw/webster-prettier/.prettierignore .prettierignore
```

## Configuration

This package provides the following Prettier configuration:

- `semi: true` - Always add semicolons
- `singleQuote: true` - Use single quotes instead of double quotes
- `trailingComma: 'all'` - Add trailing commas in all valid contexts
- `printWidth: 100` - Line wrap at 100 characters
- `tabWidth: 2` - Use 2 spaces for indentation
- `useTabs: false` - Use spaces instead of tabs
- `bracketSpacing: false` - No spaces between brackets in object literals
- `arrowParens: 'always'` - Always include parentheses in arrow functions
- `endOfLine: 'lf'` - Line endings are always LF
- `overrides` - Special handling for MDX files using the MDX parser

## Ignored Files

The package includes a `.prettierignore` file with common patterns for files that should be ignored by Prettier, including:
- Dependencies (`node_modules`, etc.)
- Build outputs (`dist`, `build`, etc.)
- Cache directories
- Debug logs
- IDE files
- Package manager files 

## Migration

Any previous rules that had been defined directly in a `.prettierrc` or `package.json` should be removed in favour of the shared config.
