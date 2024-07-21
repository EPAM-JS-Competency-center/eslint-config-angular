# ESLint config Angular

It's a configuration on top of the standard `@angular-eslint` rules which enables stricter rules, adds some
more plugins to ensure a smooth development process by elimination topics to discuss during PR reviews.

There are extra rules that enforce better consistency in `*.html` and `*.ts` files, and common pitfalls when working with
RxJS.

## Quick start

Before using this package, you should have [angular-eslint set up](https://github.com/angular-eslint/angular-eslint?tab=readme-ov-file#quick-start).

Install the package

```shell
npm i -D @epam/eslint-config-angular
```

Rename your `eslint.config.js` to `eslint.config.mjs` and replace the contents with following

```js
import eslintConfigAngular from "@epam/eslint-config-angular";

export default [...eslintConfigAngular];
```

## Opting-out from rules

Follow the regular ESLint approach for opting-out from rules you don't like or want to make adjustments for.

## Rules and plugins

This package does not provide rules of its own, it only extends and applies extra rules from packages:

- [@angular-eslint](https://github.com/angular-eslint/angular-eslint)
- [eslint](https://eslint.org)
- [@typescript-eslint](https://typescript-eslint.io)
- [rxjs plugin](https://github.com/cartant/eslint-plugin-rxjs)
- [sonar plugin](https://github.com/un-ts/eslint-plugin-sonar)

#### `*.html`

Extends:

- @angular-eslint/template/recommended
- @angular-eslint/template/accessibility

| Rule                                                  | Value                                                                     |
| ----------------------------------------------------- | ------------------------------------------------------------------------- |
| @angular-eslint/template/no-duplicate-attributes      | error                                                                     |
| @angular-eslint/template/elements-content             | error                                                                     |
| @angular-eslint/template/alt-text                     | error                                                                     |
| @angular-eslint/template/label-has-associated-control | error                                                                     |
| @angular-eslint/template/no-positive-tabindex         | error                                                                     |
| @angular-eslint/template/valid-aria                   | error                                                                     |
| @angular-eslint/template/banana-in-box                | error                                                                     |
| @angular-eslint/template/eqeqeq                       | error<br/><pre><code>{<br/> allowNullOrUndefined: true<br/>}</code></pre> |
| @angular-eslint/template/no-any                       | error                                                                     |

#### `*.ts`

Extends:

- eslint/recommended
- typescript-eslint/recommended
- typescript-eslint/stylistic
- sonarjs/recommended
- angular-eslint/tsRecommended
- rxjs/recommended

| Rule                       | Value |
| -------------------------- | ----- |
| rxjs/no-ignored-observable | error |
| rxjs/no-unbound-methods    | error |
| rxjs/throw-error           | error |
| rxjs/no-compat             | error |
