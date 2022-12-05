import axios from "axios";
import express from "express";
const mGetApi = express.Router();
// const URL = `${process.cwd()}/dist/api/api.json`;
const URL = "http://localhost:8080/api/api.json";

mGetApi.get("/", async (req, res) => {
  let wordData = null;
  try {
    const apiData = await axios.get(URL);
    wordData = apiData.data
    res.send(wordData);
  } catch (error) {
    console.error(error);
  }

  return wordData;
});

export default mGetApi;