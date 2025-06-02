const testingLibrary = require("eslint-plugin-testing-library");

/**
 * @fileoverview ESLint configuration for testing-library
 */
module.exports = [
  {
    files: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
    ...testingLibrary.configs["flat/react"],
  },
  {
    files: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
    rules: {
      "react/jsx-key": "off", // Disable this rule as it can conflict with testing-library's own rules
      "@typescript-eslint/no-require-imports": "off", // Allow require imports in tests
      "@typescript-eslint/no-explicit-any": "off", // Allow 'any' type in tests for flexibility
      "@typescript-eslint/no-unused-vars": "off", // Disable unused vars rule in tests to allow for more flexibility
    },
  },
];
