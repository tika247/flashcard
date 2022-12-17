import express from "express";
import {
  createServer
} from "http";
import path from 'path';
import fs from 'fs';
import {
  fileURLToPath
} from 'url';
import helper from "./modules/helper.mjs"
import mGetApi from "./modules/getApi.mjs"
import mPostAddNewWord from "./modules/postAddNewWord.mjs"
import mPostRemoveWord from "./modules/postRemoveWord.mjs"
import mPostEditWord from "./modules/postEditWord.mjs"
const __filename = fileURLToPath(
  import.meta.url);

(() => {
  const __dirname = path.dirname(__filename);
  const app = express();
  app.use(express.static("dist")); // get document root
  const httpServer = createServer(app);
  const PORT = process.env.PORT || 3000;
  const apiData = JSON.parse(fs.readFileSync(`${process.cwd()}/dist/api/api.json`, 'utf8'));
  app.set('wordData', apiData);

  /**
   * @description set static
   */
  app.use('/img', express.static(`${__dirname}/dist/img/`));
  app.use('/css', express.static(`${__dirname}/dist/css/`));
  app.use('/js', express.static(`${__dirname}/dist/js/`));

  /**
   * @description JSON manipulation
   * @todo check if needed
   */
  app.use(express.json());
  app.use(express.urlencoded({
    extended: true
  }));

  /**
   * @description Inicial Rendering
   */
  app.get("/", async (req, res, next) => {
    res.sendFile(__dirname + "/dist/index.html");

    next();
  });

  /**
   * @description When browser-open, get latest wordData
   */
  app.use("/api/", mGetApi);

  /**
   * @description Add new word
   */
  app.use("/addNewWord", mPostAddNewWord);

  /**
   * @description Edit word
   */
  app.use("/editWord", mPostEditWord);

  /**
   * @description Remove word
   */
  app.use("/removeWord", mPostRemoveWord);

  /**
   * @description activate server
   */
  httpServer.listen(PORT, () => console.log('App Listening is succeeded!'));
})();