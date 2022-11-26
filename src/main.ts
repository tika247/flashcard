import { createApp, ref, Ref } from "vue";
import App from "./App.vue";
import router from "./router";
import globalProps from "./store/globalProps";
import { WordType } from "@/@type/type";
import axios from "axios";
const URL = "/api/api.json";
const word: Ref<Array<WordType> | null> = ref(null);

/**
 * @description gettigData from API → create vm
 */
(async () => {
  await axios
    .get(URL)
    .then((response) => {
      word.value = response.data;
    })
    .catch((error) => {
      console.log("JSON file does not exsist or broken", error);
    });

  const vm = createApp(App);
  vm.use(router);
  vm.provide("$globalProps", globalProps);
  vm.provide("$word", word);
  vm.mount("#app");
})();
