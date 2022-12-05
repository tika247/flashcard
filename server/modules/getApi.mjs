/**
 * @description When browser-open, send `app.locals.settings.wordData` to front
 */
import express from "express";
const mGetApi = express.Router();

mGetApi.get("/", async (req, res, next) => {
  res.send(req.app.get("wordData"));

  next();
});

export default mGetApi;