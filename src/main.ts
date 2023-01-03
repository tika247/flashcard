import { createApp, ref, Ref } from "vue";
import App from "./App.vue";
import router from "./router";
import globalProps from "./store/globalProps";
import apiController from "./helper/apiController";
import axios from "axios";
const API_GET_URL = "/api/";
// const API_PUT_URL = "/api/put/";
const $word: Ref<Array<WordType> | null> = ref(null);

window.addEventListener("beforeunload", async (e) => {
  e.preventDefault();
  e.returnValue = "";
  alert("close?");
  await apiController.putWord($word.value);

  return;
});

/**
 * @description Getting Data from API → Create Vm
 */
(async () => {
  await axios
    .get(API_GET_URL)
    .then((res) => {
      $word.value = res.data;
    })
    .catch((err) => {
      console.log("JSON file does not exsist or broken", err);
    });

  const vm = createApp(App);
  vm.use(router);
  vm.provide("$globalProps", globalProps);
  vm.provide("$word", $word);
  vm.mount("#app");
})();
