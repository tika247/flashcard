import axios from "axios";

/**
 * @description add new word
 * @param $word
 * @param addWordInfo
 * @returns {object} returnData
 * @example await addWord($globalProps, $word, addWordInfo);
 */
export const addWord = async (
  addWordInfo: WordType
): Promise<string | void> => {
  await axios
    .post("/addWord", addWordInfo)
    .then((res) => {
      if (!res || !res.data) {
        throw new Error(
          "Error: Something Wrong with addWord in  apiController.ts"
        );
      }
    })
    .catch((err) => {
      alert(err);
      return;
    });

  return "addWord is scceeded!";
};
/**
 * @description put word before the page closed
 */
export const putWord = async (putWordData: Array<WordType>) => {
  await axios
    .post("/putWord/", putWordData)
    .then((res) => {
      if (!res || !res.data) {
        throw new Error(
          "Error: Something Wrong with putWord in  apiController.ts"
        );
      }
    })
    .catch((err) => {
      alert(err);
      return;
    });
};
