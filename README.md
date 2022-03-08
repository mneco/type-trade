# Type Trade

![NPM](https://img.shields.io/npm/l/@mneco/type-tarde)
![NPM](https://img.shields.io/npm/v/@mneco/type-tarde)
![GitHub Workflow Status](https://github.com/mneco/type-tarde/actions/workflows/type-tarde.yml/badge.svg?branch=main)

Typescript trading library.

## Getting started

TODO: fill it

## Features

### Typescript

Leverages [esbuild](https://github.com/evanw/esbuild) for blazing fast builds, but keeps `tsc` to generate `.d.ts` files.
Generates two builds to support both ESM and CJS.

Commands:

-   `build`: runs typechecking then generates CJS, ESM and `d.ts` files in the `build/` directory
-   `clean`: removes the `build/` directory
-   `type:dts`: only generates `d.ts`
-   `type:check`: only run typechecking
-   `type:build`: only generates CJS and ESM

### Tests

typescript-library-starter uses [ava](https://github.com/avajs/ava) and [esbuild-register](https://github.com/egoist/esbuild-register) so that there is no need to compile before the tests start running. The coverage is done through [nyc](https://github.com/istanbuljs/nyc).

Commands:

-   `test`: runs ava test runner
-   `test:coverage`: runs ava test runner and generates coverage reports

### Format & lint

This template relies on the combination of [eslint](https://github.com/eslint/eslint) — through [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint) for linting and [prettier](https://github.com/prettier/prettier) for formatting.
It also uses [cspell](https://github.com/streetsidesoftware/cspell) to ensure spelling

Commands:

-   `format`: runs prettier with automatic fixing
-   `format:check`: runs prettier without automatic fixing (used in CI)
-   `lint`: runs eslint with automatic fixing
-   `lint:check`: runs eslint without automatic fixing (used in CI)
-   `spell:check`: runs spellchecking

### Releasing

Under the hood, this library uses [semantic-release](https://github.com/semantic-release/semantic-release) and [commitizen](https://github.com/commitizen/cz-cli).
The goal is to avoid manual release process. Using `semantic-release` will automatically create a github release (hence tags) as well as an npm release.
Based on your commit history, `semantic-release` will automatically create a patch, feature or breaking release.

Commands:

-   `cz`: interactive CLI that helps you generate a proper git commit message, using [commitizen](https://github.com/commitizen/cz-cli)
-   `semantic-release`: triggers a release (used in CI)
