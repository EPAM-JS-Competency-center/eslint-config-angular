import angular from "angular-eslint";

/** @type { FlatConfig[] } */
export const html = [
  ...angular.configs.templateRecommended.map((config) => ({
    ...config,
    processor: angular.processInlineTemplates,
    files: ["**/*.html"],
  })),
  ...angular.configs.templateAccessibility.map((config) => ({
    ...config,
    processor: angular.processInlineTemplates,
    files: ["**/*.html"],
  })),
  {
    files: ["**/*.html"],
    rules: {
      "@angular-eslint/template/no-duplicate-attributes": "error",
      "@angular-eslint/template/elements-content": "error",
      "@angular-eslint/template/alt-text": "error",
      "@angular-eslint/template/label-has-associated-control": "error",
      "@angular-eslint/template/no-positive-tabindex": "error",
      "@angular-eslint/template/valid-aria": "error",
      "@angular-eslint/template/banana-in-box": "error",
      "@angular-eslint/template/eqeqeq": [
        "error",
        {
          allowNullOrUndefined: true,
        },
      ],
      "@angular-eslint/template/no-any": "error",
    },
  },
];
