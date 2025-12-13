import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import angular from "angular-eslint";
import rxjsX from "eslint-plugin-rxjs-x";

/** @type { import("eslint").Linter.Config[] } */
export const ts = [
  {
    ...eslint.configs.recommended,
    files: ["**/*.ts"],
  },
  ...tseslint.configs.recommended.map((config) => ({
    ...config,
    files: ["**/*.ts"],
  })),
  ...tseslint.configs.stylistic.map((config) => ({
    ...config,
    files: ["**/*.ts"],
  })),
  ...angular.configs.tsRecommended.map((config) => ({
    ...config,
    files: ["**/*.ts"],
  })),
  {
    files: ["**/*.ts"],
    plugins: {
      "rxjs-x": rxjsX,
    },
    rules: {
      ...rxjsX.configs.recommended.rules,
      "rxjs-x/no-floating-observables": "error",
      "rxjs-x/no-unbound-methods": "error",
      "rxjs-x/throw-error": "error",
      "rxjs-x/no-compat": "error",
    },
    processor: angular.processInlineTemplates,
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
  },
];
