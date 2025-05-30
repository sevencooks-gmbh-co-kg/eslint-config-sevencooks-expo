const typescriptEslint = require("@typescript-eslint/eslint-plugin");

/**
 * @fileoverview ESLint configuration for our TypeScript projects
 */
module.exports = [
  {
    files: ["**/*.ts", "**/*.tsx", "**/*.d.ts"],
    plugins: {
      "@typescript-eslint": typescriptEslint,
    },
    settings: {
      "import/parsers": {
        "@typescript-eslint/parser": [".ts", ".tsx", ".d.ts"],
      },
      "import/resolver": {
        typescript: {
          alwaysTryTypes: true,
          project: "./tsconfig.json",
        },
      },
    },
    rules: {
      // Typescript rules
      "@typescript-eslint/ban-ts-comment": "error",
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/no-unused-vars": "error",
      "@typescript-eslint/consistent-type-imports": "error",
      "@typescript-eslint/no-non-null-assertion": "warn",
      "@typescript-eslint/array-type": [
        "off",
        {
          default: "array-simple",
        },
      ],

      "react/display-name": "off",

      // Import rules
      "import/no-extraneous-dependencies": [
        "error",
        { devDependencies: ["**/*.test.ts", "**/*.test.tsx", "**/jest.setup.js", "**/jest.config.js"] },
      ],
      "import/extensions": ["error", "never", { svg: "always", json: "always", png: "always" }],
      "import/order": ["error", { "newlines-between": "always" }],
      "import/no-duplicates": "error",
      "import/no-useless-path-segments": "error",
      "import/no-cycle": ["error", { ignoreExternal: true }],
      "import/no-anonymous-default-export": "error",
      "import/no-unresolved": "error",

      // General rules
      "no-warning-comments": "warn",
      "no-console": "error",
      "no-debugger": "error",
      "dot-notation": "warn",
      camelcase: "error",
      "prefer-destructuring": "error",
      "no-nested-ternary": "error",
    },
  },
];
