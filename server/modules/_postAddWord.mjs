/**
 * @description Add new word to `app.locals.settings.wordData` and send it back to front
 */
import express from "express";
import {
  putWord
} from "./putWord.mjs"

const mPostAddWord = express.Router();

mPostAddWord.post("/", async (req, res, next) => {
  const wordData = req.app.get("wordData");
  try {
    if (wordData) {
      wordData.push(req.body);
    } else {
      throw new Error("Error: something wrong with mPostAddWord in postAddWord!");
    }
  } catch (err) {
    console.log(err);
    return;
  } finally {
    res.send(wordData);
    // update api data
    putWord(JSON.stringify(wordData));
    next();
  }
});

export default mPostAddWord;