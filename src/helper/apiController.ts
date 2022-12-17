import axios from "axios";

const apiController: any = {
  /**
   * @description add new word
   * @param $word
   * @param newWordInfo
   * @returns {object} returnData
   * @example await apiController.addNewWord($globalProps, $word, newWordInfo);
   */
  addNewWord: async (newWordInfo: any): Promise<WordType | null> => {
    let returnData = null;
    await axios
      .post("/addNewWord", newWordInfo)
      .then((res) => {
        returnData = res.data;
      })
      .catch((error) => {
        console.log(error);
      });

    return returnData;
  },
  /**
   * @description remove word
   */
  removeWord: async (removeTargetIndex: number): Promise<WordType | null> => {
    let returnData = null;
    await axios
      .post("/removeWord", { data: removeTargetIndex })
      .then((res) => {
        returnData = res.data;
      })
      .catch((error) => {
        console.log(error);
      });

    return returnData;
  },
  /**
   * @description edit word
   */
  editWord: async (
    editWordInfo: any,
    editTargetIndex: number
  ): Promise<WordType | null> => {
    let returnData = null;
    await axios
      .post("/editWord", { data: editWordInfo, index: editTargetIndex })
      .then((res) => {
        returnData = res.data;
      })
      .catch((error) => {
        console.log(error);
      });

    return returnData;
  },
};

export default apiController;
