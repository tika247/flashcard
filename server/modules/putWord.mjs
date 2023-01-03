/**
 * @description before the page closed, put word-data as the new. 
 * @param {object} req.body.data
 * @param {number} req.body.index
 */
import fs from "fs/promises";
import express from "express";
const mPutWord = express.Router();

mPutWord.post("/", async (req, res, next) => {
  const updateData = JSON.stringify(req.app.get("wordData"));
  const apiFiles = "public/api/api.json";
  console.log(updateData);
  try {
    await fs.writeFile(apiFiles, updateData);
  } catch (err) {
    console.log(err.message);
  }
  res.send(updateData);
  next();
});

export default mPutWord;