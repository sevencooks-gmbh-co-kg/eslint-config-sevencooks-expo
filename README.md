# eslint-config-sevencooks-expo

This repository contains a shared ESLint configuration for Expo projects at [SevenCooks](https://sevencooks.com/). It provides a consistent linting setup to ensure code quality and maintainability across projects.

## Features

- Pre-configured rules for Expo projects.
- Enforces best practices and coding standards.
- Integrates FormatJS and testing-library linting rules.

## Installation

To use this ESLint configuration in your project, follow these steps:

1. Install the package:

  ```bash
  yarn add --save-dev eslint eslint-config-sevencooks-expo
  ```

2. Create or update your `eslint.config.js` file to extend this configuration:

  ```javascript
  const { defineConfig } = require('eslint/config')
  const defaultConfig = require('eslint-config-sevencooks-expo')

  module.exports = defineConfig(
    ...defaultConfig,
    {
      ignores: ['**/graphql/**/*', 'docs', 'coverage'],
      rules: {
        // Add any custom rules or overrides here
      },
    }
  )
  ```

## Used Packages

See the [package.json](./package.json) file for a list of dependencies used in this configuration.
