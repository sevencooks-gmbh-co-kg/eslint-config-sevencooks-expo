const { fixupPluginRules } = require("@eslint/compat");
const eslintReactNative = require("eslint-plugin-react-native");

/**
 * @fileoverview ESLint configuration for React Native projects
 */
module.exports = [
  {
    files: ["**/*.ts", "**/*.tsx", "**/*.d.ts"],
    ignores: ["**/*.test.ts", "**/*.test.tsx", "**/jest.setup.js", "**/jest.config.js"],
    plugins: {
      "react-native": fixupPluginRules({
        rules: eslintReactNative.rules,
      }),
    },
    rules: {
      "react/jsx-filename-extension": ["error", { extensions: [".tsx", ".jsx"] }],
      "react/no-unstable-nested-components": "warn",
      "react-native/no-inline-styles": "warn",
    },
  },
];
