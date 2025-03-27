# Webster Stylelint

Temple & Webster's stylelint rules, configuration, and tooling for the Webster framework and design system.

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](../../LICENSE.md) [![npm version](https://badge.fury.io/js/%40tpw%2Fwebster-stylelint.svg)](https://badge.fury.io/js/%40tpw%2Fwebster-stylelint.svg) 

## Installation

Install [stylelint](https://stylelint.io/) and `@tpw/webster-stylelint`:

```bash
npm install --save-dev stylelint @tpw/webster-stylelint
```

For design system rules, also install the tokens package:

```bash
npm install --save-dev @tpw/webster-tokens
```

## Usage

Webster Stylelint provides multiple configurations that can be extended:

### Basic Configuration

For general CSS/SCSS styling rules:

```json
"stylelint": {
  "extends": ["@tpw/webster-stylelint"]
}
```

or explicitly:

```json
"stylelint": {
  "extends": ["@tpw/webster-stylelint/base"]
}
```

### Design System Configuration

For enforcing Webster Design System token usage (requires `@tpw/webster-tokens`):

```json
"stylelint": {
  "extends": ["@tpw/webster-stylelint/design-system"]
}
```

### Prettier Integration

For formatting SCSS files with Prettier:

```json
"stylelint": {
  "extends": ["@tpw/webster-stylelint/prettier"]
}
```

## Running Stylelint

Add a linting script to your `package.json`:

```json
"scripts": {
  "stylelint": "stylelint 'src/**/*.scss'"
}
```

Then run:

```bash
npm run stylelint
```

## Configuration Details

### Base Configuration

The base configuration provides general SCSS/CSS best practices and style guidelines:

- Enforces consistent formatting
- Prevents common CSS mistakes 
- Ensures CSS best practices
- Orders properties alphabetically

### Design System Configuration

The design system configuration extends the base config and adds:

- Enforcement of Webster Design System tokens
- Prevents use of raw color values
- Enforces usage of spacing tokens
- Ensures consistent typography
- Validates custom properties against the Webster token system

> Note: Design system rules require the `@tpw/webster-tokens` package. If not installed, these rules will be disabled.

### Prettier Configuration

The Prettier integration adds:

- Formatting via the stylelint-prettier plugin
- Reports Prettier format violations as stylelint rule violations
- Autofixes format issues with `stylelint --fix`

## Package Structure

The package follows modern Stylelint plugin structure:

```
webster-stylelint/
├── configs/          # Configuration presets
│   ├── base.js       # Base styling rules
│   ├── design-system.js # Design system enforcement
│   └── prettier.js   # Prettier integration
├── lib/
│   └── rules/        # All rules in a single directory
│       ├── content-no-strings/  # Base rule 
│       ├── coverage/            # Design system rule
│       └── ...                  # Other rules
├── index.js          # Main entry point
└── package.json      # Package metadata
```

This structure follows the standard pattern used by official Stylelint plugins and makes it easy to find and maintain rules.
