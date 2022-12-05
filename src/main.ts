import { createApp, ref, Ref } from "vue";
import App from "./App.vue";
import router from "./router";
import globalProps from "./store/globalProps";
import axios from "axios";
const URL = "/api/";
const word: Ref<Array<WordType> | null> = ref(null);

/**
 * @description Getting Data from API → Create Vm
 */
(async () => {
  await axios
    .get(URL)
    .then((res) => {
      word.value = res.data;
    })
    .catch((error) => {
      console.log("JSON file does not exsist or broken", error);
    });

  console.log(word.value);

  const vm = createApp(App);
  vm.use(router);
  vm.provide("$globalProps", globalProps);
  vm.provide("$word", word);
  vm.mount("#app");
})();
