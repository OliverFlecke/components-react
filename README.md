# Component library for React

This repository contains styled components that can be used in React.
They have primarly been build for usage in my own projects and to improve my own front-end skills.

## Build

To build the component library to `dist`:

```sh
yarn build
```

### Styles

Components are styled using [tailwindcss](https://tailwindcss.com).
The raw css file is include in the build output, which means that consumers of this library has to run tailwindcss (through postcss) to compile the necessary styles.

### Developing with Storybook

Storybook can then be executed with `yarn run storybook`.
It will automatically include and compile styles from `src/styles/main.css`.
