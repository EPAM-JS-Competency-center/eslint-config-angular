import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import sonarjs from "eslint-plugin-sonarjs";
import angular from "angular-eslint";
import { fixupPluginRules } from "@eslint/compat";
import rxjs from "eslint-plugin-rxjs";

/** @type { FlatConfig[] } */
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
  {
    ...sonarjs.configs.recommended,
    files: ["**/*.ts"],
  },
  ...angular.configs.tsRecommended.map((config) => ({
    ...config,
    files: ["**/*.ts"],
  })),
  {
    files: ["**/*.ts"],
    plugins: {
      rxjs: fixupPluginRules(rxjs),
    },
    rules: {
      ...rxjs.configs.recommended.rules,
      "rxjs/no-ignored-observable": "error",
      "rxjs/no-unbound-methods": "error",
      "rxjs/throw-error": "error",
      "rxjs/no-compat": "error",
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
