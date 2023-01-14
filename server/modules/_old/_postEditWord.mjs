/**
 * @description Edit word to `app.locals.settings.wordData` and send it back to front
 * @param {object} req.body.data - edit data
 * @param {number} req.body.index - edit target index
 */
import express from "express";
import {
  putWord
} from "./putWord.mjs"

const mPostEditWord = express.Router();

mPostEditWord.post("/", async (req, res, next) => {
  const wordData = req.app.get("wordData");
  try {
    if (wordData) {
      wordData.splice(req.body.index, 1, req.body.data);
    } else {
      throw new Error("Error: something wrong with mPostEditWord in postEditWord!");
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

export default mPostEditWord;