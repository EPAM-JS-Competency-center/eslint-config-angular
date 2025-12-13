# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [2.0.0](https://github.com/EPAM-JS-Competency-center/eslint-config-angular/compare/v1.1.0...v2.0.0) (2025-12-13)

### ⚠ BREAKING CHANGES

#### RxJS Plugin Migration

**migrate to eslint-plugin-rxjs-x** ([4b1a0a8](https://github.com/EPAM-JS-Competency-center/eslint-config-angular/commit/4b1a0a887349af63934207d74190e3996e8f4357))

This release migrates from the **unmaintained** `eslint-plugin-rxjs` to the actively maintained `eslint-plugin-rxjs-x`, which provides full ESLint 9+ support and flat config compatibility.

**What changed:**

- **Plugin replacement**: `eslint-plugin-rxjs` → `eslint-plugin-rxjs-x@0.8.3`
- **Rule namespace change**: All RxJS rules now use the `rxjs-x/*` namespace instead of `rxjs/*`
- **Rule rename**: `rxjs/no-ignored-observable` → `rxjs-x/no-floating-observables`
- **Enhanced recommended config**: The new plugin includes 5 additional rules in its recommended preset:
  - `no-subscribe-in-pipe` - Prevents `.subscribe()` calls inside pipe operators
  - `no-topromise` - Discourages deprecated `.toPromise()` method
  - `prefer-observer` - Prefers observer objects over individual callbacks
  - `prefer-root-operators` - Prefers root-level operator imports
  - `throw-error` - Ensures errors are thrown correctly in RxJS contexts

**Migration impact:**

- If you're using this config as-is, **no action required** - the migration is handled automatically
- If you're overriding specific RxJS rules in your project's `eslint.config.mjs`, update rule names from `rxjs/*` to `rxjs-x/*`
- The rule `rxjs/no-ignored-observable` should be changed to `rxjs-x/no-floating-observables`

**Why this change:**

- `eslint-plugin-rxjs` has no ESLint 9 support and is effectively unmaintained
- `eslint-plugin-rxjs-x` is actively maintained with recent updates (Nov 2025)
- Better compatibility with modern ESLint flat config format
- Eliminates need for `--legacy-peer-deps` during installation

#### SonarJS Plugin Removed

**drop sonarjs rules** ([b37434a](https://github.com/EPAM-JS-Competency-center/eslint-config-angular/commit/b37434a39ef11c54d3d9b86536989e9315927181))

The `eslint-plugin-sonarjs` dependency has been removed from this configuration.

**Migration impact:**
If you need SonarJS rules in your project, add `eslint-plugin-sonarjs` as a direct dependency and configure it in your `eslint.config.mjs`.

### Features

- drop sonarjs rules ([b37434a](https://github.com/EPAM-JS-Competency-center/eslint-config-angular/commit/b37434a39ef11c54d3d9b86536989e9315927181))
- migrate to eslint-plugin-rxjs-x ([4b1a0a8](https://github.com/EPAM-JS-Competency-center/eslint-config-angular/commit/4b1a0a887349af63934207d74190e3996e8f4357))

## [1.1.0](https://github.com/EPAM-JS-Competency-center/eslint-config-angular/compare/v1.0.2...v1.1.0) (2024-10-24)

### Features

- update dependencies ([a1b9bd1](https://github.com/EPAM-JS-Competency-center/eslint-config-angular/commit/a1b9bd1ee968179d899824626b70121ca000bf37))

### [1.0.2](https://github.com/EPAM-JS-Competency-center/eslint-config-angular/compare/v1.0.1...v1.0.2) (2024-07-25)

### Bug Fixes

- use processInlineTemplates for .ts files ([5cedc5c](https://github.com/EPAM-JS-Competency-center/eslint-config-angular/commit/5cedc5cb5be6b07b2820459aa6ca16026b6c2b7b))

### [1.0.1](https://github.com/EPAM-JS-Competency-center/eslint-config-angular/compare/v1.0.0...v1.0.1) (2024-07-21)

### Bug Fixes

- make @eslint/compat direct dependency ([20be88a](https://github.com/EPAM-JS-Competency-center/eslint-config-angular/commit/20be88ad8d76950c25e9d6a32580c0216f533860))

## 1.0.0 (2024-07-21)

### Features

- migrate to flat config ([d560300](https://github.com/EPAM-JS-Competency-center/eslint-config-angular/commit/d560300fde7b391c595839a15c79ff09d9f03fad))
