# `@tpw/webster-stylelint`

Temple & Webster's stylelint rules and configuration for the Webster frontend framework.

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](../../LICENSE.md) [![npm version](https://badge.fury.io/js/%40tpw%2Fwebster-stylelint.svg)](https://badge.fury.io/js/%40tpw%2Fwebster-stylelint.svg) [![npm bundle size (minified + gzip)](https://img.shields.io/bundlephobia/minzip/@tpw/webster-stylelint.svg)](https://img.shields.io/bundlephobia/minzip/@tpw/webster-stylelint.svg)

## Installation

Install [stylelint](https://stylelint.io/) and `@tpw/webster-stylelint`:

**With npm**

```bash
npm install --save-dev stylelint @tpw/webster-stylelint
```

## Usage

Temple & Webster’s stylelint rules come bundled in `@tpw/webster-stylelint`. 

To enable these rules, add a `stylelint` property in your `package.json`. See the [stylelint configuration docs](https://stylelint.io/user-guide/configuration/) for more details.

```json
"stylelint": {
  "extends": ["@tpw/webster-stylelint"]
}
```

Now you can run stylelint by adding the following linting script to your `package.json`. See the [stylelint CLI docs](https://stylelint.io/user-guide/cli/) for more details.

```json
"scripts": {
  "stylelint": "stylelint 'src/**/*.scss'"
}
```

**With npm**

```bash
npm run stylelint
```

## Prettier

This config also includes a prettier config which can be extended to format `.scss`.
Using the [`stylelint-prettier`](https://github.com/bpscott/stylelint-prettier) plugin, prettier changes are exposed as stylelint rule violations.

Install [`prettier`](https://github.com/prettier/prettier):

```bash
$ yarn add --dev prettier
```

Extend the config in your `package.json`:

```json
"stylelint": {
  "extends": [
    "@tpw/stylelint-config/prettier"
  ]
}
```

Add a prettier config in `package.json`:

```json
"prettier": {
  "singleQuote": true,
  "trailingComma": "es5",
  "bracketSpacing": false
}
```

Prettier fixes shall be reported when you run `stylelint **/*.css` and shall be autofixed when you run `stylelint --fix **/*.scss`.
