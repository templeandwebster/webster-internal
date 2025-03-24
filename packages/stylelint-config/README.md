# `@tpw/stylelint-config`

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](../../LICENSE.md) [![npm version](https://badge.fury.io/js/%40tpw%2Fstylelint-config.svg)](https://badge.fury.io/js/%40tpw%2Fstylelint-config.svg)

Temple & Webster's stylelint rules and config

## Installation

Install [stylelint](https://stylelint.io/) and `@tpw/stylelint-config`:

**With Yarn**

```
yarn add --dev stylelint @tpw/stylelint-config
```

**With npm**

```
npm install stylelint @tpw/stylelint-config --save-dev
```

## Usage

Temple & Webster’s stylelint rules come bundled in `@tpw/stylelint-config`. To enable these rules, add a `stylelint` property in your `package.json`. See the [stylelint configuration docs](https://stylelint.io/user-guide/configuration/) for more details.

```
"stylelint": {
  "extends": ["@tpw/stylelint-config"]
}
```

Now you can run stylelint by adding the following linting script to your `package.json`. See the [stylelint CLI docs](https://stylelint.io/user-guide/cli/) for more details.

```
"scripts": {
  "stylelint": "stylelint 'src/**/*.scss'"
}
```

Run it:

**With Yarn**

```
yarn run stylelint
```

**With npm**

```
npm run stylelint
```

## Prettier

This config also includes a prettier config which can be extended to format `.scss`.
Using the [`stylelint-prettier`](https://github.com/bpscott/stylelint-prettier) plugin, prettier changes are exposed as stylelint rule violations.

Install [`prettier`](https://github.com/prettier/prettier):

```
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
