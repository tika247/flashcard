## app.set();

- In express, global variable is set with `app.set("hoge")`;
    - variable set with is into `app.locals.settings`;
- To access, with `app.get("hoge")`;

## get json

``` js

const apiData = JSON.parse(fs.readFileSync(`${process.cwd()}/dist/api/api.json`, 'utf8'));

```