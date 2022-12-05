/**
 * @description Add new word to `app.locals.settings.wordData` and send it back to front
 */
import express from "express";
const mPostNewWord = express.Router();

mPostNewWord.post("/", async (req, res, next) => {
  req.app.get("wordData").push(req.body);
  res.send(req.app.get("wordData"));
  next();
});

export default mPostNewWord;