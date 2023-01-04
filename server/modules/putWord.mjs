/**
 * @description put word-data and overwrite the api file 
 * @param {object} wordData - latest word data
 */
import fs from "fs";

const distPath = `${process.cwd()}/dist/api/api.json`;
const publicPath = `${process.cwd()}/public/api/api.json`;

export const putWord = (wordData) => {
  fs.writeFile(distPath, wordData, (err) => {
    if (err) console.log("Cannot put into a dist api file!");
  });
  fs.writeFile(publicPath, wordData, (err) => {
    if (err) console.log("Cannot put into a public api file!");
  });
}