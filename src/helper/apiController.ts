import axios from "axios";

const apiController: any = {
  /**
   * @description add new word
   * @param $word
   * @param addWordInfo
   * @returns {object} returnData
   * @example await apiController.addWord($globalProps, $word, addWordInfo);
   */
  addWord: async (addWordInfo: WordType): Promise<string | void> => {
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
  },
  /**
   * @description remove word
   */
  removeWord: async (removeTargetIndex: number): Promise<string | void> => {
    await axios
      .post("/removeWord", { data: removeTargetIndex })
      .then((res) => {
        if (!res || !res.data) {
          throw new Error(
            "Error: Something Wrong with removeWord in  apiController.ts"
          );
        }
      })
      .catch((err) => {
        alert(err);
        return;
      });

    return "removeWord is scceeded!";
  },
  /**
   * @description edit word
   */
  editWord: async (
    editWordInfo: WordType,
    editTargetIndex: number
  ): Promise<string | void> => {
    await axios
      .post("/editWord", { data: editWordInfo, index: editTargetIndex })
      .then((res) => {
        if (!res || !res.data) {
          throw new Error(
            "Error: Something Wrong with removeWord in  apiController.ts"
          );
        }
      })
      .catch((err) => {
        alert(err);
        return;
      });

    return "editWord is scceeded!";
  },
  /**
   * @description put word before the page closed
   */
  putWord: async (putWordData: WordType) => {
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
  },
};

export default apiController;
