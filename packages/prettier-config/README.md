# `@tpw/prettier-config`

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](../../LICENSE.md) [![npm version](https://badge.fury.io/js/%40tpw%2Fprettier-config.svg)](https://badge.fury.io/js/%40tpw%2Fprettier-config.svg) [![npm bundle size (minified + gzip)](https://img.shields.io/bundlephobia/minzip/@tpw/prettier-config.svg)](https://img.shields.io/bundlephobia/minzip/@tpw/prettier-config.svg)

Shared prettier configuration

## Installation

```bash
$ yarn add --dev @tpw/prettier-config
```

## Usage

Temple & Webster’s shared prettier config comes bundled in `@tpw/prettier-config`. To enable these rules, add a `prettier` property in your `package.json` and reference this shared config as follows:

```
"prettier": "@tpw/prettier-config"
```

# Migration

Any previous rules that had been defined directly in a `.prettierrc` or `package.json` should be removed in favour of the shared config.
