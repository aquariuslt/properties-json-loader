# Properties to JSON webpack loader

[![NPM](https://img.shields.io/npm/v/properties-json-loader.svg)](https://www.npmjs.com/package/properties-json-loader)
[![Build Status](https://travis-ci.org/aquariuslt/properties-json-loader.svg?branch=master)](https://travis-ci.org/aquariuslt/properties-json-loader)
[![Github Workflow Status](https://github.com/aquariuslt/properties-json-loader/workflows/ci/badge.svg)](https://github.com/aquariuslt/properties-json-loader)
[![Codecov](https://codecov.io/gh/aquariuslt/properties-json-loader/branch/master/graph/badge.svg)](https://codecov.io/gh/aquariuslt/properties-json-loader)
[![GitHub issues](https://img.shields.io/github/issues/aquariuslt/properties-json-loader.svg)](https://github.com/aquariuslt/properties-json-loader/issues)
[![GitHub license](https://img.shields.io/github/license/aquariuslt/properties-json-loader.svg)](https://github.com/aquariuslt/properties-json-loader/blob/master/LICENSE)
[![Dependencies Status](https://david-dm.org/aquariuslt/properties-json-loader.svg)](https://david-dm.org/aquariuslt/properties-json-loader)


## Introduction

A webpack-loader based on [properties](https://www.npmjs.com/package/properties) .

Support all options in properties.


## Usage

### Install 
```shell script
npm install properties-json-loader
```

### Webpack Configuration

Use properties parse [Options](https://github.com/gagle/node-properties#options) as loader options.

Then will return parsed properties json object.

```javascript
module.exports = {
  // ...
  module: {
    rules: [
      // ...
      {
        test: /\.properties$/,
          loader: 'properties-json-loader',
          options: {
            namespaces: true
            // ... 
          }
      }
    ]
  }
}
```

