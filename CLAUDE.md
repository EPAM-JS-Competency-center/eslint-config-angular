# CLAUDE.md

## What this is

`@epam/eslint-config-angular`: a shareable ESLint **flat config** for Angular projects. It defines no rules of its own. It combines presets from `@eslint/js`, `typescript-eslint`, `angular-eslint` and `eslint-plugin-rxjs-x`, and turns a few extra rules on. The code is plain ESM (`.mjs`), so there is no build step.

## Commands

There is no build, test, or lint script. To check that the config still loads and resolves its imports:

```shell
node -e "import('./index.mjs').then(m => console.log(m.default.length, Object.keys(m.configs)))"
```

- `prepublishOnly` refuses to publish if `git status` shows any change (npm packs the working tree, so uncommitted or untracked files in `configs/` would ship). It then runs the import check above.
- `npm run release` runs `standard-version`. It bumps the version from the conventional commits, writes `CHANGELOG.md` (the `postchangelog` hook then formats it with Prettier), commits, and tags.
- Lefthook git hooks:
  - **pre-commit** runs Prettier (default config, `.prettierrc` is `{}`) on staged files and re-stages them.
  - **commit-msg** runs commitlint with `@commitlint/config-conventional`. Commit messages must be conventional (`feat:`, `fix:`, `chore:`, `feat!:` for breaking changes). The changelog and version bumps are generated from them.

## Architecture

- `configs/ts.mjs` exports `ts` and `configs/html.mjs` exports `html`. Each is a `Linter.Config[]`. Every upstream preset is `.map()`-ed to add `files: ["**/*.ts"]` or `files: ["**/*.html"]`, so the presets only apply to their file type. Keep doing this when adding a preset.
- The last object in `ts.mjs` registers the `rxjs-x` plugin and the project's own rule overrides. It also sets `angular.processInlineTemplates` (lints inline component templates with the HTML rules) and `parserOptions.projectService: true` (type-aware linting, which the rxjs-x rules need).
- `index.mjs` default-exports `[...ts, ...html]` and also exports `configs = { ts, html }` for consumers who want only one of them.
- `index.d.mts` is **hand-written** type declarations. Update it whenever the exports in `index.mjs` change.
- `package.json` `files` whitelists what gets published (`index.mjs`, `index.d.mts`, `configs/`, README, LICENSE). Add any new runtime file there.

## Conventions

- **README rule tables are the user-facing docs.** When you add, remove, or change a rule or an extended preset in `configs/*.mjs`, update the matching "Extends" list or rule table in `README.md`.
- **Dependency split:**
  - Tooling that the consuming Angular project already owns (`eslint`, `angular-eslint`, `typescript-eslint`, `typescript`, `rxjs`) goes in `peerDependencies`, and is duplicated in `devDependencies` for local use.
  - Only `@eslint/js` and `eslint-plugin-rxjs-x` are real `dependencies`.
  - Narrowing a peer range or the `engines.node` range is a breaking change (`feat!:`), and the README "Requirements" section must be updated too.
