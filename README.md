# electron-store-webpack-wrapper

[![npm version](https://img.shields.io/npm/v/electron-store-webpack-wrapper.svg?style=flat-square)](https://www.npmjs.com/package/electron-store-webpack-wrapper)
[![npm downloads](https://img.shields.io/npm/dt/electron-store-webpack-wrapper.svg?style=flat-square)](https://www.npmjs.com/package/electron-store-webpack-wrapper)
[![Build Status](https://travis-ci.org/psperber/electron-store-webpack-wrapper.svg?branch=master)](https://travis-ci.org/psperber/electron-store-webpack-wrapper) [![Greenkeeper badge](https://badges.greenkeeper.io/psperber/electron-store-webpack-wrapper.svg)](https://greenkeeper.io/)

While implementing [redux-persist-electron-storage](https://github.com/psperber/redux-persist-electron-storage) I found out, that it is possible to use [electron-store](https://github.com/sindresorhus/electron-store) with webpack by bundling it in a module.
So I decided to create this super simple module to prevent the following error:
```
Uncaught Error: Cannot find module "."
```

## Installation
```bash
yarn add electron-store-webpack-wrapper
```

## Usage

```js
import createElectronStore from "electron-store-webpack-wrapper";

const electronStore = createElectronStore({
  // your electron-store options here
})

const value = electronStore.get('key')
```
