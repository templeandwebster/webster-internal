# Webster Internal

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE.md)

This repository contains common configurations for building web apps at Temple & Webster.

## Usage

This repo is managed as a monorepo that is composed of many npm packages, where each package has its own `README` and documentation describing usage.

### Package Index

| Name                                                | NPM                                                                                                                                        | Size                                                                                                                                                                                             |
| --------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [webster-babel](packages/webster-babel) | [![npm version](https://badge.fury.io/js/@tpw%2Fwebster-babel.svg)](https://badge.fury.io/js/@tpw%2Fwebster-babel) | [![npm bundle size (minified + gzip)](https://img.shields.io/bundlephobia/minzip/@tpw/webster-babel.svg)](https://img.shields.io/bundlephobia/minzip/@tpw/webser-babel.svg) |
| [webster-eslint](packages/webster-eslint) | [![npm version](https://badge.fury.io/js/@tpw%2Fwebster-eslint.svg)](https://badge.fury.io/js/@tpw%2Fwebster-eslint) | [![npm bundle size (minified + gzip)](https://img.shields.io/bundlephobia/minzip/@tpw/webster-eslint.svg)](https://img.shields.io/bundlephobia/minzip/@tpw/webser-eslint.svg) |
| [webster-postcss](packages/webster-postcss) | [![npm version](https://badge.fury.io/js/@tpw%2Fwebster-postcss.svg)](https://badge.fury.io/js/@tpw%2Fwebster-postcss) | [![npm bundle size (minified + gzip)](https://img.shields.io/bundlephobia/minzip/@tpw/webster-postcss.svg)](https://img.shields.io/bundlephobia/minzip/@tpw/webser-postcss.svg) |
| [webster-prettier](packages/webster-prettier) | [![npm version](https://badge.fury.io/js/@tpw%2Fwebster-prettier.svg)](https://badge.fury.io/js/@tpw%2Fwebster-prettier) | [![npm bundle size (minified + gzip)](https://img.shields.io/bundlephobia/minzip/@tpw/webster-prettier.svg)](https://img.shields.io/bundlephobia/minzip/@tpw/webser-prettier.svg) |
| [webster-stylelint](packages/webster-stylelint) | [![npm version](https://badge.fury.io/js/@tpw%2Fwebster-stylelint.svg)](https://badge.fury.io/js/@tpw%2Fwebster-stylelint) | [![npm bundle size (minified + gzip)](https://img.shields.io/bundlephobia/minzip/@tpw/webster-stylelint.svg)](https://img.shields.io/bundlephobia/minzip/@tpw/webser-stylelint.svg) |
| [webster-typescript](packages/webster-typescript) | [![npm version](https://badge.fury.io/js/@tpw%2Fwebster-typescript.svg)](https://badge.fury.io/js/@tpw%2Fwebster-typescript) | [![npm bundle size (minified + gzip)](https://img.shields.io/bundlephobia/minzip/@tpw/webster-typescript.svg)](https://img.shields.io/bundlephobia/minzip/@tpw/webster-typescript.svg) |

## Commands

### Install dependencies and build workspaces

```sh
pnpm install && pnpm build
```

### Run a command

**All workspaces**

Run commands across all workspaces. This uses [`turbo run <command>`](https://turborepo.org/docs/reference/command-line-reference#turbo-run-task).

| Command           | Runs                                                                                                                  |
| ----------------- | --------------------------------------------------------------------------------------------------------------------- |
| `pnpm changeset`  | Adds a new [changelog entry](https://github.com/templeandwebster/webster-internal/blob/main/.github/CONTRIBUTING.md#adding-a-changeset) |
| `pnpm lint`       | Lints all workspaces                                                                                                  |
| `pnpm test`       | Tests all workspaces                                                                                                  |
| `pnpm type-check` | Build types and check for type errors                                                                                 |
| `pnpm clean`      | Remove generated files                                                                                                |
| `pnpm format`     | Format files with prettier                                                                                            |

## Contribution

This repository has a CLA-Bot running which will ask contributors to sign a Contributor License Agreement (CLA).

Temple & Webster has also adopted a Code of Conduct that we expect contributors to adhere to. Please read the [full text](./CODE_OF_CONDUCT.md) so that you can understand what actions will and will not be tolerated.

### Ways to contribute

There are many ways to contribute, some of which are:

- Filing [bug reports](https://github.com/templeandwebster/webster-internal/issues/new?template=BUG_REPORT.md)
- Requesting new features or packages via [an issue](https://github.com/templeandwebster/webster-internal/issues/new/choose)
- Improving the existing codebase by picking up an issue, improving tests, or furthering documentation

### Development

#### Getting Started

#### Documentation

If your change affects the public API of any packages within this repository (i.e. adding or changing arguments to a function, adding a new function, changing the return value, etc), please ensure the documentation is updated, and a changelog is added to reflect this. Documentation is in the `README.md` files of each package. If further documentation is needed please communicate via a GitHub issue.

#### Testing

The packages in this repository are used in mission-critical production scenarios. As such, we do not merge any untested code.

To run the full test suite, simply run `pnpm test`.

### Releasing

The release process currently involves some manual steps to complete. Once your PR has been merged, our team will orchestrate when to cut a new release.

**Note** Version numbers in `package.json` files should never be altered manually. This will be done via scripts as part of the release process.

## License

MIT &copy; [Temple & Webster](https://templeandwebster.com.au/), see [LICENSE.md](LICENSE.md) for details.