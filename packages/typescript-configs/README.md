# `@tpw/typescript-configs`

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](../../LICENSE.md) [![npm version](https://badge.fury.io/js/%40tpw%2Ftypescript-configs.svg)](https://badge.fury.io/js/%40tpw%2Ftypescript-configs.svg)

In TypeScript, the configuration file can extend from a base file. This package provided a few common base configuration files to simplify TypeScript project setup.

To read more about how this extensibility works. See [typescript handbook](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html#configuration-inheritance-with-extends).

Below are two documentation we have also found useful to have on hand while setting up a configuration file.

- [`tsconfig.json`](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)
- [Compiler Options](https://www.typescriptlang.org/docs/handbook/compiler-options.html)

## Installation

```bash
$ yarn add --dev @tpw/typescript-configs
```

## Usage

### React Application Project

To start, create a `tsconfig.json` in the root of your project.

A typical setup where the application sit in `[project root]/app` folder is as follow:

```json
{
  "extends": "@tpw/typescript-configs/application.json",
  "compilerOptions": {
    "baseUrl": ".",
    "rootDir": ".",
    "paths": {"*": ["*", "app/*"]}
  },
  "include": ["./app/**/*", "./client/**/*", "./server/**/*", "./tests/**/*"]
}
```

#### React Library Project

Similarly for a react library project. Create a `tsconfig.json` in the root of your project with a setup below assuming the library code sit in `[project root]/src` folder.

```json
{
  "extends": "@tpw/typescript-configs/library.json",
  "compilerOptions": {
    "baseUrl": "./src",
    "rootDir": "."
  },
  "include": ["./src/**/*"]
}
```

#### Project that run in the browser

A configuration file is provided that included styles setup and a more conservative build target.

```json
{
  "extends": "@tpw/typescript-configs/dom.json",
  "compilerOptions": {
    "baseUrl": ".",
    "rootDir": "."
  }
}
```

#### All Other Project

A base configuration file is also provided if the above does not fit your need.

```json
{
  "extends": "@tpw/typescript-configs/base.json",
  "compilerOptions": {
    "baseUrl": ".",
    "rootDir": "."
  }
}
```

#### Common Got Ya

##### Type Checking does not honour `skipLibCheck: true` setting

There are times when the type failure occur inside of a library your project is consuming, and having `skipLibCheck: true` does not resolved it. In this scenario, add an `exclude` option to your `tsconfig.json`.

eg.

```json
{
  "extends": "@tpw/typescript-configs/base.json",
  "compilerOptions": {
    "baseUrl": ".",
    "rootDir": ".",
    "exclude": ["./node_modules/**/*"]
  }
}
```
