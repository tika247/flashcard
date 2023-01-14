/**
 * @description put word-data and overwrite the api file 
 * @param {object} wordData - latest word data
 */
import fs from "fs";
import express from "express";

const mPutWord = express.Router();

mPutWord.post("/", async (req, res, next) => {
  // update `app.locals.settings`
  req.app.set("wordData", JSON.stringify(req.body));
  const wordData = req.app.get("wordData");

  try {
    if (wordData) {
      const distPath = `${process.cwd()}/dist/api/api.json`;
      const publicPath = `${process.cwd()}/public/api/api.json`;
      fs.writeFile(distPath, wordData, (err) => {
        if (err) console.log("Cannot put into a dist api file!");
      });
      fs.writeFile(publicPath, wordData, (err) => {
        if (err) console.log("Cannot put into a public api file!");
      });
    } else {
      throw new Error("Error: something wrong with mPutWord in putWord!");
    }
  } catch (err) {
    console.log(err);
    return;
  } finally {
    res.send("putWord is succeeded!");
    next();
  }
});

export default mPutWord;