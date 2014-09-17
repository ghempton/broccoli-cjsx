# [broccoli](https://github.com/joliss/broccoli)-[cjsx](https://github.com/jsdf/coffee-react-transform) [![Build Status](https://travis-ci.org/ghempton/broccoli-cjsx.png?branch=master)](https://travis-ci.org/ghempton/broccoli-cjsx)

A [React JSX](https://github.com/facebook/react) filter for [broccoli](https://github.com/joliss/broccoli).

## Installation

```bash
npm install --save broccoli-cjsx
```
## Usage

```js
var cjsx = require('broccoli-cjsx');
tree = cjsx(tree);
```

## Options

### extensions
Type: `Array`
Default: `['cjsx']`

Specify the extensions for the source files.

```js
tree = cjsx(tree, {extensions: ['js']});
```
