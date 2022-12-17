/**
 * @description Edit word to `app.locals.settings.wordData` and send it back to front
 * @param {object} req.body.data - edit data
 * @param {number} req.body.index - edit target index
 */
import express from "express";
const mPostEditWord = express.Router();

mPostEditWord.post("/", async (req, res, next) => {
  req.app.get("wordData").splice(req.body.index, 1, req.body.data);
  res.send(req.app.get("wordData"));
  next();
});

export default mPostEditWord;