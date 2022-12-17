/**
 * @description Add new word to `app.locals.settings.wordData` and send it back to front
 */
import express from "express";
const mPostAddNewWord = express.Router();

mPostAddNewWord.post("/", async (req, res, next) => {
  req.app.get("wordData").push(req.body);
  res.send(req.app.get("wordData"));
  next();
});

export default mPostAddNewWord;