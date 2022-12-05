import express from "express";
const mPostNewWord = express.Router();

mPostNewWord.post("/", async (req, res, next) => {
  res.send(req.body);

  next();
});

export default mPostNewWord;