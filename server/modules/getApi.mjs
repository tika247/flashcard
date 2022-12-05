import axios from "axios";
import express from "express";
const mGetApi = express.Router();
// const URL = `${process.cwd()}/dist/api/api.json`;
const URL = "http://localhost:8080/api/api.json";

mGetApi.get("/", async (req, res, next) => {
  res.send(req.app.get("wordData"));

  next();
});

export default mGetApi;