import express from "express";
import {
  createServer
} from "http";
import path from 'path';
import {
  fileURLToPath
} from 'url';
const __filename = fileURLToPath(
  import.meta.url);
const __dirname = path.dirname(__filename);

(function () {
  const app = express();
  app.use(express.static("dist")); // get document root

  const httpServer = createServer(app);

  const PORT = process.env.PORT || 3000;

  app.use('/img', express.static(__dirname + '/dist/img/'));
  app.use('/css', express.static(__dirname + '/dist/css/'));
  app.use('/js', express.static(__dirname + '/dist/js/'));

  app.use(express.json());
  app.use(express.urlencoded({
    extended: true
  }));

  app.get("/", (req, res) => {
    // set up routing
    res.sendFile(__dirname + "/dist/index.html");
  });

  /**
   * @description activate server
   */
  app.post('/', (req, res) => {
    console.log(req.body);
    res.send(req.body);
  })

  /**
   * @description activate server
   */
  httpServer.listen(PORT, () => console.log('App Listening is succeeded!'));
})();