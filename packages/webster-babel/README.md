# `@tpw/webster-babel`

Temple & Webster's shared Babel preset for the Webster frontend framework

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](../../LICENSE.md) [![npm version](https://badge.fury.io/js/%40tpw%2Fwebster-babel.svg)](https://badge.fury.io/js/%40tpw%2Fwebster-babel.svg) [![npm bundle size (minified + gzip)](https://img.shields.io/bundlephobia/minzip/@tpw/webster-babel.svg)](https://img.shields.io/bundlephobia/minzip/@tpw/webster-babel.svg)

## Installation

Install [babel](https://babeljs.io/) and `@tpw/webster-babel`:

**With npm**

```bash
npm install --save-dev babel-core @tpw/webster-babel
```

## Usage

Temple & Webster's babel should be under the `babel` key of your `package.json`.

Set this package as the babel preset you’d like to use:

```json
{
  "babel": {
    "presets": ["@tpw/webster-babel"]
  }
}
```

The `@tpw/webster-babel` preset is designed to be a common import that can be used for the browser or the server.

```json
{
  "babel": {
    "presets": [["@tpw/webster-babel", {"typescript": true}]]
  }
}
```

#### Targets

This preset does not specify any targets to control what is transpiled. You should use Babel's top-level `targets` option to specify build targets. For instance to target the current node version:

```json
{
  "targets": "current node",
  "presets": ["@tpw/webster-babel"],
  "plugins": ["polyfill-es-shims"]
}
```

See more details [here](https://babel.dev/blog/2021/02/22/7.13.0#top-level-targets-option-12189httpsgithubcombabelbabelpull12189-rfchttpsgithubcombabelrfcspull2).

### Options

#### `corejs`, `debug`, `modules`, `useBuiltIns`

These options come from the `@babel/preset-env` preset and match the default values.

Read the [options](https://babeljs.io/docs/en/babel-preset-env#options) for more information on the possible values.

#### `typescript`

Enables `@babel/preset-typescript` to transfrom TypeScript into Javascript.

#### `typescriptOptions`

See all available [options](https://babeljs.io/docs/en/babel-preset-typescript).

#### `transformRuntime`

`boolean`, defaults to `false`

This option when `true` will enable the `@babel/plugin-transform-runtime` plugin.

#### `transformRuntimeOptions`

This option configures the `@babel/plugin-transform-runtime` plugin when the `transformRuntime` option has been enabled.

See available [options](https://babeljs.io/docs/en/babel-plugin-transform-runtime).

#### `react`

`boolean`, defaults to `false`.

This option when `true` will enable the `@babel/preset-react` preset.

#### `reactOptions`

The following options are different from the defaults. See all available [options here](https://babeljs.io/docs/en/babel-preset-react).

##### `reactOptions.useBuiltIns`

`boolean`, defaults to `true`

Will use the native built-in instead of trying to polyfill behavior for any plugins that require one.

##### `reactOptions.useSpread`

`boolean`, defaults to `true`

When spreading props, use inline object with spread elements directly instead of Babel's extend helper or Object.assign.

#### `transformReactConstantElements`

`boolean`, defaults to `false`.

This option when `true` will enable the `@babel/plugin-transform-react-constant-elements` plugin in production mode.

[Documentation](https://babeljs.io/docs/en/babel-plugin-transform-react-constant-elements)
