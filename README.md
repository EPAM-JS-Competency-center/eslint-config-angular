# ESLint config Angular

It's a configuration on top of the "standard" `@angular-eslint` installation which enables stricter rules. Adds some
more plugins to ensure smooth development process by elimination topics to discuss during PR reviews.

There are extra rules that enforce better consistency in .html and .spec.ts files, and common pitfalls when working with
RxJS.

## Quick start

You should already have [@angular-eslint](https://github.com/angular-eslint/angular-eslint) installed in your Angular
repo. If not yet installed, follow
the [quick start](https://github.com/angular-eslint/angular-eslint?tab=readme-ov-file#quick-start).

`npm i -D eslint-config-angular eslint-plugin-rxjs eslint-plugin-sonarjs`

Replace your `.eslintrc.json` with the following

```json
{
  "root": true,
  "ignorePatterns": [
    "projects/**/*"
  ],
  "overrides": [
    {
      "files": [
        "*.ts"
      ],
      "rules": {
        "@angular-eslint/directive-selector": [
          "error",
          {
            "type": "attribute",
            "prefix": "app",
            "style": "camelCase"
          }
        ],
        "@angular-eslint/component-selector": [
          "error",
          {
            "type": "element",
            "prefix": "app",
            "style": "kebab-case"
          }
        ]
      }
    }
  ],
  "extends": "eslint-config-angular"
}
```

## Opting-out from rules

Follow the regular ESLint approach for opting-out from rules you don't like or want to make adjustments for.
E.g. if you don't like that rxjs-compat is prohibited just override the rule by adding
`"rxjs/no-compat": "off"` in `*.ts` overrides.

## Rules and plugins

This package does not provide rules of its own, it only extends and adds extra rules from packages:

- [@angular-eslint](https://github.com/angular-eslint/angular-eslint)
- [eslint](https://eslint.org)
- [@typescript-eslint](https://typescript-eslint.io)
- [rxjs plugin](https://github.com/cartant/eslint-plugin-rxjs)
- [sonar plugin](https://github.com/un-ts/eslint-plugin-sonar)
