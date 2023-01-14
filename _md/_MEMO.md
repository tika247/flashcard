## app.set();

- In express, global variable is set with `app.set("hoge")`;
    - variable set with is into `app.locals.settings`;
- To access, with `app.get("hoge")`;

## get json

``` js

const apiData = JSON.parse(fs.readFileSync(`${process.cwd()}/dist/api/api.json`, "utf8"));

```

## difference of NodeList and HTMLCollection

- NodeList is static
- HTMLCollection is dynamic
- when the origin changes, only HTMLCollection reflects it

## is

to change component dynamically

https://devsakaso.com/vue-js-component-is-attribute/

## Communication between parent component and the child

https://webxreal.com/vue3-parent-child-data-communication/

## fs modules of Node.js

https://blog.katsubemakito.net/nodejs/file-write#%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB%E3%82%92%E9%96%8B%E3%81%8F%E9%9A%9B%E3%81%AE%E3%83%A2%E3%83%BC%E3%83%89%E4%B8%80%E8%A6%A7

## path modules of Node.js

### get a path of the file executed as a server

``` js
process.cwd();
```
* output as `absolute path`

``` js
path.dirname("")
```
* output as `relative path`

## get an absolute path of the file where this code is written

``` js 
import {fileURLToPath} from "url";
const filePathFromRoot = import.meta.url;
const absoluteFilePath = fileURLToPath(filePathFromRoot);
```

## get a file directory

``` js
import {fileURLToPath} from "url";
import {path} from "path";
const filePathFromRoot = import.meta.url;
const absoluteFilePath = fileURLToPath(filePathFromRoot);
const fileDirPath = path.dirname(absoluteFilePath);
```

## get a directory path 2-levels above

``` js
import {fileURLToPath} from "url";
import {path} from "path";
const filePathFromRoot = import.meta.url;
const absoluteFilePath = fileURLToPath(filePathFromRoot);
const fileDirPath = path.dirname(absoluteFilePath);
const dirTwoLevelAbove = path.resolve(fileDirPath, "..", "..");
```

## get a relative path from A to B

``` js
import {fileURLToPath} from "url";
import {path} from "path";
const filePathFromRoot = import.meta.url;
const absoluteFilePath = fileURLToPath(filePathFromRoot);
const fileDirPath = path.dirname(absoluteFilePath);
const dirTwoLevelAbove = path.resolve(fileDirPath, "..", "..");
const __relative = path.relative(fileDirPath, dirTwoLevelAbove);
console.log(__relative); // ..\..
```

## connect a multiple of string to make a new path

```js
import {path} from "path";
const __dirName = "dist/api/";
const __fileName = "api.json";
const __filePath = path.join(__dirName, __fileName);
console.log(__filePath); // dist\api\api.json
```

## how to type-annotation of object from 0

```js 

interface editWordInfoType {
  [key: string]: string;
}

```

## howt to adjust Webpack Configuration in Vue-Cli project

in `vue.config.js`

```js 
module.exports = {
  // exclude specific files or folders from buindling
  chainWebpack: config => { 
    config.plugin('copy').tap(([options]) => {
      options.patterns[0].globOptions.ignore.push('**/〇〇〇/**')
      return [options]
    })
  },
  // exclude specific files or folders from watching by change
configureWebpack: {
  watchOptions: {
    ignored: /.*\.json/
  }
},
};

```