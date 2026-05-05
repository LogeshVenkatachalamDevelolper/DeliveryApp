import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import checkFile from "eslint-plugin-check-file";

export default tseslint.config(
  {
    ignores: [
      "dist",
      "node_modules",
      "coverage/**",
      "config/*.ts",
      "config/*.js",
      "*.config.ts",
      "*.config.js",
      "**/*.json",
      "**/examples/**/*",
      "src/tests/**/*",
      "**/*.test.ts",
      "**/*.test.tsx",
      "**/*.spec.ts",
      "**/*.spec.tsx",
    ],
  },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        project: "./tsconfig.json",
        tsconfigRootDir: import.meta.dirname + "/..",
      },
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      "check-file": checkFile,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        {allowConstantExport: true},
      ],
      "@typescript-eslint/no-unused-vars": "off",
      // Security: Prevent console statements in production
      "no-console": "error",
      // Disable strict set-state-in-effect rule (too strict for real-world apps)
      "react-hooks/set-state-in-effect": "off",
      // Disable immutability rule (causes too many false positives with hooks)
      "react-hooks/immutability": "off",
      // React Hook Form incompatibility with React Compiler - this is a known limitation
      "react-hooks/incompatible-library": "off",
      // Exhaustive deps - common patterns exclude fetch functions to prevent infinite loops
      // Set to "warn" to allow gradual migration while still flagging potential issues
      "react-hooks/exhaustive-deps": "warn",
      // Allow namespaces for existing codebase (migration to ES modules can be gradual)
      "@typescript-eslint/no-namespace": "off",
      // Warn on any type usage (allow gradual migration)
      "@typescript-eslint/no-explicit-any": "warn",
      // Disable useless escape (minor issue)
      "no-useless-escape": "off",
      // Disable rules that require significant refactoring
      "no-empty": "warn",
      "no-constant-condition": "warn",
      "@typescript-eslint/no-unused-expressions": "warn",
      "@typescript-eslint/no-unnecessary-type-constraint": "warn",
      "@typescript-eslint/no-duplicate-enum-values": "warn",
      // Empty object type - allow for flexibility
      "@typescript-eslint/no-empty-object-type": "warn",
      // Function type - allow for flexibility
      "@typescript-eslint/no-unsafe-function-type": "warn",

      // ========================================
      // NAMING CONVENTIONS (from NAMING_CONVENTIONS.md)
      // ========================================

      "@typescript-eslint/naming-convention": [
        "error",
        // Default: camelCase for everything
        {
          selector: "default",
          format: ["camelCase"],
          leadingUnderscore: "allow",
          trailingUnderscore: "allow",
        },
        // Variables: camelCase, UPPER_CASE (for constants), PascalCase (for components)
        {
          selector: "variable",
          format: ["camelCase", "UPPER_CASE", "PascalCase"],
          leadingUnderscore: "allow",
        },
        // Functions: camelCase or PascalCase (for React components)
        {
          selector: "function",
          format: ["camelCase", "PascalCase"],
        },
        // Parameters: camelCase (but allow PascalCase for destructured React components like { icon: Icon })
        {
          selector: "parameter",
          format: ["camelCase", "PascalCase"],
          leadingUnderscore: "allow",
        },
        // Types, Interfaces, Classes: PascalCase
        {
          selector: "typeLike",
          format: ["PascalCase"],
        },
        // Interfaces: PascalCase (no I prefix as per NAMING_CONVENTIONS.md)
        {
          selector: "interface",
          format: ["PascalCase"],
          custom: {
            regex: "^I[A-Z]",
            match: false,
          },
        },
        // Enum names: PascalCase
        {
          selector: "enum",
          format: ["PascalCase"],
        },
        // Enum members: UPPER_CASE (SCREAMING_SNAKE_CASE) or PascalCase
        {
          selector: "enumMember",
          format: ["UPPER_CASE", "PascalCase"],
        },
        // Class properties: camelCase with optional leading underscore for private
        {
          selector: "classProperty",
          format: ["camelCase"],
          leadingUnderscore: "allow",
        },
        // Class methods: camelCase
        {
          selector: "classMethod",
          format: ["camelCase"],
        },
        // Object literal properties: allow any format (for flexibility with APIs/libraries)
        {
          selector: "objectLiteralProperty",
          format: null,
        },
        // Object literal methods: allow any format (for libraries like react-day-picker)
        {
          selector: "objectLiteralMethod",
          format: null,
        },
        // Type properties: camelCase (with flexibility for API responses)
        {
          selector: "typeProperty",
          format: ["camelCase", "PascalCase", "UPPER_CASE", "snake_case"],
          leadingUnderscore: "allow",
        },
        // Import names: allow any format (external libraries may use different conventions)
        {
          selector: "import",
          format: null,
        },
      ],

      // File Naming Convention: React Components should be PascalCase
      "check-file/filename-naming-convention": [
        "error",
        {
          // React Components (TSX): PascalCase
          "src/**/*.tsx": "PASCAL_CASE",
        },
        {
          ignoreMiddleExtensions: true,
        },
      ],

      // Folder Naming Convention: kebab-case for all folders
      "check-file/folder-naming-convention": [
        "error",
        {
          "src/!(__mocks__)/**/": "CAMEL_CASE",
        },
      ],
    },
  },
  // Exception: Allow console in logger utility (it's the implementation)
  {
    files: ["**/logger.utils.ts"],
    rules: {
      "no-console": "off",
    },
  },
  // Exception: Hooks use camelCase filenames with 'use' prefix
  {
    files: [
      "**/use*.ts",
      "**/use*.tsx",
      "**/hooks/**/*.ts",
      "**/hooks/**/*.tsx",
    ],
    rules: {
      "check-file/filename-naming-convention": "off",
    },
  },
  // Exception: Model files use camelCase (e.g., userInfo.ts, claimInfo.ts)
  {
    files: [
      "**/models/**/*.ts",
      "**/models/**/*.tsx",
      "**/model/**/*.ts",
      "**/model/**/*.tsx",
    ],
    rules: {
      "check-file/filename-naming-convention": "off",
    },
  },
  // Exception: Test files
  {
    files: [
      "**/*.test.ts",
      "**/*.test.tsx",
      "**/*.spec.ts",
      "**/*.spec.tsx",
      "**/tests/**/*.ts",
      "**/tests/**/*.tsx",
    ],
    rules: {
      "check-file/filename-naming-convention": "off",
      "@typescript-eslint/naming-convention": "off",
      "@typescript-eslint/no-require-imports": "off",
      "@typescript-eslint/no-explicit-any": "off",
    },
  },
  // Exception: assets folder (for image import paths)
  {
    files: ["**/assets/**/*.ts"],
    rules: {
      "@typescript-eslint/no-require-imports": "off",
    },
  },
  // Exception: Type definition files`
  {
    files: ["**/types/**/*.ts", "**/*.d.ts"],
    rules: {
      "check-file/filename-naming-convention": "off",
      "@typescript-eslint/naming-convention": "off",
    },
  },
  // Exception: UI components (shadcn/ui uses kebab-case and exports both components and variants)
  {
    files: ["**/ui/**/*.tsx", "**/ui/**/*.ts"],
    rules: {
      "check-file/filename-naming-convention": "off",
      "@typescript-eslint/naming-convention": "off",
      "react-refresh/only-export-components": "off",
      "@typescript-eslint/no-explicit-any": "off",
    },
  },
  // Exception: Components that export utility functions alongside components
  {
    files: [
      "**/exampleFile.tsx",
      
    ],
    rules: {
      "react-refresh/only-export-components": "off",
    },
  },
  // Exception: API client and service files (often need any for generic handling)
  {
    files: ["**/exampleFile.ts"],
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unnecessary-type-constraint": "off",
    },
  },
  // Exception: Index files
  {
    files: ["**/index.ts", "**/index.tsx"],
    rules: {
      "check-file/filename-naming-convention": "off",
    },
  },
  // Exception: Config files, vite-env, and services barrel files
  {
    files: [
      "**/vite-env.d.ts",
      "**/*.config.ts",
      "**/*.config.js",
      "**/services/index.ts",
    ],
    rules: {
      "check-file/filename-naming-convention": "off",
      "@typescript-eslint/naming-convention": "off",
    },
  },
  // Exception: Config folder files
  {
    files: ["**/config/**/*.ts"],
    rules: {
      "check-file/filename-naming-convention": "off",
    },
  },
  
  
  // Exception: Mock files
  {
    files: ["**/__mocks__/**/*.ts", "**/__mocks__/**/*.tsx"],
    rules: {
      "check-file/filename-naming-convention": "off",
      "@typescript-eslint/naming-convention": "off",
      "@typescript-eslint/no-explicit-any": "off",
    },
  },
  // Exception: Type definition files - allow any types
  {
    files: ["**/*.d.ts"],
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
    },
  },
  // Exception: Logger utility - allowed to use any for flexibility
  {
    files: ["**/logger.utils.ts"],
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
    },
  },
  // Exception: Error handling utilities
  {
    files: ["**/error-logger.ts", "**/use-error-boundary.tsx"],
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unsafe-function-type": "off",
    },
  },
);
