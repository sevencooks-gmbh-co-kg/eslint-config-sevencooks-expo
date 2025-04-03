const formatjs = require("eslint-plugin-formatjs");

/**
 * @fileoverview ESLint configuration for formatjs
 */
module.exports = [
  {
    extends: [formatjs.configs.recommended],
    files: ["**/*.ts", "**/*.tsx", "**/*.d.ts"],
    ignores: ["**/*.test.ts", "**/*.test.tsx", "**/jest.setup.js", "**/jest.config.js"],
    rules: {
      "formatjs/enforce-description": "off",
      "formatjs/no-emoji": "off",
      "formatjs/no-literal-string-in-jsx": "off",
    },
  },
];
