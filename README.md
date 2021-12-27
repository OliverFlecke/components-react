# Component library for React

[![CI](https://github.com/OliverFlecke/components-react/actions/workflows/main.yml/badge.svg?branch=master)](https://github.com/OliverFlecke/components-react/actions/workflows/main.yml)
[![npm version](https://badge.fury.io/js/@oliverflecke%2Fcomponents-react.svg)](https://badge.fury.io/js/@oliverflecke%2Fcomponents-react)

This repository contains styled components that can be used in React.
They have primarly been build for usage in my own projects and to improve my own front-end skills.

## Build

To build the component library to `dist`:

```sh
yarn build
```

### Publish

Publish the package with `npm`'s standard command.
The project is automatically build before being published.

```sh
npm publish
```

## Test

This project uses the build in test library in `tsdx`, which uses `jest` under the hood.
Test are executed with:

```sh
yarn test
```

During development, it can be usefull to add the `--watch` flag to continuesly execute tests when changes are detected.

Code coverage can be calculated with `--coverage`.

### Styles

Components are styled using [tailwindcss](https://tailwindcss.com).
The raw css file is include in the build output, which means that consumers of this library has to run tailwindcss (through postcss) to compile the necessary styles.

### Developing with Storybook

Storybook can then be executed with `yarn run storybook`.
It will automatically include and compile styles from `src/styles/main.css`.
