## app.set();

- In express, global variable is set with `app.set("hoge")`;
    - variable set with is into `app.locals.settings`;
- To access, with `app.get("hoge")`;