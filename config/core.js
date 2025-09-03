/**
 * @fileoverview ESLint configuration for our TypeScript projects
 */
module.exports = [
  {
    files: ["**/*.ts", "**/*.tsx", "**/*.d.ts"],
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
      "@typescript-eslint/no-require-imports": "off",

      // React rules
      "react/no-unescaped-entities": "off",
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
      // Disable no-cycle as it doesn't work well, we'll use madge for that
      "import/no-cycle": "off",
      "import/no-anonymous-default-export": "error",
      "import/no-unresolved": "error",

      // TypeScript already handles these
      "import/default": "off",
      "import/named": "off",
      "import/namespace": "off",
      "import/no-named-as-default-member": "off",

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
