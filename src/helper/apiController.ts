import axios from "axios";

const apiController: any = {
  /**
   * @description add new word
   * @param $word
   * @param newWordInfo
   * @returns {object} returnData
   * @example await apiController.addNewWord($globalProps, $word, newWordInfo);
   */
  addNewWord: async (
    $word: any,
    newWordInfo: any
  ): Promise<WordType | null> => {
    let returnData = null;
    await axios
      .post("/addNewWord", newWordInfo)
      .then((res) => {
        if ($word) {
          returnData = res.data;
        }
      })
      .catch((error) => {
        console.log(error);
      });

    return returnData;
  },
  /**
   * @description remove word
   */
  removeWord: async (
    $word: any,
    removeTargetIndex: number
  ): Promise<WordType | null> => {
    let returnData = null;
    await axios
      .post("/removeWord", { data: removeTargetIndex })
      .then((res) => {
        if ($word) {
          returnData = res.data;
        }
      })
      .catch((error) => {
        console.log(error);
      });

    return returnData;
  },
};

export default apiController;
