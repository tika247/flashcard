import express from "express";
import {
  createServer
} from "http";
import path from 'path';
import {
  fileURLToPath
} from 'url';
import mGetApi from "./modules/getApi.mjs"
const __filename = fileURLToPath(
  import.meta.url);
  
  (function () {
  const __dirname = path.dirname(__filename);
  let wordData = null;
  const app = express();
  app.use(express.static("dist")); // get document root

  const httpServer = createServer(app);

  const PORT = process.env.PORT || 3000;

  app.use('/img', express.static(`${__dirname}/dist/img/`));
  app.use('/css', express.static(`${__dirname}/dist/css/`));
  app.use('/js', express.static(`${__dirname}/dist/js/`));

  // TODO:check if needed
  app.use(express.json());
  app.use(express.urlencoded({
    extended: true
  }));

  /**
   * @description set up routing
   */
  app.get("/", async (req, res) => {
    res.sendFile(__dirname + "/dist/index.html");
  });

  /**
   * @description set up routing
   */
  wordData = app.use("/api/", mGetApi);

  /**
   * @description add new word
   */
  app.post('/addNewWord', (req, res) => {
    console.log(req.body);
    res.send(req.body);
  })

  /**
   * @description activate server
   */
  httpServer.listen(PORT, () => console.log('App Listening is succeeded!'));
})();