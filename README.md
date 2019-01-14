# babel-plugin-weex-theme

[![NPM version](https://img.shields.io/npm/v/babel-plugin-weex-ui.svg)](https://npmjs.org/package/babel-plugin-weex-ui)
[![Build Status](https://travis-ci.org/weex-ui-team/babel-plugin-weex-ui.svg?branch=master)](https://travis-ci.org/Yanjiie/babel-plugin-weex-ui)
[![Coverage Status](https://coveralls.io/repos/github/weex-ui-team/babel-plugin-weex-ui/badge.svg?branch=master)](https://coveralls.io/github/weex-ui-team/babel-plugin-weex-ui?branch=master)

## Install

```shell
xcnpm i @xc/babel-plugin-weex-theme -D

# For babel6
npm i babel-plugin-weex-theme@0 -D
```

## Example

Converts

```javascript
import { Button } from 'components'
```

to

```javascript
var button = require('components/lib/button')
require('components/lib/button/style.css')
```

## Weex JS Theme config Example

Converts

```javascript
// For developer: import and use your default theme it in your component.
import COLOR_CONFIG from 'components/lib/theme/default'
```

to

```javascript
// For user: will replace default to the theme that the user wants.
import COLOR_CONFIG from 'components/lib/theme/custom'
```


## styleLibraryName Example

Converts

```javascript
import Components from 'components'
import { Button } from 'components'
```

to

```javascript
require('components/lib/styleLibraryName/index.css')
var button = require('components/lib/styleLibraryName/button.css')
```

## Usage

Via `.babelrc` or babel-loader.

```javascript
{
  "plugins": [["weex-component", options]]
}
```

## Multiple Module
```javascript
{
  "plugins": [xxx,
    ["weex-component", {
      libraryName: "antd",
      style: true,
    }, "antd"],
    ["weex-component", {
      libraryName: "test-module",
      style: true,
    }, "test-module"]
  ]
}
```

### Component directory structure
```
- packages // 'libDir'
  - index.js // or custom 'root' relative path
  - style.css // or custom 'style' relative path
  - componentA
    - index.js
    - style.css
  - componentB
    - index.js
    - style.css
```

### Theme library directory structure
```
- lib
  - theme-default // 'styleLibraryName'
    - base.css // required
    - index.css // required
    - componentA.css
    - componentB.css
  - theme-material
    - ...
  - componentA
    - index.js
  - componentB
    - index.js
```
or 
```
- lib
  - theme-custom // 'styleLibrary.name'
    - base.css // if styleLibrary.base true
    - index.css // required
    - componentA.css // default 
    - componentB.css
  - theme-material
    - componentA
      -index.css  // styleLibrary.path  [module]/index.css
    - componentB
      -index.css
  - componentA
    - index.js
  - componentB
    - index.js
```

### Weex JS Theme directory structure
```
- root
  - lib
    - theme // 'themeDir'
      - default // required
        - index.js
        - componentA.js
        - componentB.js
      - blue  // themeConfig.name
        - index.js
        - componentA.js
        - componentB.js
  - packages
    - componentA
      - index.js
    - componentB
      - index.js
```

### options

- `["component"]`: import js modularly
- `["component", { "libraryName": "component" }]`: module name
- `["component", { "styleLibraryName": "theme_package" }]`: style module name
- `["component", { "styleLibraryName": "~independent_theme_package" }]`: Import a independent theme package
- `["component", { "styleLibrary": {} }]`: Import a independent theme package with more config
  ```
  styleLibrary: {
    "name": "xxx", // same with styleLibraryName
    "base": true,  // if theme package has a base.css
    "path": "[module]/index.css",  // the style path. e.g. module Alert =>  alert/index.css
    "mixin": true  // if theme-package not found css file, then use [libraryName]'s css file
  }
  ```
- `["component", { "style": true }]`: import js and css from 'style.css'
- `["component", { "style": cssFilePath }]`: import style css from filePath
- `["component", { "libDir": "packages" }]`: lib directory
- `["component", { "root": "index" }]`: main file dir
- `["component", { "camel2Dash": false }]`: whether parse name to dash mode or not, default `true`
- `["component", { "jsTheme": false }]`: replace default js theme name to `theme`
- `["component", { "themeDir": "lib/theme" }]`: default js theme root path
- `["component", { "theme": "default" }]`: Js theme name, It's valid when jsTheme is `true`
- `["component", { "customTheme": "@/src/lib/theme" }]`: Custom js theme path, It's valid when jsTheme is `true`
- `["component", { "themeDefault": "default" }]`: Default js theme name, default value is 'default'
