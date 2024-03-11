module.exports = {
  overrides: [
    {
      files: ["*.ts"],
      extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@angular-eslint/recommended",
        "plugin:@angular-eslint/template/process-inline-templates",
        "plugin:rxjs/recommended",
        "plugin:sonarjs/recommended",
      ],
      rules: {
        "rxjs/no-ignored-observable": "error",
        "rxjs/no-unbound-methods": "error",
        "rxjs/throw-error": "error",
        "rxjs/no-compat": "error",
      },
    },
    {
      files: ["*.html"],
      extends: [
        "plugin:@angular-eslint/template/recommended",
        "plugin:@angular-eslint/template/accessibility",
      ],
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
        "@angular-eslint/template/no-call-expression": "error",
        "@angular-eslint/template/no-any": "error",
      },
    },
  ],
  parserOptions: {
    project: "tsconfig.json",
  },
};
