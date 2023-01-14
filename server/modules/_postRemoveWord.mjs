/**
 * @description Remove word to `app.locals.settings.wordData` and send it back to front
 * @param {number} req.body.data - remove target index
 */
import express from "express";
import {
  putWord
} from "./putWord.mjs"

const mPostRemoveWord = express.Router();

mPostRemoveWord.post("/", async (req, res, next) => {
  const wordData = req.app.get("wordData");
  try {
    if (wordData) {
      wordData.splice(req.body.data, 1);
    } else {
      throw new Error("Error: something wrong with mPostRemoveWord in postRemoveWord!");
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

export default mPostRemoveWord;